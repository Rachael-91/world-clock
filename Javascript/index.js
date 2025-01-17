let citiesSelectElement = document.querySelector("#city");
let timeUpdateInterval;

function updateTime() {
    // Los Angeles
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");
        let losAngelesTime = moment().tz("America/Los_Angeles");

        losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
        losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
    }

    // Melbourne
    let melbourneElement = document.querySelector("#melbourne");
    if (melbourneElement) {
        let melbourneDateElement = melbourneElement.querySelector(".date");
        let melbourneTimeElement = melbourneElement.querySelector(".time");
        let melbourneTime = moment().tz("Australia/Melbourne");

        melbourneDateElement.innerHTML = melbourneTime.format("MMMM Do YYYY");
        melbourneTimeElement.innerHTML = melbourneTime.format("h:mm:ss [<small>]A[</small>]");
    }
}

function updateCity(event) {
    // Clear existing interval if it exists
    if (timeUpdateInterval) {
        clearInterval(timeUpdateInterval);
    }

    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");

    citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/">All Cities</a>
    `;

    // Set a new interval to update the city time every second
    timeUpdateInterval = setInterval(() => {
        cityTime = moment().tz(cityTimeZone);
        citiesElement.querySelector(".date").innerHTML = cityTime.format("MMMM Do YYYY");
        citiesElement.querySelector(".time").innerHTML = `${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>`;
    }, 1000);
}

citiesSelectElement.addEventListener("change", updateCity);

// Initial call to updateTime for other cities
updateTime();
setInterval(updateTime, 1000);
