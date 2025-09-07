setInterval(function () {
  let parisDate = document.querySelector("#date-paris");
  parisDate.innerHTML = `${moment().tz("Europe/Paris").format("MMMM Do YYYY")}`;

  let parisTime = document.querySelector("#time-paris");
  parisTime.innerHTML = `${moment().tz("Europe/Paris").format("HH:mm:ss")}`;

  let berlinDate = document.querySelector("#date-berlin");
  berlinDate.innerHTML = `${moment()
    .tz("Europe/Berlin")
    .format("MMMM Do YYYY")}`;

  let berlinTime = document.querySelector("#time-berlin");
  berlinTime.innerHTML = `${moment().tz("Europe/Berlin").format("HH:mm:ss")}`;
}, 1000);
