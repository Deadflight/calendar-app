import { ICalendarState } from "../../src/interfaces/calendar/store";
export const events = [
	{
		id: "1",
		start: new Date("2022-10-21 13:00:00"),
		end: new Date("2022-10-21 15:00:00"),
		title: "Boss's birthday",
		notes: "Buy the cake",
	},
	{
		id: "2",
		start: new Date("2022-10-21 13:00:00"),
		end: new Date("2022-10-21 15:00:00"),
		title: "Carlos's birthday",
		notes: "Buy the cake for Carlos",
	},
];

export const calendarInitialState = {
	events: [
		//tempEvent
	],
	activeEvent: null,
	isLoadingEvent: true,
} as ICalendarState;

export const calendarwithEventsState = {
	events: [...events],
	activeEvent: null,
	isLoadingEvent: false,
} as ICalendarState;

export const calendarwithActiveEventState = {
	events: [...events],
	activeEvent: { ...events[0] },
	isLoadingEvent: false,
} as ICalendarState;
