import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from ".";
import { AuthRoutes } from "../auth";
import { CalendarRoutes } from "../calendar";

export const AppRouter = () => {
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

	return <RouterProvider router={router} />;
};
