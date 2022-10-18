import React from "react";
import { useCalendarStore } from "../../hooks";
import "./FabDelete.css";
export const FabDelete = () => {
	const { startDeletingEvent, hasEventSelected } = useCalendarStore();

	const handleDelete = () => {
		startDeletingEvent();
	};

	if (!hasEventSelected) return null;

	return (
		<button
			className="fab-danger btn btn-danger"
			type="button"
			onClick={handleDelete}
		>
			<i className="fas fa-trash-alt"></i>
		</button>
	);
};
