import React from "react";
import { useLocation } from "react-router-dom";
import { AuthLayout, RootLayout } from "./components";

export default function Layout () {
    const location = useLocation();
    const authRoutes = location.pathname === '/sign-up' || location.pathname === '/log-in' || location.pathname === '/onboarding';

    if (authRoutes) {
        return <AuthLayout />;
    } else {
        return <RootLayout />;
    }
}