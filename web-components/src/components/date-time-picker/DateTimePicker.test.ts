import { fixture, fixtureCleanup, html } from "@open-wc/testing-helpers";
import { Settings } from "luxon";
import { DateTimePicker } from "./DateTimePicker";
import { now } from "@/utils/dateUtils";
import "./DateTimePicker";

describe("DateTimePicker Component", () => {
  beforeEach(() => {
    Settings.defaultLocale = "en-US";
  });

  afterEach(() => {
    fixtureCleanup();
  });

  test("should render", async () => {
    const el: DateTimePicker = await fixture(
      html`
        <md-date-time-picker></md-date-time-picker>>
      `
    );

    expect(el).not.toBeNull();
  });

  test("should render with default date and time", async () => {
    const el: DateTimePicker = await fixture(
      html`
        <md-date-time-picker></md-date-time-picker>>
      `
    );

    let defaultToday = now();
    defaultToday = defaultToday.set({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    });

    expect(defaultToday.toISO()).not.toBeNull();
    expect(defaultToday.toISO()).toEqual(el.value);
  });
});
