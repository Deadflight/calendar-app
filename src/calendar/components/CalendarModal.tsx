import React, {
	ChangeEvent,
	FormEvent,
	useEffect,
	useMemo,
	useState,
} from "react";
import Modal from "react-modal";
import "./CalendarModalStyles.css";
import { differenceInSeconds } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useUiStore, useCalendarStore, useAuthStore } from "../../hooks";
// import es from "date-fns/locale/e";
import { Event } from "react-big-calendar";
import { IEvent } from "../../interfaces";

// registerLocale("es", es);

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		display: "inline",
	},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export const CalendarModal = () => {
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const { isDateModalOpen, closeDateModal } = useUiStore();
	const { activeEvent, startSavingEvent, setActiveEvent } = useCalendarStore();
	const { user } = useAuthStore();
	const [formValues, setFormValues] = useState<IEvent>({
		title: "",
		id: "",
		notes: "",
		start: new Date(),
		end: new Date(),
		bgColor: "",
		user: user,
	});

	useEffect(() => {
		if (activeEvent !== null) {
			setFormValues({ ...activeEvent });
		}
	}, [activeEvent]);

	const onInputChange = ({
		target,
	}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormValues({
			...formValues!,
			[target.name]: target.value,
		});
	};

	const onDateChange = (event: Date | null, chaging: string) => {
		setFormValues({
			...formValues!,
			[chaging]: event,
		});
	};

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsFormSubmitted(true);
		const difference = differenceInSeconds(
			formValues?.end! as Date,
			formValues?.start! as Date
		);

		if (isNaN(difference) || difference <= 0) {
			Swal.fire("Wrong Dates", "Please check again", "error");
			console.log("Date Error");
			return;
		}

		if (!formValues?.title?.length!) return;

		await startSavingEvent(formValues);
		closeDateModal();
		setIsFormSubmitted(false);
	};

	const onCloseDateModal = () => {
		setActiveEvent(null);
		closeDateModal();
	};

	const titleClass = useMemo(() => {
		if (!isFormSubmitted) return "";

		return formValues!.title.length > 0 ? "is-valid" : "is-invalid";
	}, [formValues!.title, isFormSubmitted]);

	return (
		<Modal
			isOpen={isDateModalOpen}
			onRequestClose={onCloseDateModal}
			style={customStyles}
			className="modal"
			overlayClassName={"modal-fondo"}
			closeTimeoutMS={200}
			contentLabel="Example Modal"
		>
			<h1> New Event </h1>
			<hr />
			<form className="container" onSubmit={onSubmit}>
				<div className="form-group mb-2">
					<label>Start date and hour</label>
					<DatePicker
						selected={formValues!.start as Date}
						className="form-control"
						onChange={(event) => onDateChange(event, "start")}
						dateFormat={"Pp"}
						showTimeSelect
						//locale="es"
					/>
				</div>

				<div className="form-group mb-2">
					<label>End date and hour</label>
					<DatePicker
						minDate={formValues!.start as Date}
						selected={formValues!.end as Date}
						className="form-control"
						onChange={(event) => onDateChange(event, "end")}
						dateFormat={"Pp"}
						showTimeSelect
						//locale="es"
					/>
				</div>

				<hr />
				<div className="form-group mb-2">
					<label>Titles and notes</label>
					<input
						type="text"
						className={`form-control ${titleClass}`}
						placeholder="Event Title"
						name="title"
						value={formValues.title || ""}
						onChange={onInputChange}
						autoComplete="off"
					/>
					<small id="emailHelp" className="form-text text-muted">
						Short Description
					</small>
				</div>

				<div className="form-group mb-2">
					<textarea
						className="form-control"
						placeholder="Notes"
						rows={5}
						name="notes"
						value={formValues!.notes}
						onChange={onInputChange}
					></textarea>
					<small id="emailHelp" className="form-text text-muted">
						Additional Info
					</small>
				</div>

				<button type="submit" className="btn btn-outline-primary btn-block">
					<i className="far fa-save"></i>
					<span>Save</span>
				</button>
			</form>
		</Modal>
	);
};
