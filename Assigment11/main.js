// API Data
const city = document.getElementById('inputValue');
const apiKey = '5f1138c6acb443c992652341242501';

// Location Elements
const locationElement = document.getElementById('location');
const regionText = document.getElementById('region');

// days week names Elements
const day1WeekNameEL = document.getElementById('day1WeekName');
const day2WeekNameEl = document.getElementById('day2WeekName');
const day3WeekNameEl = document.getElementById('day3WeekName');

// Max and Min Elements
const day1MaxEl = document.getElementById('day1Max');
const day1MinEl = document.getElementById('day1Min');
const day2MaxEl = document.getElementById('day2Max');
const day2MinEl = document.getElementById('day2Min');
const day3MaxEl = document.getElementById('day3Max');
const day3MinEl = document.getElementById('day3Min');

// Icons ELemetns
const day1IconEl = document.getElementById('day1Icon');
const day2IconEl = document.getElementById('day2Icon');
const day3IconEl = document.getElementById('day3Icon');

// Conditions Elements
const day1ConditionEl = document.getElementById('day1Condition');
const day2ConditionEl = document.getElementById('day2Condition');
const day3ConditionEl = document.getElementById('day3Condition');

// Date, Wind, Rain, And Weekdays
const todayDateEl = document.getElementById('todayDate');
const day1RainEl = document.getElementById('day1Rain');
const day1WindEl = document.getElementById('day1Wind');
const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

/**
 * Add an event listener to the form for the "submit" event
 */
searchForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Call the getWeather function
  getWeather();
});
searchForm.addEventListener('keyup', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Call the getWeather function
  getWeather();
});

/**
 * Fetches weather data from the API based on the provided city and displays it.
 */
async function getWeather() {
  // Fetch weather data from the API
  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city.value}&days=3`
  );

  // Check if the response is successful (HTTP status 200-299)
  if (res.ok) {
    // Parse the response body as JSON
    const data = await res.json();
    // Display the weather data
    await displayWeather(data);
  }
}

/**
 * Displays weather information on the page.
 * @param {object} data - Weather data received from the API.
 */
async function displayWeather(data) {
  // Extract relevant information from the data object
  // General Infos
  const { name, country, localtime, region } = data.location;
  const day1Wind = data.forecast.forecastday[0].day.maxwind_kph;
  const day1Rain = data.forecast.forecastday[0].day.daily_chance_of_rain;

  // Max and Min weather
  const day1Max = data.forecast.forecastday[0].day.maxtemp_c;
  const day1Min = data.forecast.forecastday[0].day.mintemp_c;
  const day2Max = data.forecast.forecastday[1].day.maxtemp_c;
  const day2Min = data.forecast.forecastday[1].day.mintemp_c;
  const day3Max = data.forecast.forecastday[2].day.maxtemp_c;
  const day3Min = data.forecast.forecastday[2].day.mintemp_c;
  // Icons From JSON
  const day1Icon = data.forecast.forecastday[0].day.condition.icon;
  const day2Icon = data.forecast.forecastday[1].day.condition.icon;
  const day3Icon = data.forecast.forecastday[2].day.condition.icon;

  // Conditions Froms JSON
  const day1Condition = data.forecast.forecastday[0].day.condition.text;
  const day2Condition = data.forecast.forecastday[1].day.condition.text;
  const day3Condition = data.forecast.forecastday[2].day.condition.text;

  // Weekdays
  const date = localtime.split(' ')[0];
  const dateObject = new Date(date);
  const day1WeekName = weekDays[dateObject.getDay()];
  const day2WeekName = weekDays[dateObject.getDay() + 1];
  const day3WeekName = weekDays[(dateObject.getDay() + 2) % 7];

  // Add content to HTML
  // Location Content and Date
  locationElement.innerHTML = `${name} ${country}`;
  regionText.innerHTML = `"${region}"`;
  todayDateEl.innerHTML = date;

  // Week days names
  day1WeekNameEL.innerHTML = day1WeekName;
  day2WeekNameEl.innerHTML = day2WeekName;
  day3WeekNameEl.innerHTML = day3WeekName;

  // Min and Min Values
  // For day 1
  day1MaxEl.innerHTML = `${day1Max}°C`;
  day1MinEl.innerHTML = `${day1Min}°C`;
  day2MaxEl.innerHTML = `${day2Max}°C`;
  day2MinEl.innerHTML = `${day2Min}°C`;
  day3MaxEl.innerHTML = `${day3Max}°C`;
  day3MinEl.innerHTML = `${day3Min}°C`;

  // Icons
  day1IconEl.src = day1Icon;
  day2IconEl.src = day2Icon;
  day3IconEl.src = day3Icon;

  // Conditions
  day1ConditionEl.innerHTML = day1Condition;
  day2ConditionEl.innerHTML = day2Condition;
  day3ConditionEl.innerHTML = day3Condition;

  // Rain and Wind
  day1RainEl.innerHTML = `${day1Rain} %`;
  day1WindEl.innerHTML = `${day1Wind} km/h`;
}
