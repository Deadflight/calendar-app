import React from "react";
import { IEvent } from "../interfaces";
import {
	onAddNewEvent,
	onDeleteEvent,
	onSetActiveEvent,
	onUpdateEvent,
} from "../store";
import { useAppDispatch, useAppSelector } from "./";

export const useCalendarStore = () => {
	const dispatch = useAppDispatch();
	const { events, activeEvent } = useAppSelector((state) => state.calendar);

	const setActiveEvent = (calendarEvent: IEvent | null) => {
		dispatch(onSetActiveEvent(calendarEvent));
	};

	const startSavingEvent = async (calendarEvent: IEvent) => {
		//TODO: Go to the Backend

		//TODO Ok?
		if (calendarEvent._id) {
			dispatch(onUpdateEvent(calendarEvent));
		} else {
			dispatch(
				onAddNewEvent({
					...calendarEvent,
					_id: new Date().getTime().toString(),
				})
			);
		}
	};

	const startDeletingEvent = () => {
		dispatch(onDeleteEvent());
	};

	return {
		//Properties
		events,
		activeEvent,
		hasEventSelected: !!activeEvent,

		//Methods
		setActiveEvent,
		startSavingEvent,
		startDeletingEvent,
	};
};
