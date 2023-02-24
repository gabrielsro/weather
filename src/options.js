import { makeTemperatureOption } from "./optionTemperature";
import { makeReloadOption } from "./optionReload";
import { makeFavoriteOption } from "./optionFavorite";
import { makeUnfavoriteOption } from "./optionUnfavorite";
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
  getUnFavoriteOption() {
    let unfavoriteOption = makeUnfavoriteOption();
    this.options.appendChild(unfavoriteOption);
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

function getOptionsUnfavorite() {
  clean(optionsDiv.options);
  optionsDiv.getTemperatureOptions();
  optionsDiv.getReloadOptions();
  optionsDiv.getUnFavoriteOption();
}

export { getOptions, getOptionsUnfavorite };