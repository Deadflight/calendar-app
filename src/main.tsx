import React from "react";
import ReactDOM from "react-dom/client";
import CalendarApp from "./CalendarApp";
// Import our custom CSS
import "../src/scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<CalendarApp />
	</React.StrictMode>
);
