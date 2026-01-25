interface ProtectedRouteProps {
    children: React.ReactNode;
}

/**
 * ProtectedRoute - No authentication required, all routes are accessible
 */
export function ProtectedRoute({ children }: ProtectedRouteProps) {
    return <>{children}</>;
}
