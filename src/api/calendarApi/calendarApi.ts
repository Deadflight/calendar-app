import axios from "axios";
import { getEnvVariables } from "../../helpers/getEnvVariables";

const { VITE_CALENDAR_API_URL } = getEnvVariables();

const calendarApi = axios.create({
	baseURL: VITE_CALENDAR_API_URL,
});

//TODO configure interceptors
calendarApi.interceptors.request.use((config) => {
	config.headers = {
		...config.headers,
		"X-Calendar-Token": localStorage.getItem("calendar-token"),
	};

	return config;
});

export default calendarApi;
