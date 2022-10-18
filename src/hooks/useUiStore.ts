import React from "react";
import { useAppSelector, useAppDispatch } from "./";
import { onCloseDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => {
	const dispatch = useAppDispatch();
	const { isDateModalOpen } = useAppSelector((state) => state.ui);

	const openDateModal = () => {
		dispatch(onOpenDateModal());
	};

	const closeDateModal = () => {
		dispatch(onCloseDateModal());
	};
	return {
		//Properties
		isDateModalOpen,

		//Methods
		openDateModal,
		closeDateModal,
	};
};
