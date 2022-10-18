import { RouteObject, Navigate } from "react-router-dom";
import { CalendarPage } from "../pages";

export const CalendarRoutes: RouteObject[] = [
	{
		path: "/",
		children: [
			{
				path: "/",
				element: <CalendarPage />,
			},
		],
	},
	{
		path: "/*",
		element: <Navigate to={"/"} />,
	},
];
