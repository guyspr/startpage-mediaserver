function clock() {
  let currentTime = new Date();
  let time = currentTime.toLocaleTimeString();
  document.getElementById("clock").innerHTML = time;
  setTimeout(clock, 500);
}

function date() {
  let currentDate = new Date();
  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let date = currentDate.toLocaleDateString("en-GB", dateOptions);
  document.getElementById("date").innerHTML = date;
}

function partofday() {
  let currentTime = new Date();
  let partOfDay = Math.floor(currentTime.getHours() / 6);
  switch (partOfDay) {
    case 0:
      document.getElementById("timeofday").innerHTML = "Night";
      break;
    case 1:
      document.getElementById("timeofday").innerHTML = "Morning";
      break;
    case 2:
      document.getElementById("timeofday").innerHTML = "Afternoon";
      break;
    case 3:
      document.getElementById("timeofday").innerHTML = "Evening";
      break;
  }
}

function onPageLoad() {
  clock();
  date();  
  partofday();
}
