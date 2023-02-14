import "./style.css";

const info = document.querySelector(".info");
const gif = document.querySelector(".gif");

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
  let tempUnit = "";
  units == "metric" ? (tempUnit = "°C") : (tempUnit = "°F");
  clean(info);
  let basics = document.createElement("div");
  basics.classList.add("basics");
  let temperature = document.createElement("div");
  temperature.classList.add("temperature");
  let overview = document.createElement("div");
  overview.classList.add("overview");
  let sunStats = document.createElement("div");
  sunStats.classList.add("sunStats");
  let cloudStats = document.createElement("div");
  cloudStats.classList.add("cloudStats");
  let windStats = document.createElement("div");
  windStats.classList.add("windStats");

  let basicsCity = document.createElement("p");
  basicsCity.innerText = `${city}`;
  let basicsCountry = document.createElement("p");
  basicsCountry.innerText = `${country}`;
  let basicsTime = document.createElement("p");
  basicsTime.innerText = `${time}`;
  let basicsDate = document.createElement("p");
  basicsDate.innerText = `${date}`;
  let retrievalTime = document.createElement("p");
  retrievalTime.innerText = `(Retrieved on ${new Date().toLocaleString()})`;
  let tempTemperature = document.createElement("p");
  tempTemperature.innerText = `${temp} ${tempUnit}`;

  let basicsInfo = document.createElement("div");
  basicsInfo.classList.add("basics-info");
  let basicsTitle = document.createElement("div");
  let basicsDetails = document.createElement("div");
  let basicsTemperature = document.createElement("div");
  basicsTitle.appendChild(basicsCity);
  basicsTitle.appendChild(basicsCountry);
  basicsInfo.appendChild(basicsTitle);
  basicsDetails.appendChild(basicsTime);
  basicsDetails.appendChild(basicsDate);
  basicsDetails.appendChild(retrievalTime);
  basicsInfo.appendChild(basicsDetails);
  basicsTemperature.appendChild(tempTemperature);
  basicsInfo.appendChild(basicsTemperature);
  basics.appendChild(basicsInfo);

  let gif = document.createElement("div");
  basics.appendChild(gif);

  info.appendChild(basics);

  let tempFeelsLikeLabel = document.createElement("p");
  tempFeelsLikeLabel.innerText = `Feels like: `;
  let tempFeelsLike = document.createElement("p");
  tempFeelsLike.innerText = `${tempFeels} ${tempUnit}`;
  temperature.appendChild(tempFeelsLikeLabel);
  temperature.appendChild(tempFeelsLike);
  info.appendChild(temperature);

  let overviewWeather = document.createElement("p");
  overviewWeather.innerText = `${weather}`;
  overview.appendChild(overviewWeather);
  if (rainVol1h) {
    let overviewRain1h = document.createElement("p");
    overviewRain1h.innerText = `${rainVol1h} mm`;
    overview.appendChild(overviewRain1h);
  }
  if (rainVol3h) {
    let overviewRain3h = document.createElement("p");
    overviewRain3h.innerText = `${rainVol3h} mm`;
    overview.appendChild(overviewRain3h);
  }
  if (snowVol1h) {
    let overviewSnow1h = document.createElement("p");
    overviewSnow1h.innerText = `${snowVol1h} mm`;
    overview.appendChild(overviewSnow1h);
  }
  if (snowVol3h) {
    let overviewSnow3h = document.createElement("p");
    overviewSnow3h.innerText = `${snowVol3h} mm`;
    overview.appendChild(overviewSnow3h);
  }
  info.appendChild(overview);

  let sunStatsSunrise = document.createElement("p");
  sunStatsSunrise.innerText = `Sunrise: ${sunrise}`;
  let sunStatsSunset = document.createElement("p");
  sunStatsSunset.innerText = `Sunset: ${sunset}`;
  sunStats.appendChild(sunStatsSunrise);
  sunStats.appendChild(sunStatsSunset);
  info.appendChild(sunStats);

  let cloudinessClouds = document.createElement("p");
  cloudinessClouds.innerText = `Cloudiness: ${cloudiness} %`;
  cloudStats.appendChild(cloudinessClouds);
  info.appendChild(cloudStats);

  let windStatsSpeed = document.createElement("p");
  windStatsSpeed.innerText = `Wind Speed: ${wind} m/s`;
  windStats.appendChild(windStatsSpeed);
  info.appendChild(windStats);

  showGif(gif, gifSrc);
}

function showGif(div, src) {
  clean(div);
  let image = new Image();
  image.alt = "weather gif";
  image.src = src;
  div.append(image);
}

function clean(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export { showOnInfo, showGif };
