import { ChangeEvent, useEffect, useMemo, useState } from "react";
import {
	FormField,
	FormFieldValidations,
	IForm,
	IFormCheckedValues,
	IFormValidations,
} from "../interfaces";

export const useForm = (
	initialForm: IForm,
	formValidations: IFormValidations
) => {
	const [formState, setFormState] = useState(initialForm);
	const [formValidation, setFormValidation] = useState<IFormCheckedValues>({
		emailValid: "",
		passwordValid: "",
	});

	useEffect(() => {
		createValidators();
	}, [formState]);

	useEffect(() => {
		setFormState(initialForm);
	}, [initialForm]);

	const isFormValid = useMemo(() => {
		for (const formValue of Object.keys(formValidation)) {
			if (formValidation[formValue as FormFieldValidations] !== null)
				return false;
		}

		return true;
	}, [formValidation]);

	const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const onResetForm = () => {
		setFormState(initialForm);
	};

	const createValidators = () => {
		const formCheckedValues = {} as IFormCheckedValues;

		for (const formField of Object.keys(formValidations)) {
			const { fn, errorMessage } = formValidations[formField as FormField]!;

			const formFieldValid = `${formField}Valid` as FormFieldValidations;

			formCheckedValues[formFieldValid] = fn(formState[formField as FormField]!)
				? null
				: errorMessage;
		}

		setFormValidation(formCheckedValues);
	};

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,

		...formValidation,
		isFormValid,
	};
};
