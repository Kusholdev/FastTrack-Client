import React from 'react';
import useAuth from '../hooks/useAuth';
import useUserRole from '../hooks/useUserRole';
import { useLocation } from 'react-router';
const RiderRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const { role, roleLoading } = useUserRole();
    const location = useLocation();
    if (loading || roleLoading) {
        return <span className="loading loading-dots loading-xl"></span>;
    }

    if (!user || role !== "rider") {
        return <Navigate state={{ from: location.pathname }} to="/forbidden" replace />;
    }

    return children;
};

export default RiderRoute;