import { uiInitialStateMock } from "../../fixtures/uiState";
import {
	onCloseDateModal,
	onOpenDateModal,
	uiSlice,
} from "../../../src/store/slices/ui/uiSlice";

describe("Tests for uiSlice.ts", () => {
	test("should return the default state", () => {
		expect(uiSlice.getInitialState()).toEqual(uiInitialStateMock);
	});

	test("should change isDateModalOpen properly", () => {
		let state = uiSlice.getInitialState();
		state = uiSlice.reducer(state, onOpenDateModal());

		expect(state.isDateModalOpen).toBeTruthy();

		state = uiSlice.reducer(state, onCloseDateModal());

		expect(state.isDateModalOpen).toBeFalsy();
	});
});
