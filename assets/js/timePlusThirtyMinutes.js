// TIME + 30 MINUTES
const oldDate = new Date();
const newDate = new Date();

newDate.setTime(oldDate.getTime() + 30 * 60 * 1000);

const timeThirtyMinutes = document.querySelector(".time-plus-thirty");
timeThirtyMinutes.innerHTML = `${newDate.getHours()}:${newDate
  .getMinutes()
  .toString()
  .padStart(2, "0")}`;
