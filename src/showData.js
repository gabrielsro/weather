import "./style.css";
import { makeBasicsCard } from "./makeBasicsCard";
import { makeOverviewCard } from "./makeOverviewCard";
import { makeSunCard } from "./makeSunCard";
import { makeCloudsCard } from "./makeCloudsCard";
import { makeWindCard } from "./makeWindCard";
import { makeGifCard } from "./makeGifCard";
import { makeSnowCard } from "./makeSnowCard";
import { makeRainCard } from "./makeRainCard";

const result = document.querySelector(".result");

function showOnInfo(
  units,
  city,
  country,
  time,
  date,
  temp,
  tempFeels,
  weather,
  rainVol1h,
  rainVol3h,
  snowVol1h,
  snowVol3h,
  sunrise,
  sunset,
  cloudiness,
  wind,
  gifSrc
) {
  clean(result);
  let tempUnit = "";
  units == "metric" ? (tempUnit = "°C") : (tempUnit = "°F");

  let basicsCard = makeBasicsCard(
    city,
    country,
    time,
    date,
    temp,
    tempFeels,
    tempUnit
  );
  let overviewCard = makeOverviewCard(weather);
  let sunCard = makeSunCard(sunrise, sunset);
  let cloudsCard = makeCloudsCard(cloudiness);
  let windCard = makeWindCard(wind);
  let gifCard = makeGifCard(gifSrc);
  let snowCard = makeSnowCard(snowVol1h, snowVol3h);
  let rainCard = makeRainCard(rainVol1h, rainVol3h);

  let cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container");

  let info = document.createElement("div");
  info.classList.add("info");

  info.appendChild(basicsCard);
  info.appendChild(overviewCard);
  info.appendChild(gifCard);
  if (snowVol1h || snowVol3h) {
    info.appendChild(snowCard);
  }
  if (rainVol1h || rainVol3h) {
    info.appendChild(rainCard);
  }
  info.appendChild(cloudsCard);
  info.appendChild(windCard);
  info.appendChild(sunCard);

  result.appendChild(info);
}

function clean(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export { showOnInfo, clean };
