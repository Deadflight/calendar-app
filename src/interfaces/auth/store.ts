export interface IAuthState {
	status: status;
	user: IUser;
	errorMessage: string | undefined;
}

export type status = "checking" | "authenticated" | "not-authenticated";

export type IUser = {
	name: string;
	uid: string;
} | null;
