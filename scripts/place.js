// STATIC WEATHER VALUES
const temperature = 28;
const windSpeed = 12;

// WIND CHILL FUNCTION
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * speed **
        0.16 + 0.3965 * temp * speed ** 0.16;
}

// DISPLAY WIND CHILL
const windChillElement = document.querySelector("#wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);

    windChillElement.textContent = `${windChill.toFixed(1)} ℃`;
}

else {
    windChillElement.textContent = "N/A";
}

// CURRENT YEAR
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;

// LAST MODIFIED DATE
document.querySelector("#lastModified").textContent = document.lastModified;

