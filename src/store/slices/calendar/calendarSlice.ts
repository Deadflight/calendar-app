import React from "react";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addHours } from "date-fns";
import { ICalendarState, IEvent } from "../../../interfaces";

// const tempEvent = {
// 	title: "Boss's birthday",
// 	notes: "Buy the cake",
// 	id: "123",
// 	start: new Date(),
// 	end: addHours(new Date(), 2),
// 	bgColor: "#fafafa",
// 	user: {
// 		uid: "123",
// 		name: "Carlos",
// 	},
// };

export const calendarSlice = createSlice({
	name: "calendar",
	initialState: {
		events: [
			//tempEvent
		],
		activeEvent: null,
		isLoadingEvent: true,
	} as ICalendarState,
	reducers: {
		onSetActiveEvent: (state, { payload }: PayloadAction<IEvent | null>) => {
			state.activeEvent = payload;
		},
		onAddNewEvent: (state, { payload }: PayloadAction<IEvent>) => {
			state.events.push(payload);
			state.activeEvent = null;
		},
		onUpdateEvent: (state, { payload }: PayloadAction<IEvent>) => {
			state.events = state.events.map((event) => {
				if (event.id === payload.id) {
					return payload;
				}
				return event;
			});
		},
		onDeleteEvent: (state) => {
			if (state.activeEvent) {
				state.events = state.events.filter(
					(event) => event.id !== state.activeEvent?.id
				);
				state.activeEvent = null;
			}
		},
		onLoadEvents: (state, { payload }: PayloadAction<IEvent[]>) => {
			state.isLoadingEvent = false;
			//state.events = payload;
			payload.forEach((event) => {
				const exists = state.events.some((dbEvent) => dbEvent.id === event.id);

				if (!exists) {
					state.events.push(event);
				}
			});
		},
		onLogoutCalendar: (state) => {
			state.activeEvent = null;
			state.isLoadingEvent = true;
			state.events = [];
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	onSetActiveEvent,
	onAddNewEvent,
	onUpdateEvent,
	onDeleteEvent,
	onLoadEvents,
	onLogoutCalendar,
} = calendarSlice.actions;
