import { makeTemperatureOption } from "./optionTemperature";
import { makeReloadOption } from "./optionReload";
import { makeFavoriteOption } from "./optionFavorite";
import { clean } from "./showData";

const optionsDiv = {
  options: document.querySelector(".options"),
  getTemperatureOptions() {
    let temperatureOptions = makeTemperatureOption();
    this.options.appendChild(temperatureOptions);
  },
  getReloadOptions() {
    let reloadOption = makeReloadOption();
    this.options.appendChild(reloadOption);
  },
  getFavoriteOption() {
    let favoriteOption = makeFavoriteOption();
    this.options.appendChild(favoriteOption);
  },
};

function getOptions(all) {
  clean(optionsDiv.options);
  if (all) {
    optionsDiv.getTemperatureOptions();
    optionsDiv.getReloadOptions();
    optionsDiv.getFavoriteOption();
  } else {
    optionsDiv.getTemperatureOptions();
  }
}

export { getOptions };
