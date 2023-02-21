import "./style.css";
import handleUserInput from "./handleUserInput";

const optionsDiv = {
  options: document.querySelector(".options"),
  getTemperatureOptions() {
    let temperatureOptions = document.createElement("div");
    let celsius = document.createElement("label");
    celsius.setAttribute("for", "celsius");
    let fahrenheit = document.createElement("label");
    fahrenheit.setAttribute("for", "fahrenheit");
    celsius.innerText = "Celsius";
    fahrenheit.innerText = "Fahrenheit";
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
    temperatureOptions.appendChild(divCelsius);
    temperatureOptions.appendChild(divFahrenheit);
    this.options.appendChild(temperatureOptions);
  },
};

function getOptions() {
  optionsDiv.getTemperatureOptions();
}

export { getOptions };
