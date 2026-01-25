
import { createClient } from '@supabase/supabase-js';
import { strict as assert } from 'assert';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Error: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY not set.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function runTests() {
    console.log('🚀 Starting API Tests against Supabase...');

    // 1. Authenticate (Create Temp User)
    const email = `automated_test_${Date.now()}@gmail.com`;
    const password = 'Password@12345'; // Stronger password

    console.log(`\nCan verify Auth? Attempting to sign up ${email}...`);
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password
    });

    if (authError) {
        console.error('❌ Auth Failed:', authError.message);
        // Try signing in if already exists (unlikely given timestamp)
        return;
    }

    const user = authData.user;
    console.log('✅ Auth Successful. User ID:', user?.id);

    // Note: If email confirmation is enabled, this might fail unless "Allow Unconfirmed" is on or we use a pre-verified account.
    // We'll assume we can proceed or sign in. 
    // If signUp returns a session, we are good.

    if (!authData.session) {
        console.warn('⚠️ No session returned on signup. Attempting Anonymous Sign In...');
        const { data: anonData, error: anonError } = await supabase.auth.signInAnonymously();

        if (anonError || !anonData.session) {
            console.error('❌ Could not get session (Anon failed too). Aborting.');
            return;
        }
        console.log('✅ Anonymous Auth Successful. User ID:', anonData.user?.id);
        authData.session = anonData.session;
        authData.user = anonData.user;
    }

    const creatorId = user.id;

    // --- Priority Tests ---

    // 1. Valid POST Request
    console.log('\nTest 1: Valid POST Request (Create Service)');
    const validService = {
        creator_id: creatorId,
        title: 'Test Service Valid',
        price: 50.00,
        description: 'A valid service',
        delivery_days: 3
    };
    const { data: t1Data, error: t1Error } = await supabase.from('services').insert(validService).select().single();
    if (t1Error) console.error('❌ Failed:', t1Error.message);
    else {
        console.log('✅ Passed. Service ID:', t1Data.id);
    }

    // 2. Missing Required Field
    console.log('\nTest 2: Missing Required Field (Title)');
    const missingField = {
        creator_id: creatorId,
        price: 50.00
    };
    const { error: t2Error } = await supabase.from('services').insert(missingField);
    if (t2Error) console.log('✅ Passed. Expected Error:', t2Error.message);
    else console.error('❌ Failed. Insert succeeded without title.');

    // 3. Invalid Data Type
    console.log('\nTest 3: Invalid Data Type (Price as String)');
    const invalidType = {
        creator_id: creatorId,
        title: 'Invalid Price Service',
        price: 'fifty dollars' // String instead of number
    };
    const { error: t3Error } = await supabase.from('services').insert(invalidType);
    // Supabase/Postgres might coerce or fail. 
    if (t3Error) console.log('✅ Passed. Expected Error:', t3Error.message);
    else console.error('❌ Failed. Insert succeeded with invalid price.');

    // 4. Exceed Maximum Field Length
    console.log('\nTest 4: Exceed Maximum Field Length (Title)');
    // Assuming text is unbounded, but let's test a very long string to see if it responds generically
    const longTitle = 'A'.repeat(10000);
    const longService = {
        creator_id: creatorId,
        title: longTitle,
        price: 10
    };
    const { error: t4Error } = await supabase.from('services').insert(longService);
    if (t4Error) console.log('✅ Passed (if error expected). Error:', t4Error.message);
    else console.log('ℹ️ Accepted long string (Supabase TEXT type is variable length). This behaves as expected for Postgres.');


    // 5. Valid Input Multiple Times
    console.log('\nTest 5: Valid Input Multiple Times');
    const services = [1, 2, 3].map(i => ({
        creator_id: creatorId,
        title: `Multi Service ${i}`,
        price: 10 * i
    }));
    const { error: t5Error } = await supabase.from('services').insert(services);
    if (t5Error) console.error('❌ Failed:', t5Error.message);
    else console.log('✅ Passed. 3 Services inserted.');

    // --- Edge Case Tests ---

    // 1. Empty Payload
    console.log('\nEdge 1: Empty Payload');
    const { error: e1Error } = await supabase.from('services').insert({});
    if (e1Error) console.log('✅ Passed. Expected Error:', e1Error.message);
    else console.error('❌ Failed. Empty insert succeeded.');


    // 2. SQL Injection Attempt
    console.log('\nEdge 2: SQL Injection Attempt');
    const sqlInjTitle = "'; DROP TABLE services; --";
    const sqlInjService = {
        creator_id: creatorId,
        title: sqlInjTitle,
        price: 66.6
    };
    const { data: e2Data, error: e2Error } = await supabase.from('services').insert(sqlInjService).select().single();
    if (e2Error) {
        console.log('ℹ️ Error returned (safe):', e2Error.message);
    } else {
        // Must verify it didn't drop table and title is literal
        if (e2Data.title === sqlInjTitle) {
            console.log('✅ Passed. Input sanitized and stored literally.');
        } else {
            console.error('❌ Unexpected title stored:', e2Data.title);
        }
    }

    // 3. Special Characters
    console.log('\nEdge 3: Special Characters');
    const specialChars = "User @#$$%^&*()";
    const { error: e3Error } = await supabase.from('services').insert({
        creator_id: creatorId,
        title: specialChars,
        price: 10
    });
    if (e3Error) console.error('❌ Failed:', e3Error.message);
    else console.log('✅ Passed. Special characters handled.');

    // 4. Boundary Testing
    console.log('\nEdge 4: Boundary Testing (Price)');
    const boundaryServices = [
        { creator_id: creatorId, title: 'Zero Price', price: 0 },
        { creator_id: creatorId, title: 'High Price', price: 999999.99 }
    ];
    const { error: e4Error } = await supabase.from('services').insert(boundaryServices);
    if (e4Error) console.error('❌ Failed:', e4Error.message);
    else console.log('✅ Passed. Boundary values accepted.');

    // 5. Concurrent Requests
    console.log('\nEdge 5: Concurrent requests');
    const promises = [1, 2, 3, 4, 5].map(i =>
        supabase.from('services').insert({
            creator_id: creatorId,
            title: `Concurrent ${i}`,
            price: 100
        })
    );
    try {
        await Promise.all(promises);
        console.log('✅ Passed. 5 concurrent requests handled.');
    } catch (err) {
        console.error('❌ Concurrent requests failed:', err);
    }

    console.log('\n🏁 Tests Completed.');
}

runTests().catch(console.error);
