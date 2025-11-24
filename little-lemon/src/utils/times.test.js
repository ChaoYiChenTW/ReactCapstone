import { generateTimes, initializeTimes, updateTimes } from "./times";
import { fetchAPI } from "./api";

jest.mock("./api", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

test("generateTimes creates correct time list", () => {
  const result = generateTimes(17, 21, 60);
  expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("initializeTimes calls fetchAPI and returns its result", () => {
  const mockTimes = ["17:00", "18:00", "19:00"];

  // 只要呼叫 fetchAPI，就回傳 mockTimes
  fetchAPI.mockReturnValue(mockTimes);

  const result = initializeTimes();

  // 檢查有沒有呼叫 fetchAPI
  expect(fetchAPI).toHaveBeenCalledTimes(1);
  expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));

  // 檢查 initializeTimes 的回傳值就是 mock 的結果
  expect(result).toEqual(mockTimes);
});

test("updateTimes calls fetchAPI with the selected date and returns its result", () => {
  const initialState = ["old-time"];
  const mockTimes = ["20:00", "21:00"];
  const selectedDate = "2025-01-01";

  fetchAPI.mockReturnValue(mockTimes);

  const result = updateTimes(initialState, {
    type: "update_times",
    date: selectedDate,
  });

  // 檢查有沒有呼叫 fetchAPI
  expect(fetchAPI).toHaveBeenCalledTimes(1);
  // 檢查參數是 Date 物件
  expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  // 檢查回傳值就是 mock times
  expect(result).toEqual(mockTimes);
});

