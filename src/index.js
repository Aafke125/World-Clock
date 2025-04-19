function updateCityTime(cityId, timezone) {
  const now = moment().tz(timezone);
  const dateElement = document.querySelector(`#date${cityId}`);
  const timeElement = document.querySelector(`#time${cityId}`);

  if (dateElement && timeElement) {
    dateElement.innerHTML = `It is ${now.format("dddd [the] Do [of] MMMM")}`;
    timeElement.innerHTML = now.format("HH:mm");
  }
}

let customCity = {
  name: "🇺🇸 New York City",
  timezone: "America/New_York"
};

function updateAllCities() {
  const cities = [
    { id: "London", timezone: "Europe/London" },
    { id: "Beijing", timezone: "Asia/Shanghai" },
    { id: "Tokyo", timezone: "Asia/Tokyo" },
    { id: "NYC", timezone: customCity.timezone } // dynamic!
  ];

  cities.forEach(city => updateCityTime(city.id, city.timezone));
  updateCurrentLocationTime();
}

function updateCurrentLocationTime() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  updateCityTime("Current", timezone);

  const timezoneMap = {
    "Europe/Amsterdam": { name: "🇳🇱 Amsterdam" },
    "America/New_York": { name: "🇺🇸 New York" },
    "Europe/London": { name: "🇬🇧 London" },
    "Asia/Tokyo": { name: "🇯🇵 Tokyo" },
    "Asia/Shanghai": { name: "🇨🇳 Beijing" },
    "Asia/Dubai": { name: "🇦🇪 Dubai" },
    "Asia/Hong_Kong": { name: "🇭🇰 Hong Kong" },
    "Asia/Bangkok": { name: "🇹🇭 Bangkok" },
    "Australia/Sydney": { name: "🇦🇺 Sydney" },
  };

  const currentCityName = timezoneMap[timezone]
    ? timezoneMap[timezone].name
    : `🌍 ${timezone.split("/")[1].replace(/_/g, " ")}`;

  document.getElementById("currentCityName").innerText = currentCityName;
}

// Replaces the NYC block with selected city
function updateCustomCity(name, timezone) {
  customCity = { name, timezone }; // update this global variable
  document.getElementById("nycCityName").innerText = name;
  updateCityTime("NYC", timezone);
  
  // Trigger pulse animation on NYC block after time update
  animatePulse(document.querySelector("#nycBlock"));
}

// Function to trigger the pulse animation
function animatePulse(element) {
  element.classList.remove("pulse");  // Removes the class to reset the animation
  void element.offsetWidth;           // Forces a reflow, so animation restarts
  element.classList.add("pulse");     // Adds the pulse animation class
}

// Handle dropdown selection
document.getElementById("cities").addEventListener("change", function (event) {
  const selected = event.target.value;

  const cityMap = {
  sydney: { name: "🇦🇺 Sydney", timezone: "Australia/Sydney" },
  hongkong: { name: "🇭🇰 Hongkong", timezone: "Asia/Hong_Kong" },
  dubai: { name: "🇦🇪 Dubai", timezone: "Asia/Dubai" },
  bangkok: { name: "🇹🇭 Bangkok", timezone: "Asia/Bangkok" }
};

  const cityInfo = cityMap[selected];
  if (cityInfo) {
    updateCustomCity(cityInfo.name, cityInfo.timezone);
  }
});

updateAllCities();
setInterval(updateAllCities, 1000);

