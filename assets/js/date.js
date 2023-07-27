// CURRENT DATE
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day < 10 ? "0" + day : day}.${
  month < 10 ? "0" + month : month
}.${year}`;

const elementArr = document.querySelectorAll(".current-date");
elementArr.forEach((item) => {
  item.innerText = currentDate;
});
