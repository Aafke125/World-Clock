
//Make Array of timezones >> timezone determines the city
//
//Make array of formats
// Make function for timezones

//const cities = ["Europe/London", "Europe/Paris", "Asia/Shanghai", "Asia/Tokyo", "America/New_York"];


let dateLondon = moment().tz("Europe/London").format("dddd [the] Do [of] MMMM");
let dateParis = moment().tz("Europe/Paris").format("dddd [the] Do [of] MMMM");
let dateBeijing = moment().tz("Asia/Shanghai").format("dddd [the] Do [of] MMMM");
let dateTokyo = moment().tz("Asia/Tokyo").format("dddd [the] Do [of] MMMM");
let dateNYC = moment().tz("America/New_York").format("dddd [the] Do [of] MMMM");

let timeLondon = moment().tz("Europe/London").format("h:mm");
let timeParis = moment().tz("Europe/Paris").format("h:mm");
let timeBeijing = moment().tz("Asia/Shanghai").format("h:mm");
let timeTokyo = moment().tz("Asia/Tokyo").format("h:mm");
let timeNYC = moment().tz("America/New_York").format("h:mm");

let dateLondonElement = document.querySelector("#dateLondon");
dateLondonElement.innerHTML = `It is ${dateLondon}`;
let timeLondonElement = document.querySelector("#timeLondon");
timeLondonElement.innerHTML = `${timeLondon}`;

let dateParisElement = document.querySelector("#dateParis");
dateParisElement.innerHTML = `It is ${dateParis}`;
let timeParisElement = document.querySelector("#timeParis");
timeParisElement.innerHTML = `${timeParis}`;

let dateBeijingElement = document.querySelector("#dateBeijing");
dateBeijingElement.innerHTML = `It is ${dateBeijing}`;
let timeBeijingElement = document.querySelector("#timeBeijing");
timeBeijingElement.innerHTML = `${timeBeijing}`;

let dateTokyoElement = document.querySelector("#dateTokyo");
dateTokyoElement.innerHTML = `It is ${dateTokyo}`;
let timeTokyoElement = document.querySelector("#timeTokyo");
timeTokyoElement.innerHTML = `${timeTokyo}`;

let dateNYCElement = document.querySelector("#dateNYC");
dateNYCElement.innerHTML = `It is ${dateNYC}`;
let timeNYCElement = document.querySelector("#timeNYC");
timeNYCElement.innerHTML = `${timeNYC}`; no

