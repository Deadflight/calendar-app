import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from ".";
import { AuthRoutes } from "../auth";
import { CalendarRoutes } from "../calendar";
import { useEffect } from "react";
import { useAuthStore } from "../hooks";

export const AppRouter = () => {
	const { checkAuthToken } = useAuthStore();

	const router = createBrowserRouter([
		{
			element: <PublicRoutes />,
			children: [...AuthRoutes],
		},
		{
			element: <PrivateRoutes />,
			children: [...CalendarRoutes],
		},
	]);

	useEffect(() => {
		checkAuthToken();
	}, []);

	return <RouterProvider router={router} />;
};
