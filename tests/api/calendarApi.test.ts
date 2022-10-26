import calendarApi from "../../src/api/calendarApi/calendarApi";

describe("Tests for calendarApi.ts", () => {
	test("should have the default config", () => {
		expect(calendarApi.defaults.baseURL).toBe(
			process.env.VITE_CALENDAR_API_URL
		);
	});

	test("should have the X-Calendar-Token in the header of all requests", async () => {
		const testToken = "ABC-123";
		localStorage.setItem("calendar-token", testToken);

		const resp = await calendarApi.get("/auth");

		expect(resp?.config?.headers!["X-Calendar-Token"]).toBe(testToken);
	});
});
