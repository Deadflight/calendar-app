import React from "react";
import { useAppSelector, useAppDispatch } from "./";
import { IForm } from "../interfaces/auth/form";
import { calendarApi } from "../api/";
import {
	clearErrorMessage,
	onChecking,
	onLogin,
	onLogout,
	onLogoutCalendar,
} from "../store";

export const useAuthStore = () => {
	const { status, user, errorMessage } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	const startLogin = async ({ email, password }: IForm) => {
		dispatch(onChecking());

		try {
			const { data } = await calendarApi.post("/auth", { email, password });
			localStorage.setItem("calendar-token", data.token);
			localStorage.setItem(
				"calendar-token-init-date",
				JSON.stringify(new Date().getTime())
			);

			dispatch(
				onLogin({
					name: data.name,
					uid: data.uid,
				})
			);
		} catch (error) {
			dispatch(onLogout("Credentials invalid"));
			setTimeout(() => {
				dispatch(clearErrorMessage());
			}, 1000);
			console.log(error);
		}
	};

	const startRegister = async ({ email, name, password, password2 }: IForm) => {
		dispatch(onChecking());

		try {
			const { data } = await calendarApi.post("/auth/new", {
				email,
				password,
				name,
				password2,
			});
			localStorage.setItem("calendar-token", data.token);
			localStorage.setItem(
				"calendar-token-init-date",
				JSON.stringify(new Date().getTime())
			);

			dispatch(
				onLogin({
					name: data.name,
					uid: data.uid,
				})
			);
		} catch (error: any) {
			console.log(error);
			dispatch(onLogout(error.response.data?.msg));
			setTimeout(() => {
				dispatch(clearErrorMessage());
			}, 1000);
		}
	};

	const checkAuthToken = async () => {
		const token = localStorage.getItem("calendar-token");

		if (!token) return dispatch(onLogout());

		try {
			const { data } = await calendarApi.get("/auth/renew");

			localStorage.setItem("calendar-token", data.token);
			localStorage.setItem(
				"calendar-token-init-date",
				JSON.stringify(new Date().getTime())
			);

			dispatch(
				onLogin({
					name: data.name,
					uid: data.uid,
				})
			);
		} catch (error) {
			localStorage.removeItem("calendar-token");
			localStorage.removeItem("calendar-token-init-date");
			console.log(error);
			dispatch(onLogout());
		}
	};

	const startLogout = async () => {
		localStorage.removeItem("calendar-token");
		localStorage.removeItem("calendar-token-init-date");
		dispatch(onLogoutCalendar());
		dispatch(onLogout());
	};
	return {
		//Properties
		status,
		user,
		errorMessage,

		//Methods
		startLogin,
		startRegister,
		checkAuthToken,
		startLogout,
	};
};
