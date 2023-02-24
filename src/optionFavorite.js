import favoriteIcon from "./fav.svg";
import favoritesBar from "./favoritesBar";
import { getOptionsUnfavorite } from "./options";

export function makeFavoriteOption() {
  let favoriteOption = document.createElement("div");
  favoriteOption.classList.add("option-favorite");
  let favoriteImage = new Image();
  favoriteImage.alt = "Favorite icon";
  favoriteImage.src = favoriteIcon;
  favoriteOption.appendChild(favoriteImage);

  favoriteOption.addEventListener("click", () => {
    let city = document.querySelector(".city");
    let cities = JSON.parse(localStorage.getItem("cities"));
    cities.push(city.innerText);
    let citiesStrigified = JSON.stringify(cities);
    localStorage.setItem("cities", `${citiesStrigified}`);
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
