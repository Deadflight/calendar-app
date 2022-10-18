import React from "react";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addHours } from "date-fns";
import { IEvent } from "../../../interfaces";

const tempEvent = {
	title: "Boss's birthday",
	notes: "Buy the cake",
	_id: "123",
	start: new Date(),
	end: addHours(new Date(), 2),
	bgColor: "#fafafa",
	user: {
		_id: "123",
		name: "Carlos",
	},
};

export const calendarSlice = createSlice({
	name: "calendar",
	initialState: {
		events: [tempEvent] as IEvent[],
		activeEvent: null as IEvent | null,
	},
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
				if (event._id === payload._id) {
					return payload;
				}
				return event;
			});
		},
		onDeleteEvent: (state) => {
			if (state.activeEvent) {
				state.events = state.events.filter(
					(event) => event._id !== state.activeEvent?._id
				);
				state.activeEvent = null;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } =
	calendarSlice.actions;
