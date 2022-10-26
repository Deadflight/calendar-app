import * as React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../src/store/store";
import { FabDelete } from "../../../src/calendar/components/FabDelete";

describe("Tests to FabDelete.tsx", () => {
	test("should show the component", () => {
		render(
			<Provider store={store}>
				<FabDelete />
			</Provider>
		);
	});
});
