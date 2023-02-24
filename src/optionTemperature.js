import handleUserInput from "./handleUserInput";
import temperatureIcon from "./thermometer-outline.svg";

export function makeTemperatureOption() {
  let temperatureOptions = document.createElement("div");
  let tempIcon = new Image();
  tempIcon.alt = "Temperature icon";
  tempIcon.src = temperatureIcon;

  let metric = JSON.parse(localStorage.getItem("metric"));

  let celsius = document.createElement("label");
  celsius.setAttribute("for", "celsius");
  let fahrenheit = document.createElement("label");
  fahrenheit.setAttribute("for", "fahrenheit");
  celsius.innerText = "°C";
  fahrenheit.innerText = "°F";
  let celsiusRadio = document.createElement("input");
  celsiusRadio.setAttribute("type", "radio");
  celsiusRadio.setAttribute("id", "celsius");
  celsiusRadio.setAttribute("name", "temperature");
  celsiusRadio.classList.add("celsius-input");
  if (metric) {
    celsiusRadio.setAttribute("checked", true);
  } else {
    celsiusRadio.setAttribute("checked", false);
  }
  celsiusRadio.addEventListener("change", () => {
    localStorage.setItem("metric", "true");
    handleUserInput.handleSearchIcon();
  });
  celsius.setAttribute("value", "metric");
  let fahrenheitRadio = document.createElement("input");
  fahrenheitRadio.setAttribute("type", "radio");
  fahrenheitRadio.setAttribute("id", "fahrenheit");
  fahrenheitRadio.setAttribute("name", "temperature");
  if (!metric) {
    fahrenheitRadio.setAttribute("checked", true);
  }
  fahrenheitRadio.addEventListener("change", () => {
    localStorage.setItem("metric", "false");
    handleUserInput.handleSearchIcon();
  });

  let divCelsius = document.createElement("div");
  let divFahrenheit = document.createElement("div");
  divCelsius.appendChild(celsius);
  divCelsius.appendChild(celsiusRadio);
  divFahrenheit.appendChild(fahrenheit);
  divFahrenheit.appendChild(fahrenheitRadio);

  let tempInputs = document.createElement("div");
  tempInputs.appendChild(divCelsius);
  tempInputs.appendChild(divFahrenheit);

  temperatureOptions.appendChild(tempIcon);
  temperatureOptions.appendChild(tempInputs);

  temperatureOptions.classList.add("option-temperature");

  return temperatureOptions;
}
