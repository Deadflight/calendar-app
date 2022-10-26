import { IUser } from "../auth";

export interface ICalendarState {
	events: IEvent[];
	activeEvent: IEvent | null;
	isLoadingEvent: boolean;
}

export interface IEvent {
	id: string | null;
	title: string;
	notes: string;
	start: string | Date;
	end: string | Date;
	allDay?: boolean;
	bgColor?: string;
	user?: IUser;
}
