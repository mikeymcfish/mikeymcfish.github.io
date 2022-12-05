const timeChanges = [
  {
    time: "0001",
    color: "white",
    day: 0,
    periodName: "the Weekend",
    week: "Navy"
  },
  {
    time: "805",
    color: "purple",
    day: 0,
    periodName: "purple m1",
    week: "NAVY"
  },
  { time: "915", color: "pink", day: 1, periodName: "pink m1", week: "NAVY" },
  {
    time: "1020",
    color: "white",
    day: 1,
    periodName: "Community Time",
    week: "NAVY"
  },
  { time: "1045", color: "red", day: 1, periodName: "red m2", week: "NAVY" },
  { time: "1205", color: "white", day: 1, periodName: "Lunch", week: "NAVY" },
  {
    time: "1300",
    color: "yellow",
    day: 1,
    periodName: "yellow m1",
    week: "NAVY"
  },
  {
    time: "1410",
    color: "orange",
    day: 1,
    periodName: "orange m1",
    week: "NAVY"
  },
  { time: "805", color: "green", day: 2, periodName: "green m1", week: "NAVY" },
  { time: "915", color: "blue", day: 2, periodName: "blue m1", week: "NAVY" },
  {
    time: "1020",
    color: "white",
    day: 2,
    periodName: "Advisory",
    week: "NAVY"
  },
  {
    time: "1045",
    color: "orange",
    day: 2,
    periodName: "orange m2",
    week: "NAVY"
  },
  { time: "1205", color: "white", day: 2, periodName: "Lunch", week: "NAVY" },
  { time: "1300", color: "tan", day: 2, periodName: "tan m1", week: "NAVY" },
  {
    time: "1410",
    color: "yellow",
    day: 2,
    periodName: "yellow m1",
    week: "NAVY"
  },
  { time: "805", color: "blue", day: 3, periodName: "blue m2", week: "NAVY" },
  { time: "925", color: "white", day: 3, periodName: "Advisory", week: "NAVY" },
  {
    time: "1000",
    color: "purple",
    day: 3,
    periodName: "purple m2",
    week: "NAVY"
  },
  { time: "1120", color: "white", day: 3, periodName: "Lunch", week: "NAVY" },
  { time: "1215", color: "tan", day: 3, periodName: "tan m2", week: "NAVY" },
  {
    time: "135",
    color: "white",
    day: 3,
    periodName: "office hours",
    week: "NAVY"
  },
  { time: "155", color: "pink", day: 3, periodName: "pink m2", week: "NAVY" },
  { time: "805", color: "white", day: 4, periodName: "TBD", week: "NAVY" },
  { time: "915", color: "white", day: 4, periodName: "TBD", week: "NAVY" },
  { time: "1020", color: "white", day: 4, periodName: "TBD", week: "NAVY" },
  { time: "1045", color: "white", day: 4, periodName: "TBD", week: "NAVY" },
  { time: "1205", color: "white", day: 4, periodName: "TBD", week: "NAVY" },
  { time: "1300", color: "white", day: 4, periodName: "TBD", week: "NAVY" },
  { time: "1410", color: "white", day: 4, periodName: "TBD", week: "NAVY" },
  { time: "805", color: "white", day: 5, periodName: "TBD", week: "NAVY" },
  { time: "915", color: "white", day: 5, periodName: "TBD", week: "NAVY" },
  { time: "1020", color: "white", day: 5, periodName: "TBD", week: "NAVY" },
  { time: "1045", color: "white", day: 5, periodName: "TBD", week: "NAVY" },
  { time: "1205", color: "white", day: 5, periodName: "TBD", week: "NAVY" },
  { time: "1300", color: "white", day: 5, periodName: "TBD", week: "NAVY" },
  { time: "1410", color: "white", day: 5, periodName: "TBD", week: "NAVY" }
];

const currentDate = new Date();
const currentDay = currentDate.getDay();
const currentHours = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();

// convert the numeric values to strings
const hoursAsString = String(currentHours);
const minutesAsString = String(currentMinutes);

