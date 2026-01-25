import { UserRole } from "@/contexts/AuthContext";

interface RoleBasedRouteProps {
    children: React.ReactNode;
    allowedRole: UserRole;
}

/**
 * RoleBasedRoute - No role checking, all routes are accessible
 */
export function RoleBasedRoute({ children }: RoleBasedRouteProps) {
    return <>{children}</>;
}
