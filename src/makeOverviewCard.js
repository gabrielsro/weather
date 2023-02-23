export function makeOverviewCard(
  weather,
  rainVol1h,
  rainVol3h,
  snowVol1h,
  snowVol3h
) {
  let overview = document.createElement("div");
  overview.classList.add("overview");
  let overviewWeather = document.createElement("p");
  overviewWeather.innerText = `${weather}`;
  overview.appendChild(overviewWeather);
  if (rainVol1h || rainVol3h) {
    let rainTitle = document.createElement("p");
    rainTitle.innerText = "Rain Volume:";
    overview.appendChild(rainTitle);
    if (rainVol1h) {
      let overviewRain1h = document.createElement("p");
      overviewRain1h.innerText = `Last hour: ${rainVol1h} mm`;
      overview.appendChild(overviewRain1h);
    }
    if (rainVol3h) {
      let overviewRain3h = document.createElement("p");
      overviewRain3h.innerText = `Last 3 hours: ${rainVol3h} mm`;
      overview.appendChild(overviewRain3h);
    }
  }
  if (snowVol1h || snowVol3h) {
    let snowTitle = document.createElement("p");
    snowTitle.innerText = "Snow Volume";
    overview.appendChild(snowTitle);
    if (snowVol1h) {
      let overviewSnow1h = document.createElement("p");
      overviewSnow1h.innerText = `Last hour: ${snowVol1h} mm`;
      overview.appendChild(overviewSnow1h);
    }
    if (snowVol3h) {
      let overviewSnow3h = document.createElement("p");
      overviewSnow3h.innerText = `Last 3 hours: ${snowVol3h} mm`;
      overview.appendChild(overviewSnow3h);
    }
  }
  return overview;
}
