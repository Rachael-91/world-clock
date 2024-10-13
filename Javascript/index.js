function updateTime() {

// Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");


// Melbourne
let melbourneElement = document.querySelector("#melbourne");
let melbourneDateElement = melbourneElement.querySelector(".date");
let melbourneTimeElement = melbourneElement.querySelector(".time");
let melbourneTime = moment().tz("Australia/Melbourne");

melbourneDateElement.innerHTML = melbourneTime.format("MMMM Do YYYY");
melbourneTimeElement.innerHTML = melbourneTime.format("h:mm:ss [<small>]A[</small>]");

};

updateTime();
setInterval(updateTime, 1000);
