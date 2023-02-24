import { getCardForFavList } from "./handleUserInput";

const result = document.querySelector(".result");
let units = JSON.parse(localStorage.getItem("metric"));
let metric = "";
units ? (metric = "metric") : (metric = "imperial");

export async function makeFavList() {
  let cities = JSON.parse(localStorage.getItem("cities"));
  console.log(cities);
  cities.forEach(async function (city) {
    let cityCard = await getCardForFavList(city, metric);
    console.log(cityCard);
    result.appendChild(cityCard);
  });
}
