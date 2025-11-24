import { fetchAPI } from "./api";

export function generateTimes(start = 17, end = 21, interval = 60) {
  const times = [];
  for (let hour = start; hour <= end; hour++) {
    for (let min = 0; min < 60; min += interval) {
      const h = hour.toString().padStart(2, "0");
      const m = min.toString().padStart(2, "0");
      times.push(`${h}:${m}`);
    }
  }
  return times;
}

export function initializeTimes() {
  const today = new Date();

  try {
    if (typeof fetchAPI === "function") {
      return fetchAPI(today);
    }
  } catch (e) {
    console.error("fetchAPI is not available in initializeTimes", e);
  }

  // 如果 API 沒載到，先給一組預設值
  return generateTimes();
}

export function updateTimes(state, action) {
  console.log("updateTimes called with action:", action);
  if (action.type === "update_times") {
    try {
      console.log(typeof fetchAPI);
      if (typeof fetchAPI === "function") {
        const date = new Date(action.date);
        return fetchAPI(date);
      }
    } catch (e) {
      console.error("fetchAPI is not available in updateTimes", e);
    }
    // 如果 API 失敗，就先維持原本 state，不要把畫面弄掛
    return state;
  }

  return state;
}