import UnfavoriteIcon from "./unfav.svg";
import favoritesBar from "./favoritesBar";
import { getOptions } from "./options";

export function makeUnfavoriteOption() {
  let unfavoriteOption = document.createElement("div");
  unfavoriteOption.classList.add("option-unfavorite");
  let unfavoriteIcon = new Image();
  unfavoriteIcon.alt = "Remove from favorites icon";
  unfavoriteIcon.src = UnfavoriteIcon;
  let text = document.createElement("p");
  text.innerText = "Remove favorite";

  unfavoriteOption.appendChild(unfavoriteIcon);
  unfavoriteOption.appendChild(text);

  unfavoriteOption.addEventListener("click", () => {
    let city = document.querySelector(".city");
    let cities = JSON.parse(localStorage.getItem("cities"));
    let citiesFiltered = cities.filter((c) => c !== city.innerText);
    localStorage.setItem("cities", `${JSON.stringify(citiesFiltered)}`);
    favoritesBar.refreshFavoritesBar();
    getOptions(true);
  });

  return unfavoriteOption;
}
