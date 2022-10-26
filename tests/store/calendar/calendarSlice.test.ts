import {
	calendarSlice,
	onAddNewEvent,
	onDeleteEvent,
	onLoadEvents,
	onLogoutCalendar,
	onSetActiveEvent,
	onUpdateEvent,
} from "../../../src/store/slices/calendar/calendarSlice";
import {
	calendarInitialState,
	calendarwithActiveEventState,
	calendarwithEventsState,
	events,
} from "../../fixtures/calendarState";
describe("Tests for calendarSlice.ts", () => {
	test("should return the initialState", () => {
		const state = calendarSlice.getInitialState();

		expect(state).toEqual(calendarInitialState);
	});

	test("should onSetActiveEvent active the event", () => {
		const state = calendarSlice.reducer(
			calendarwithEventsState,
			onSetActiveEvent(events[0])
		);

		expect(state.activeEvent).toEqual(events[0]);
	});

	test("should onAddNewEvent create a new event", () => {
		const newEvent = {
			id: "3",
			start: new Date("2022-10-21 13:00:00"),
			end: new Date("2022-10-21 15:00:00"),
			title: "Carlos's birthday",
			notes: "Buy the cake for Carlos",
		};

		const state = calendarSlice.reducer(
			calendarwithEventsState,
			onAddNewEvent(newEvent)
		);

		expect(state.events).toEqual([...events, newEvent]);
	});

	test("should onUpdateEvent update an event", () => {
		const updatedEvent = {
			id: "1",
			start: new Date("2022-10-21 13:00:00"),
			end: new Date("2022-10-21 15:00:00"),
			title: "Mary's birthday",
			notes: "Buy the cake for Mary",
		};

		const state = calendarSlice.reducer(
			calendarwithEventsState,
			onUpdateEvent(updatedEvent)
		);

		expect(state.events).toContain(updatedEvent);
	});

	test("should onDeleteEvent delete the active event", () => {
		const state = calendarSlice.reducer(
			calendarwithActiveEventState,
			onDeleteEvent()
		);

		expect(state.activeEvent).toBe(null);

		expect(state.events).not.toContain(events[0]);
	});

	test("should onLoadEvent loads the events", () => {
		const state = calendarSlice.reducer(
			calendarInitialState,
			onLoadEvents(events)
		);

		expect(state).toEqual(calendarwithEventsState);
	});

	test("should onLogoutCalendar clean the State", () => {
		const state = calendarSlice.reducer(
			calendarwithEventsState,
			onLogoutCalendar()
		);

		expect(state).toEqual(calendarInitialState);
	});
});
