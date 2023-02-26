import "./style.css";
import { makeBasicsCard } from "./makeBasicsCard";
import { makeOverviewCard } from "./makeOverviewCard";
import { makeSunCard } from "./makeSunCard";
import { makeCloudsCard } from "./makeCloudsCard";
import { makeWindCard } from "./makeWindCard";
import { makeGifCard } from "./makeGifCard";
import { makeSnowCard } from "./makeSnowCard";
import { makeRainCard } from "./makeRainCard";
import { makeUVIndexCard } from "./makeUVIndexCard";
import { makeMoonPhaseCard } from "./makeMoonPhaseCard";

const result = document.querySelector(".result");

function showOnCard(
  units,
  city,
  country,
  time,
  date,
  temp,
  tempFeels,
  weather
) {
  let tempUnit = "";
  units == "metric" ? (tempUnit = "°C") : (tempUnit = "°F");

  let basicsCard = makeBasicsCard(
    city,
    country,
    time,
    date,
    temp,
    tempFeels,
    tempUnit,
    true
  );

  return basicsCard;
}

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
  gifSrc,
  moonphase,
  uvindex,
  day
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
  if (!day) {
    let moonPhaseCard = makeMoonPhaseCard(moonphase);
    info.appendChild(moonPhaseCard);
  }
  if (day) {
    let uvCard = makeUVIndexCard(uvindex);
    info.appendChild(uvCard);
  }
  info.appendChild(sunCard);

  result.appendChild(info);
}

function clean(parent) {
  if (typeof parent == "string") {
    let parentElement = document.querySelector(parent);
    if (parentElement) {
      while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
      }
    }
  } else {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
}

export { showOnInfo, showOnCard, clean };
