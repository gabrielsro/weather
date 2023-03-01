import favoritesBar from "./favoritesBar";
import { getCardForFavList } from "./handleUserInput";
import { getOptionsFavList } from "./options";
import { clean } from "./showData";

export async function makeFavList() {
  let result = document.querySelector(".result");
  let info = document.querySelector(".info");
  let units = JSON.parse(localStorage.getItem("metric"));
  let metric = "";
  let favListSorted = [];
  units ? (metric = "metric") : (metric = "imperial");
  const cities = JSON.parse(localStorage.getItem("cities"));
  let promises = [];

  cities.forEach((city) => {
    let getCity = new Promise((resolve, reject) => {
      let cityCard = getCardForFavList(city, metric);
      resolve(cityCard);
      reject("Error wile getting cityCard for ", city);
    });
    promises.push(getCity);
  });

  Promise.all(promises).then((favList) => {
    if (
      JSON.parse(localStorage.getItem("sort")) == "atoz" ||
      JSON.parse(localStorage.getItem("sort")) == "ztoa"
    ) {
      cities.forEach((c) => {
        let cityFromCard = favList.filter((cityObj) => cityObj.cityName == c);
        favListSorted.push(cityFromCard[0].card);
      });
    }
    if (JSON.parse(localStorage.getItem("sort")) == "tempctoh") {
      let favListSortedCards = favList.sort((a, b) => {
        if (a.tempActual > b.tempActual) {
          `${a.cityName}, ${a.tempActual} is hotter than ${b.cityName}, ${b.tempActual}`;
          return 1;
        }
        if (a.tempActual < b.tempActual) {
          return -1;
        } else {
          return 0;
        }
      });
      favListSortedCards.forEach((c) => favListSorted.push(c.card));
      let citiesSorted = [];
      favListSortedCards.forEach((c) => {
        citiesSorted.push(c.cityName);
      });
      localStorage.setItem("cities", JSON.stringify(citiesSorted));
    }
    if (JSON.parse(localStorage.getItem("sort")) == "temphtoc") {
      let favListSortedCards = favList.sort((a, b) => {
        if (a.tempActual > b.tempActual) {
          return -1;
        }
        if (a.tempActual < b.tempActual) {
          return 1;
        } else {
          return 0;
        }
      });
      favListSortedCards.forEach((c) => favListSorted.push(c.card));
      let citiesSorted = [];
      favListSortedCards.forEach((c) => {
        citiesSorted.push(c.cityName);
      });
      localStorage.setItem("cities", JSON.stringify(citiesSorted));
    }
    if (JSON.parse(localStorage.getItem("sort")) == "feelsctoh") {
      let favListSortedCards = favList.sort((a, b) => {
        if (a.feels > b.feels) {
          return 1;
        }
        if (a.feels < b.feels) {
          return -1;
        } else {
          return 0;
        }
      });
      favListSortedCards.forEach((c) => favListSorted.push(c.card));
      let citiesSorted = [];
      favListSortedCards.forEach((c) => {
        citiesSorted.push(c.cityName);
      });
      localStorage.setItem("cities", JSON.stringify(citiesSorted));
    }
    if (JSON.parse(localStorage.getItem("sort")) == "feelshtoc") {
      let favListSortedCards = favList.sort((a, b) => {
        if (a.feels > b.feels) {
          return -1;
        }
        if (a.feels < b.feels) {
          return 1;
        } else {
          return 0;
        }
      });
      favListSortedCards.forEach((c) => favListSorted.push(c.card));
      let citiesSorted = [];
      favListSortedCards.forEach((c) => {
        citiesSorted.push(c.cityName);
      });
      localStorage.setItem("cities", JSON.stringify(citiesSorted));
    }
    if (info) {
      favoritesBar.refreshFavoritesBar();
    } else {
      let settingsBar = document.querySelector(".settings-bar");
      if (!settingsBar) {
        getOptionsFavList();
      }
      let favBar = document.querySelector(".favorites-bar");
      favBar.setAttribute("id", "hidden");
      clean(result);
      favListSorted.forEach((f) => result.appendChild(f));
    }
  });
}
