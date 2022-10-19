import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../hooks";

export const PrivateRoutes = () => {
	const { status } = useAuthStore();

	if (status === "not-authenticated") {
		return <Navigate to={"/auth/login"} />;
	}

	return <Outlet />;
};
