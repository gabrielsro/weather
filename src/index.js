import { getOptions } from "./options";
import { makeSearchBar } from "./makeSearchBar";
import favoritesBar from "./favoritesBar";

makeSearchBar();
getOptions(false);

if (localStorage.length > 0) {
  if (JSON.parse(localStorage.getItem("cities")).length > 0) {
    favoritesBar.makeFavoritesBar();
  }
} else {
  let citiesArray = [];
  let citiesArrayJSON = JSON.stringify(citiesArray);
  localStorage.setItem("cities", `${citiesArrayJSON}`);
}
