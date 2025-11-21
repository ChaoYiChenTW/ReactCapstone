import { generateTimes, initializeTimes, updateTimes } from "./times";

test("generateTimes creates correct time list", () => {
  const result = generateTimes(17, 21, 60);
  expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("initializeTimes returns the same list as generateTimes", () => {
  const init = initializeTimes();
  const generated = generateTimes(17, 21, 30);
  expect(init).toEqual(generated);
});

test("updateTimes returns the same state that was passed in", () => {
  const state = ["17:00", "18:00"];
  const newState = updateTimes(state, { type: "dateChanged" });
  expect(newState).toEqual(state);
});
