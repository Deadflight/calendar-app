import React, { useState } from "react";
import {
	Navbar,
	CalendarEvent,
	CalendarModal,
	FabAddNew,
	FabDelete,
} from "../";

import { Calendar, Event, EventPropGetter, View } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { localizer } from "../helpers";
import { useUiStore, useCalendarStore } from "../../hooks";
import { useEffect } from "react";
import { IEvent } from "../../interfaces";

export const CalendarPage = () => {
	const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();
	const { openDateModal } = useUiStore();

	const [lastView, setLastView] = useState<View>(
		JSON.parse(localStorage.getItem("calendarLastView")!) || "week"
	);

	const eventStyleGetter: EventPropGetter<any> = (
		event,
		start,
		end,
		isSelected
	) => {
		const style = {
			backgroundDColor: "#347CF7",
			borderRadius: "0px",
			opacity: 0.8,
			color: "white",
		};

		return {
			style,
		};
	};

	const onDoubleClick = (event: IEvent) => {
		openDateModal();
	};

	const onSelect = (event: any) => {
		setActiveEvent({
			...event,
			id: event.id || "",
		});
	};

	const onViewChange = (event: View) => {
		console.log({ viewChange: event });
	};

	useEffect(() => {
		startLoadingEvents();
	}, []);

	return (
		<>
			<Navbar />
			<Calendar
				defaultView={lastView}
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				style={{
					height: "calc(100vh - 80px)",
				}}
				eventPropGetter={eventStyleGetter}
				components={{
					event: CalendarEvent as any,
				}}
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelect}
				onView={onViewChange}
				//messages={getMessages()}
			/>
			<CalendarModal />
			<FabAddNew />
			<FabDelete />
		</>
	);
};
