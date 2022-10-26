import { IAuthState } from "../../../src/interfaces";
import {
	authSlice,
	clearErrorMessage,
	onLogin,
	onLogout,
} from "../../../src/store/slices/auth/authSlice";
import {
	authenticatedState,
	authInitialState,
	notAuthenticatedState,
} from "../../fixtures/authState";
import { testUserCredentials } from "../../fixtures/testUser";

describe("Tests for authSlice.ts", () => {
	test("should return the initial State", () => {
		expect(authSlice.getInitialState()).toEqual(authInitialState);
	});

	test("should do the login", () => {
		const state = authSlice.reducer(
			authInitialState,
			onLogin(testUserCredentials)
		);

		expect(state).toEqual(authenticatedState);
	});

	test("should do the logout with undefined errorMessage", () => {
		const state = authSlice.reducer(authenticatedState, onLogout());

		expect(state).toEqual(notAuthenticatedState);
	});

	test("should do the logout with an errorMessage", () => {
		const errorMessage = "Logout sucess";
		const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));

		expect(state).toEqual({
			status: "not-authenticated",
			user: null,
			errorMessage,
		} as IAuthState);
	});

	test("should clear the errorMessage", () => {
		const errorMessage = "Logout sucess";
		const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
		const newState = authSlice.reducer(state, clearErrorMessage());

		expect(newState.errorMessage).toBe(undefined);
	});
});
