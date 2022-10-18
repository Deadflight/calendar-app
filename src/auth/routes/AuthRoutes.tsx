import { RouteObject, Navigate } from "react-router-dom";
import { LoginPage } from "../pages";

export const AuthRoutes: RouteObject[] = [
	{
		path: "auth",
		children: [
			{
				path: "login",
				element: <LoginPage />,
			},
		],
	},
	{
		path: "auth/*",
		element: <Navigate to={"/auth/login"} />,
	},
];
