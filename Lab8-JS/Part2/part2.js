const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const amPmElement = document.getElementById("am-pm");
const dayElement = document.getElementById("day");
const alarmButton = document.getElementById("alarm-button");
const alarmWindow = document.querySelector(".alarm-window");
const closeButton = document.querySelector(".close-button");
const alarmHoursInput = document.getElementById("alarmHours");
const alarmMinutesInput = document.getElementById("alarmMinutes");
const alarmSecondsInput = document.getElementById("alarmSeconds");
const setAlarmButton = document.getElementById("setAlarm");
const clearAlarmButton = document.getElementById("clearAlarm");

alarmHoursInput.value = "0";
alarmMinutesInput.value = "0";
alarmSecondsInput.value = "0";

let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const amPm = hours >= 12 ? "PM" : "AM";
  const day = date.toLocaleDateString("en-US", { weekday: "short" });

  hoursElement.textContent = hours % 12 || 12;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
  amPmElement.textContent = amPm;
  dayElement.textContent = day;

  if (alarmTime) {
    const currentHours = date.getHours();
    const currentMinutes = date.getMinutes();
    const currentSeconds = date.getSeconds();

    if (
      currentHours === alarmTime.hours &&
      currentMinutes === alarmTime.minutes &&
      currentSeconds === alarmTime.seconds
    ) {
      clearTimeout(alarmTimeout);
      alert("Alarm! Wake up!");
      alarmTime = null;
    }
  }
}

updateTime();
setInterval(updateTime, 1000);

alarmButton.addEventListener("click", () => {
  alarmWindow.hidden = false;
});

closeButton.addEventListener("click", () => {
  alarmWindow.hidden = true;
});

setAlarmButton.addEventListener("click", () => {
  const alarmHours = parseInt(alarmHoursInput.value, 10);
  const alarmMinutes = parseInt(alarmMinutesInput.value, 10);
  const alarmSeconds = parseInt(alarmSecondsInput.value, 10);

  if (!isNaN(alarmHours) && !isNaN(alarmMinutes) && !isNaN(alarmSeconds)) {
    alarmTime = {
      hours: alarmHours,
      minutes: alarmMinutes,
      seconds: alarmSeconds,
    };

    alarmTimeout = setTimeout(() => {
      if (alarmTime) {
        alert("Your alarm is ringing!");
        alarmTime = null;
      }
    }, (alarmHours * 60 * 60 + alarmMinutes * 60 + alarmSeconds) * 1000);
    alarmWindow.hidden = true;
  }
});

clearAlarmButton.addEventListener("click", () => {
  clearTimeout(alarmTimeout);
  alarmTime = null;
  alarmWindow.hidden = true;
});
