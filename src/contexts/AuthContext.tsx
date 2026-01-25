import { createContext, useContext, ReactNode } from "react";

// Simple context without authentication - all users have access
export type UserRole = "customer" | "creator";

interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  role: UserRole;
}

interface AuthContextType {
  user: null;
  session: null;
  userProfile: null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string, role: UserRole) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signInWithGoogle: (role?: UserRole) => Promise<any>;
  signInWithGithub: (role?: UserRole) => Promise<any>;
  signOut: () => Promise<void>;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // No authentication - always return null/false
  const mockAuthContext: AuthContextType = {
    user: null,
    session: null,
    userProfile: null,
    loading: false,
    signUp: async () => ({ user: null, session: null }),
    signIn: async () => ({ user: null, session: null }),
    signInWithGoogle: async () => ({ user: null, session: null }),
    signInWithGithub: async () => ({ user: null, session: null }),
    signOut: async () => {},
    isLoggedIn: false,
  };

  return (
    <AuthContext.Provider value={mockAuthContext}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
