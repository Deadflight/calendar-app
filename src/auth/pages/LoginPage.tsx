import React, { FormEvent } from "react";
import { useAuthStore, useForm } from "../../hooks";
import { IForm, IFormValidations } from "../../interfaces";
import "./LoginPage.css";
import { useEffect, useMemo } from "react";
import Swal from "sweetalert2";

const loginFormFields = {
	email: "",
	password: "",
} as IForm;

const loginFormValidations = {
	email: {
		fn: (value: string) => value.includes("@"),
		errorMessage: "Invalid email",
	},
	password: {
		fn: (value: string) => value.length >= 6,
		errorMessage: "Password must contain 6 characters",
	},
} as IFormValidations;

const registerFormFields = {
	email: "",
	password: "",
	name: "",
	password2: "",
} as IForm;

const registerValidations = {
	email: {
		fn: (value: string) => value.includes("@"),
		errorMessage: "Invalid email",
	},
	password: {
		fn: (value: string) => value.length >= 6,
		errorMessage: "Password must contain 6 characters",
	},
} as IFormValidations;

export const LoginPage = () => {
	const { startLogin, errorMessage, startRegister, status } = useAuthStore();

	const isBtnDisabled = useMemo(() => status === "checking", [status]);

	const {
		onInputChange: onLoginInputChange,
		onResetForm: onLoginResetForm,
		isFormValid: isLoginFormValid,
		password: loginPassword,
		email: loginEmail,
	} = useForm(loginFormFields, loginFormValidations);

	const {
		onInputChange: onRegisterInputChange,
		onResetForm: onRegisterResetForm,
		isFormValid: isRegisterFormValid,
		password: registerPassword,
		email: registerEmail,
		name: registerName,
		password2: registerPassword2,
	} = useForm(registerFormFields, registerValidations);

	const onLoginSubmit = (event: FormEvent) => {
		event?.preventDefault();

		const loginForm = {
			email: loginEmail,
			password: loginPassword,
		} as IForm;

		startLogin(loginForm);
	};

	const onRegisterSubmit = (event: FormEvent) => {
		event?.preventDefault();

		if (
			!registerEmail ||
			!registerName ||
			!registerPassword ||
			!registerPassword2
		) {
			Swal.fire("Error in register", "Empty Field", "error");
			return;
		}

		if (registerPassword !== registerPassword2) {
			Swal.fire("Error in register", "Passwords are diferents", "error");
			return;
		}

		const registerForm = {
			email: registerEmail,
			password: registerPassword,
			name: registerName,
			password2: registerPassword2,
		} as IForm;

		startRegister(registerForm);
	};

	useEffect(() => {
		if (errorMessage !== undefined) {
			Swal.fire("Error in authentication", errorMessage, "error");
		}
	}, [errorMessage]);

	return (
		<div className="container login-container">
			<div className="row">
				<div className="col-md-6 login-form-1">
					<h3>Login</h3>
					<form onSubmit={onLoginSubmit}>
						<div className="form-group mb-2">
							<input
								type="text"
								className="form-control"
								placeholder="Email"
								name={"email"}
								onChange={onLoginInputChange}
								value={loginEmail}
							/>
						</div>
						<div className="form-group mb-2">
							<input
								type="password"
								className="form-control"
								placeholder="Password"
								name={"password"}
								onChange={onLoginInputChange}
								value={loginPassword}
							/>
						</div>
						<div className="form-group mb-2">
							<input
								type="submit"
								className="btnSubmit"
								value="Login"
								disabled={isBtnDisabled}
							/>
						</div>
					</form>
				</div>

				<div className="col-md-6 login-form-2">
					<h3>Register</h3>
					<form onSubmit={onRegisterSubmit}>
						<div className="form-group mb-2">
							<input
								type="text"
								className="form-control"
								placeholder="Name"
								name="name"
								value={registerName}
								onChange={onRegisterInputChange}
							/>
						</div>
						<div className="form-group mb-2">
							<input
								type="email"
								className="form-control"
								placeholder="Email"
								name="email"
								value={registerEmail}
								onChange={onRegisterInputChange}
							/>
						</div>
						<div className="form-group mb-2">
							<input
								type="password"
								className="form-control"
								placeholder="Password"
								name="password"
								value={registerPassword}
								onChange={onRegisterInputChange}
							/>
						</div>

						<div className="form-group mb-2">
							<input
								type="password"
								className="form-control"
								placeholder="Repeat you password"
								name="password2"
								value={registerPassword2}
								onChange={onRegisterInputChange}
							/>
						</div>

						<div className="form-group mb-2">
							<input
								type="submit"
								className="btnSubmit"
								value="Create Account"
								disabled={isBtnDisabled}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
