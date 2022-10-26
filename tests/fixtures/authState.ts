import { IAuthState } from "../../src/interfaces";
import { testUserCredentials } from "./testUser";

export const authInitialState = {
	status: "not-authenticated",
	user: null,
	errorMessage: undefined,
} as IAuthState;

export const authenticatedState = {
	status: "authenticated",
	user: testUserCredentials,
	errorMessage: undefined,
} as IAuthState;

export const notAuthenticatedState = {
	status: "not-authenticated",
	user: null,
	errorMessage: undefined,
} as IAuthState;
