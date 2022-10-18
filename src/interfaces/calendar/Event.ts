export interface IEvent {
	_id: string | null;
	title: string;
	notes: string;
	start: Date;
	end: Date;
	allDay?: boolean;
	bgColor: string;
	user: {
		_id: string;
		name: string;
	};
}
