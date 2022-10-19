import React from "react";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../calendar";
import { IEvent } from "../interfaces";
import {
	onAddNewEvent,
	onDeleteEvent,
	onLoadEvents,
	onSetActiveEvent,
	onUpdateEvent,
} from "../store";
import { useAppDispatch, useAppSelector } from "./";
import Swal from "sweetalert2";

export const useCalendarStore = () => {
	const dispatch = useAppDispatch();
	const { events, activeEvent } = useAppSelector((state) => state.calendar);

	const setActiveEvent = (calendarEvent: IEvent | null) => {
		dispatch(onSetActiveEvent(calendarEvent));
	};

	const startLoadingEvents = async () => {
		try {
			const { data } = await calendarApi.get<{ ok: true; events: IEvent[] }>(
				"/events"
			);

			const events = convertEventsToDateEvents(data.events);

			dispatch(onLoadEvents(events));
		} catch (error) {
			console.log("Error to loading events");
			console.log(error);
		}
	};

	const startSavingEvent = async (calendarEvent: IEvent) => {
		const { user, title, start, end, notes } = calendarEvent;

		try {
			if (calendarEvent.id) {
				await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
				dispatch(onUpdateEvent(calendarEvent));

				return;
			}

			const { data } = await calendarApi.post<{ ok: boolean; event: IEvent }>(
				"/events",
				{
					user,
					title,
					start,
					end,
					notes,
				}
			);

			dispatch(
				onAddNewEvent({
					...calendarEvent,
					id: data.event.id,
					user,
				})
			);
		} catch (error: any) {
			console.log(error);
			Swal.fire("Error saving event", error.response.data.msg, "error");
		}
	};

	const startDeletingEvent = async () => {
		try {
			await calendarApi.delete(`/events/${activeEvent?.id}`);
			dispatch(onDeleteEvent());
		} catch (error: any) {
			console.log(error);
			Swal.fire("Error to delete event", error.response.data.msg, "error");
		}
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
		startLoadingEvents,
	};
};
