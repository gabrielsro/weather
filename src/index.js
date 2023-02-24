import { getOptions } from "./options";
import { makeSearchBar } from "./makeSearchBar";
import favoritesBar from "./favoritesBar";

makeSearchBar();
getOptions(false);

if (localStorage.length > 0) {
  console.log("something");
  console.log(`${localStorage.length}`);
  console.log(JSON.parse(localStorage.getItem("cities")));
  if (localStorage.getItem("cities")) {
    if (JSON.parse(localStorage.getItem("cities")).length > 0) {
      favoritesBar.makeFavoritesBar();
    }
  } else {
    console.log("nothing");
    console.log(`${localStorage.length}`);
    let citiesArray = [];
    let citiesArrayJSON = JSON.stringify(citiesArray);
    localStorage.setItem("cities", `${citiesArrayJSON}`);
  }
} else {
  console.log("nothing");
  console.log(`${localStorage.length}`);
  let citiesArray = [];
  let citiesArrayJSON = JSON.stringify(citiesArray);
  localStorage.setItem("cities", `${citiesArrayJSON}`);
}
