import favoriteIcon from "./fav.svg";
import favoritesBar from "./favoritesBar";
import { getOptionsUnfavorite } from "./options";
import { sortAtoZ } from "./settingSort";
import { sortZtoA } from "./settingSort";

export function makeFavoriteOption() {
  let favoriteOption = document.createElement("div");
  favoriteOption.classList.add("option-favorite");
  let favoriteImage = new Image();
  favoriteImage.alt = "Favorite icon";
  favoriteImage.src = favoriteIcon;
  favoriteOption.appendChild(favoriteImage);

  favoriteOption.addEventListener("click", () => {
    let city = document.querySelector(".city");
    handleSortAction(city);
    let favoritesBarElement = document.querySelector(".favorites-bar");
    if (favoritesBarElement) {
      favoritesBar.refreshFavoritesBar();
    } else {
      favoritesBar.makeFavoritesBar();
    }
    getOptionsUnfavorite();
  });

  return favoriteOption;
}

export function handleSortAction(city) {
  let cities = JSON.parse(localStorage.getItem("cities"));
  if (city) {
    cities.push(city.innerText);
  }
  if (cities.length > 0) {
    let citiesSorted;
    if (JSON.parse(localStorage.getItem("sort")) == "atoz") {
      citiesSorted = sortAtoZ(cities);
    }
    if (JSON.parse(localStorage.getItem("sort")) == "ztoa") {
      citiesSorted = sortZtoA(cities);
    }
    let citiesStrigified = JSON.stringify(citiesSorted);
    localStorage.setItem("cities", `${citiesStrigified}`);
    let info = document.querySelector(".info");
    if (info) {
      favoritesBar.refreshFavoritesBar();
    }
  }
}
