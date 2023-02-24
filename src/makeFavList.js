import favoritesBar from "./favoritesBar";
import { getCardForFavList } from "./handleUserInput";
import { getOptionsFavList } from "./options";

const result = document.querySelector(".result");

export async function makeFavList() {
  let units = JSON.parse(localStorage.getItem("metric"));
  let metric = "";
  units ? (metric = "metric") : (metric = "imperial");
  let cities = JSON.parse(localStorage.getItem("cities"));
  cities.forEach(async function (city) {
    let cityCard = await getCardForFavList(city, metric);
    getOptionsFavList();
    let favBar = document.querySelector(".favorites-bar");
    favBar.setAttribute("id", "hidden");
    result.appendChild(cityCard);
  });
}
