import { makeTemperatureOption } from "./optionTemperature";
import { makeReloadOption } from "./optionReload";
import { makeFavoriteOption } from "./optionFavorite";
import { makeUnfavoriteOption } from "./optionUnfavorite";
import { makeShowFavsOption } from "./optionShowFavs";
import { makeSettingsOption } from "./optionSettings";
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
  getShowFavsOption() {
    let showFavsOption = makeShowFavsOption();
    this.options.appendChild(showFavsOption);
  },
  getSettingsOption() {
    let settingsOption = makeSettingsOption();
    this.options.appendChild(settingsOption);
  },
};

function getOptions(all) {
  clean(optionsDiv.options);
  if (all) {
    let cities = JSON.parse(localStorage.getItem("cities"));
    if (cities.length > 0) {
      optionsDiv.options.classList.remove("options-compact");
      optionsDiv.getSettingsOption();
      optionsDiv.getTemperatureOptions();
      optionsDiv.getReloadOptions();
      optionsDiv.getFavoriteOption();
      optionsDiv.getShowFavsOption();
    } else {
      optionsDiv.options.classList.remove("options-compact");
      optionsDiv.getSettingsOption();
      optionsDiv.getTemperatureOptions();
      optionsDiv.getReloadOptions();
      optionsDiv.getFavoriteOption();
    }
  } else {
    optionsDiv.options.classList.toggle("options-compact");
    optionsDiv.getSettingsOption();
    optionsDiv.getTemperatureOptions();
  }
}

function getOptionsUnfavorite() {
  clean(optionsDiv.options);
  optionsDiv.options.classList.remove("options-compact");
  optionsDiv.getSettingsOption();
  optionsDiv.getTemperatureOptions();
  optionsDiv.getReloadOptions();
  optionsDiv.getUnFavoriteOption();
  optionsDiv.getShowFavsOption();
}

function getOptionsFavList() {
  clean(optionsDiv.options);
  optionsDiv.getSettingsOption();
  optionsDiv.getTemperatureOptions();
  optionsDiv.getReloadOptions();
  optionsDiv.options.classList.remove("options-compact");
}

export { getOptions, getOptionsUnfavorite, getOptionsFavList };
