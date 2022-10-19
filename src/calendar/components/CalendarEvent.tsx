import React, { ComponentType, FC } from "react";
import { EventProps } from "react-big-calendar";

interface Props {
	title: string;
	notes: string;
	start: Date;
	end: Date;
	id: string;
	bgColor: string;
	user: { id: string; name: string };
}

export const CalendarEvent: ComponentType<EventProps<Props>> = (
	{ title, event },
	...props
) => {
	return (
		<>
			<strong>{title}</strong>
			<span> - {event.user.name}</span>
		</>
	);
};
