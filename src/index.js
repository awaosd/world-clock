setInterval(function () {
  let parisDate = document.querySelector("#date-paris");
  parisDate.innerHTML = `${moment().tz("Europe/Paris").format("MMMM Do YYYY")}`;

  let parisTime = document.querySelector("#time-paris");
  parisTime.innerHTML = `${moment().tz("Europe/Paris").format("HH:mm:ss")}`;

  let hongkongDate = document.querySelector("#date-hongkong");
  hongkongDate.innerHTML = `${moment()
    .tz("Asia/Hong_Kong")
    .format("MMMM Do YYYY")}`;

  let hongkongTime = document.querySelector("#time-hongkong");
  hongkongTime.innerHTML = `${moment()
    .tz("Asia/Hong_Kong")
    .format("HH:mm:ss")}`;

  let alaskaDate = document.querySelector("#date-alaska");
  alaskaDate.innerHTML = `${moment().tz("US/Alaska").format("MMMM Do YYYY")}`;

  let alaskaTime = document.querySelector("#time-alaska");
  alaskaTime.innerHTML = `${moment().tz("US/Alaska").format("HH:mm:ss")}`;
}, 1000);

function showCity(event) {
  let timeZone = event.target.value;
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(timeZone);
  let cities = document.querySelector("#cities");
  cities.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div>
            <div class="time">${cityTime.format("HH:mm:ss")}</div>
          </div>`;
}
let citybutton = document.querySelector("#button");
citybutton.addEventListener("change", showCity);
