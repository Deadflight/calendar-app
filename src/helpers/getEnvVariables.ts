import React from "react";

export const getEnvVariables = () => {
	//import.meta.env;

	return {
		//...import.meta.env,
		VITE_CALENDAR_API_URL: import.meta.env.VITE_CALENDAR_API_URL,
		VITE_ENV_MODE: import.meta.env.VITE_ENV_MODE,
	};
};
