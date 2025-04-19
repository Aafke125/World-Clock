function updateCityTime(cityId, timezone) {
  const now = moment().tz(timezone);
  const dateElement = document.querySelector(`#date${cityId}`);
  const timeElement = document.querySelector(`#time${cityId}`);

  if (dateElement && timeElement) {
    dateElement.innerHTML = `It is ${now.format("dddd [the] Do [of] MMMM")}`;
    timeElement.innerHTML = now.format("h:mm");
  }
}

function updateAllCities() {
  const cities = [
    { id: "London", timezone: "Europe/London" },
    { id: "Beijing", timezone: "Asia/Shanghai" },
    { id: "NYC", timezone: "America/New_York" },
    { id: "Tokyo", timezone: "Asia/Tokyo" }
  ];

  cities.forEach(city => updateCityTime(city.id, city.timezone));
  updateCurrentLocationTime(); // update user's current time too
}

function updateCurrentLocationTime() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  updateCityTime("Current", timezone);
}

// Replaces the NY block with selected city
function updateCustomCity(name, timezone) {
  document.getElementById("nycCityName").innerText = name;
  updateCityTime("NYC", timezone);
}

// Handle dropdown selection
document.getElementById("cities").addEventListener("change", function (event) {
  const selected = event.target.value;

  const cityMap = {
    london: { name: "🇦🇺 Sydney", timezone: "Australia/Sydney" },
    paris: { name: "🇭🇰 Hongkong", timezone: "Asia/Hong_Kong" },
    newYork: { name: "🇦🇪 Dubai", timezone: "Asia/Dubai" },
    sydney: { name: "🇹🇭 Bangkok", timezone: "Asia/Bangkok" }
  };

  const cityInfo = cityMap[selected];
  if (cityInfo) {
    updateCustomCity(cityInfo.name, cityInfo.timezone);
  }
});

updateAllCities();
setInterval(updateAllCities, 1000);
