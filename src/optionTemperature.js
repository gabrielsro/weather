import handleUserInput from "./handleUserInput";
import temperatureIcon from "./thermometer-outline.svg";

export function makeTemperatureOption() {
  let temperatureOptions = document.createElement("div");
  let tempIcon = new Image();
  tempIcon.alt = "Temperature icon";
  tempIcon.src = temperatureIcon;

  let celsius = document.createElement("label");
  celsius.setAttribute("for", "celsius");
  let fahrenheit = document.createElement("label");
  fahrenheit.setAttribute("for", "fahrenheit");
  celsius.innerText = "°C";
  fahrenheit.innerText = "°F";
  let celsiusRadio = document.createElement("input");
  celsiusRadio.setAttribute("type", "radio");
  celsiusRadio.setAttribute("id", "celsius");
  celsiusRadio.setAttribute("checked", true);
  celsiusRadio.addEventListener("change", () =>
    handleUserInput.handleSearchIcon()
  );
  celsius.setAttribute("value", "metric");
  celsiusRadio.setAttribute("name", "temperature");
  let fahrenheitRadio = document.createElement("input");
  fahrenheitRadio.setAttribute("type", "radio");
  fahrenheitRadio.setAttribute("id", "fahrenheit");
  fahrenheitRadio.setAttribute("name", "temperature");
  fahrenheitRadio.addEventListener("change", () =>
    handleUserInput.handleSearchIcon()
  );

  let divCelsius = document.createElement("div");
  let divFahrenheit = document.createElement("div");
  divCelsius.appendChild(celsiusRadio);
  divCelsius.appendChild(celsius);
  divFahrenheit.appendChild(fahrenheitRadio);
  divFahrenheit.appendChild(fahrenheit);

  let tempInputs = document.createElement("div");
  tempInputs.appendChild(divCelsius);
  tempInputs.appendChild(divFahrenheit);

  temperatureOptions.appendChild(tempIcon);
  temperatureOptions.appendChild(tempInputs);

  temperatureOptions.classList.add("option-temperature");

  return temperatureOptions;
}
