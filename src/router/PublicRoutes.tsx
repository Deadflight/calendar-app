import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../hooks/";

export const PublicRoutes = () => {
	const { status } = useAuthStore();

	if (status === "authenticated") {
		return <Navigate to="/" />;
	}

	return <Outlet />;
};
