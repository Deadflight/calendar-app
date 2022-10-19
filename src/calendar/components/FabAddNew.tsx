import React from "react";
import { useAuthStore, useCalendarStore, useUiStore } from "../../hooks";
import "./FabAddNew.css";
import { addHours } from "date-fns";

export const FabAddNew = () => {
	const { openDateModal } = useUiStore();
	const { setActiveEvent } = useCalendarStore();
	const { user } = useAuthStore();

	const handleClickNew = () => {
		setActiveEvent({
			title: "",
			id: "",
			notes: "",
			start: new Date(),
			end: addHours(new Date(), 2),
			bgColor: "#fafafa",
			user: user,
		});
		openDateModal();
	};

	return (
		<button
			className="fab btn btn-primary"
			type="button"
			onClick={handleClickNew}
		>
			<i className="fas fa-plus"></i>
		</button>
	);
};
