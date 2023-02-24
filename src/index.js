import { getOptions } from "./options";
import { makeSearchBar } from "./makeSearchBar";
import { makeFavList } from "./makeFavList";
import favoritesBar from "./favoritesBar";

makeSearchBar();

if (localStorage.length > 0) {
  if (localStorage.getItem("cities")) {
    if (JSON.parse(localStorage.getItem("cities")).length > 0) {
      favoritesBar.makeFavoritesBar();
      makeFavList();
    }
  } else {
    let citiesArray = [];
    let metric = true;
    let citiesArrayJSON = JSON.stringify(citiesArray);
    localStorage.setItem("cities", `${citiesArrayJSON}`);
    localStorage.setItem("metric", `${metric}`);
  }
} else {
  let citiesArray = [];
  let metric = true;
  let citiesArrayJSON = JSON.stringify(citiesArray);
  localStorage.setItem("cities", `${citiesArrayJSON}`);
  localStorage.setItem("metric", `${metric}`);
}

getOptions(false);