// add a leading zero to the hours and minutes if they are less than 10
const formattedHours = hoursAsString.padStart(2, "0");
const formattedMinutes = minutesAsString.padStart(2, "0");

// concatenate the formatted hours and minutes to create the current time in the correct format
const currentTime = `${formattedHours}${formattedMinutes}`;

let closestColor = "";

for (const obj of timeChanges) {
  if (currentTime >= obj.time && currentDay === obj.day) {
    closestColor = obj.color;
  }
}

document.body.style.backgroundColor = closestColor;

setInterval(() => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const hoursAsString = String(currentHours);
  const minutesAsString = String(currentMinutes);

  // add a leading zero to the hours and minutes if they are less than 10
  const formattedHours = hoursAsString.padStart(2, "0");
  const formattedMinutes = minutesAsString.padStart(2, "0");

  // concatenate the formatted hours and minutes to create the current time in the correct format
  const currentTime = `${formattedHours}${formattedMinutes}`;
  let closestColor = "";
  let closestPeriod = "";

  for (const obj of timeChanges) {
    if (currentTime >= obj.time && currentDay === obj.day) {
      closestColor = obj.color;
      closestPeriod = obj.periodName.toUpperCase();
    }
  }

  document.body.style.backgroundColor = closestColor;

  let timeUntilNextChange = 0;

  // iterate through the array of objects
  //console.log(currentTime);
  for (const obj of timeChanges) {
    if (currentTime < obj.time && currentDay === obj.day) {
      const time1 = currentTime;
      const time2 = obj.time;

      const date1 = new Date();
      date1.setHours(parseInt(time1.slice(0, 2), 10));
      date1.setMinutes(parseInt(time1.slice(2), 10));

      const date2 = new Date();
      date2.setHours(parseInt(time2.slice(0, 2), 10));
      date2.setMinutes(parseInt(time2.slice(2), 10));

      const diffInMinutes = (date2.getTime() - date1.getTime()) / (1000 * 60);
      //console.log(diffInMinutes);

      timeUntilNextChange = Math.floor(diffInMinutes);
      break;
    }
  }

  let nextColor = "";
  let nextPeriod = "";
  for (const obj of timeChanges) {
    if (obj.time > currentTime && obj.day === currentDay) {
      nextPeriod = obj.periodName;
      nextColor = obj.color;
      break;
    }
  }

  let minutesText = "minutes";

  if (timeUntilNextChange == 1) minutesText = "minute";
  else minutesText = "minutes";

  let textColor = "white";
  if (
    nextColor == "yellow" ||
    nextColor == "orange" ||
    nextColor == "pink" ||
    nextColor == "tan" ||
    nextColor == "white"
  ) {
    textColor = "black";
  }
  //console.log(textColor);
  var div = document.querySelector("#container");
  div.innerHTML = `${timeUntilNextChange} ${minutesText} until <span id="next" style="background-color: ${nextColor}; color:${textColor}"> ${nextPeriod} </span>`;
  div = document.querySelector("#itIsNow");
  div.innerHTML = `It is currently ${closestPeriod}`;
}, 1000);

// Include a polyfill for the `fetch` function if necessary

const apiKey = "1c845f8e638d4132251e0f20724c274a";
const here = "Stamford";
const lat = 41.110623;
const lon = -73.5338146;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
console.log(url);
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const temperature = data.main.temp;
    const weather = data.weather[0].main;

    // Convert the temperature from Kelvin to Celsius
    const temperatureKelvin = data.main.temp;
    const temperatureFahrenheit = Math.round(
      ((temperatureKelvin - 273.15) * 9) / 5 + 32
    );

    console.log(temperatureFahrenheit);
    console.log(weather);

    var div = document.querySelector("#temp");
    var iconURL =
      "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    div.innerHTML = "<img src='" + iconURL +"'/>"+
    temperatureFahrenheit + "&#176;F";
  })
  .catch((error) => {
    console.log("oops");
  });
