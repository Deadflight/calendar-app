export interface IForm {
	email: string;
	password: string;
	name?: string | undefined;
	password2?: string | undefined;
}

export interface IFormCheckedValues {
	emailValid: string | null;
	passwordValid: string | null;
	nameValid?: string | null;
	password2Valid?: string | null;
}

export interface IFormValidations {
	email: ValidationsObject;
	password: ValidationsObject;
	name?: ValidationsObject;
	password2?: ValidationsObject;
}

export interface ValidationsObject {
	fn: (value: string) => boolean;
	errorMessage: string;
}

export type FormField = "email" | "password" | "name" | "password2";

export type FormFieldValidations =
	| "emailValid"
	| "passwordValid"
	| "nameValid"
	| "password2Valid";
