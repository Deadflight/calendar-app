import React from "react";
import { useCalendarStore, useUiStore } from "../../hooks";
import "./FabAddNew.css";
import { addHours } from "date-fns";

export const FabAddNew = () => {
	const { openDateModal } = useUiStore();
	const { setActiveEvent } = useCalendarStore();

	const handleClickNew = () => {
		setActiveEvent({
			title: "",
			_id: "",
			notes: "",
			start: new Date(),
			end: addHours(new Date(), 2),
			bgColor: "#fafafa",
			user: {
				_id: "",
				name: "",
			},
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
