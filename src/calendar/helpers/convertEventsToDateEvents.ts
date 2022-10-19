import { parseISO } from "date-fns";
import React from "react";
import { IEvent } from "../../interfaces";

export const convertEventsToDateEvents = (events: IEvent[]) => {
	return events.map((event) => {
		event.start = parseISO(event.start as string);
		event.end = parseISO(event.end as string);

		return event;
	});
};
