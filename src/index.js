import { getOptions } from "./options";
import { makeSearchBar } from "./makeSearchBar";
import { makeFavList } from "./makeFavList";
import favoritesBar from "./favoritesBar";
import autoRefreshSetup from "./settingAutoRefresh";

makeSearchBar();

if (localStorage.length > 0) {
  if (localStorage.getItem("cities")) {
    if (JSON.parse(localStorage.getItem("cities")).length > 0) {
      favoritesBar.makeFavoritesBar();
      makeFavList();
    }
    let refreshMode = localStorage.getItem("refresh");
    if (refreshMode == "Never") {
      autoRefreshSetup.auto = false;
    } else {
      autoRefreshSetup.handleAutoRefresh(localStorage.getItem("refresh"));
    }
  }
} else {
  let citiesArray = [];
  let metric = true;
  let citiesArrayJSON = JSON.stringify(citiesArray);
  let refresh = "Never";
  localStorage.setItem("cities", `${citiesArrayJSON}`);
  localStorage.setItem("metric", `${metric}`);
  localStorage.setItem("refresh", `${refresh}`);
  localStorage.setItem("sort", JSON.stringify("atoz"));
}

getOptions(false);
