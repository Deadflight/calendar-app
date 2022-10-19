import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IUser } from "../../../interfaces";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		status: "not-authenticated",
		user: null,
		errorMessage: undefined,
	} as IAuthState,
	reducers: {
		onChecking: (state) => {
			state.status = "checking";
			state.user = null;
			state.errorMessage = undefined;
		},
		onLogin: (state, { payload }: PayloadAction<IUser>) => {
			state.status = "authenticated";
			state.user = payload;
			state.errorMessage = undefined;
		},
		onLogout: (state, { payload }: PayloadAction<string | undefined>) => {
			state.status = "not-authenticated";
			state.user = null;
			state.errorMessage = payload;
		},
		clearErrorMessage: (state) => {
			state.errorMessage = undefined;
		},
	},
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, clearErrorMessage } =
	authSlice.actions;
