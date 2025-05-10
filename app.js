const schedule = [
  ["دینی", "11:30", "09:30"],
  ["ادبیات", "13:00", "11:30"],
  ["سلامت", "14:30", "13:00"],
  ["زبان ۱", "16:00", "14:30"],
  ["زبان ۲", "17:30", "16:00"],
  ["اتمی", "19:30", "17:30"],
  ["مرور جزوه", "20:30", "19:30"],
  ["تست دینامیک", "00:30", "20:30"]
];
let timerEl = document.getElementById("timer");
let progressEl = document.getElementById("progress-bar");
let scheduleBody = document.getElementById("schedule-body");

schedule.forEach(item => {
  let row = document.createElement("tr");
  item.forEach(cell => {
    let td = document.createElement("td");
    td.textContent = cell;
    row.appendChild(td);
  });
  scheduleBody.appendChild(row);
});

let seconds = 0;
function updateTimer() {
  seconds++;
  let hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  let secs = String(seconds % 60).padStart(2, '0');
  timerEl.textContent = `${hrs}:${mins}:${secs}`;
  progressEl.style.width = `${(seconds / (15 * 3600)) * 100}%`; // 15h total day
}
setInterval(updateTimer, 1000);
