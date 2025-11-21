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
  return generateTimes(17, 21, 30);
}

export function updateTimes(state, action) {
  return state;
}