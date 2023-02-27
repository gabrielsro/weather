const gifKey = "ZSqLZBoP1L25pS03G478pjRBb0NESb0C";
const errorGifIds = [
  "glmRyiSI3v5E4",
  "jJO1Bwuch5orK",
  "gKsJUddjnpPG0",
  "mEV42F38lur6PbfapW",
  "1xVbSX8UzIiMPMZjZP",
  "doJrCO8kCAgNy",
  "h4Z6RfuQycdiM",
  "3o7aCTPPm4OHfRLSH6",
];

async function getErrorGif() {
  let index = Math.floor(Math.random() * 8);
  let id = errorGifIds[index];
  let apiPromise = await fetch(
    `https://api.giphy.com/v1/gifs/${id}?api_key=${gifKey}`,
    { mode: "cors" }
  );
  let apiPromiseResolved = await apiPromise.json();
  let src = apiPromiseResolved.data.images.original.url;
  return src;
}

async function getWeatherGif(
  weather,
  timeAtCity,
  sunriseDate,
  sunsetDate,
  units,
  tempFeelsRounded,
  moonphase
) {
  let temperature;
  if (units == "metric") {
    if (tempFeelsRounded < -10) {
      temperature = "freezing";
    }
  }
  if (units == "imperial") {
    if (tempFeelsRounded < 14) {
      temperature = "freezing";
    }
  }

  let id = "uymKgqrJ9Or60";
  //NIGHTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
  if (timeAtCity - sunsetDate > 0.5 || timeAtCity - sunriseDate < 0) {
    if (weather.match(/rain/)) {
      if (
        weather.match(/\D+(?=\s)/)[0] == "light" ||
        weather.match(/\D+(?=\s)/)[0] == "drizzle"
      ) {
        id = "xT9GEIc1nQ7bVQQ54Q";
      }
      if (weather.match(/thunderstorm/)) {
        id = "3osxYzIQRqN4DOEddC";
      }

      if (weather.match(/moderate/)) {
        id = "5torEEM8QnR95Cqg11";
      } else {
        id = "5torEEM8QnR95Cqg11";
      }
    }
    if (weather.match(/clouds/)) {
      if (weather.match(/\D+(?=\s)/)[0] == "overcast") {
        id = "2fC74jNn5SPvO";
      }
      if (
        weather.match(/\D+(?=\s)/)[0] == "few" ||
        weather.match(/\D+(?=\s)/)[0] == "scattered"
      ) {
        if (moonphase == 0.5) {
          id = "nV5l2SFsU93ckaWlyn";
        } else {
          if (weather.match(/\D+(?=\s)/)[0] == "scattered") {
            id = "wwjEPjqcuPwvS";
          }
          if (weather.match(/\D+(?=\s)/)[0] == "few") {
            id = "wwjEPjqcuPwvS";
          }
        }
      }
      if (weather.match(/\D+(?=\s)/)[0] == "broken") {
        id = "13QslXgKOQzmhy";
      }
    }
    if (weather.match(/snow/)) {
      if (temperature == "freezing") {
        id = "s4Bi420mMDRBK";
      } else {
        if (weather.match(/\D+(?=\s)/)) {
          if (weather.match(/\D+(?=\s)/)[0] == "light") {
            if (weather.match(/shower/)) {
              id = "ONLoRRAHQh5kY";
            } else {
              id = "3ohc11DpNMf7qnqxR6";
            }
          }
        } else {
          id = "bGaOdqeqYQKc0";
        }
      }
    }
    if (weather.match(/haze/)) {
      id = "3sJQdC0fXJLyWOs4WM";
    }
    if (weather.match(/mist/)) {
      id = "3o72F65dJl7Z0PtdjG";
    }
    if (weather.match(/clear/)) {
      if (moonphase == 0.5) {
        id = "aN9GqoR7OD3nq";
      }
      if (moonphase > 0 && moonphase < 0.25) {
        id = "9ukPOCS9EOEta";
      }
      if (moonphase > 0.75 && moonphase <= 1) {
        id = "9ukPOCS9EOEta";
      } else {
        id = "m5oQabBdoOye4";
      }
    }
    if (weather.match(/fog/)) {
      id = "dz6Nrk35xWP3q";
    }

    if (weather.match(/sleet/)) {
      id = "d3mlmtNPoxNrt4Bi";
    }

    if (weather.match(/drizzle/)) {
      id = "xT9GEOg09OuResnZ6g";
    }

    if (weather.match(/smoke/)) {
      id = "l2Je9dUI5LpzfHGTe";
    }
    if (weather.match(/thunderstorm/)) {
      id = "VJAuhRegmbXSAaffFR";
    }
    if (weather.match(/dust/)) {
      id = "l4pT0NtPSMV3pw6Lm";
    }
  }

  //DAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
  if (timeAtCity > sunriseDate && timeAtCity < sunsetDate) {
    if (weather.match(/drizzle/)) {
      id = "xT9GEOg09OuResnZ6g";
    }
    if (weather.match(/rain/)) {
      if (weather.match(/\D+(?=\s)/)[0] == "drizzle") {
        id = "xT9GEOg09OuResnZ6g";
      }
      if (weather.match(/thunderstorm/)) {
        id = "3osxYzIQRqN4DOEddC";
      }
      if (weather.match(/light/)) {
        id = "l0IrIkq7Q3iRII0hy";
      }

      if (weather.match(/moderate/)) {
        id = "W0c3xcZ3F1d0EYYb0f";
      } else {
        id = "W0c3xcZ3F1d0EYYb0f";
      }
    }
    if (weather.match(/clouds/)) {
      if (weather.match(/\D+(?=\s)/)[0] == "overcast") {
        id = "dWIau1ZRyIj3j6YEaL";
      }
      if (weather.match(/\D+(?=\s)/)[0] == "few") {
        id = "mno6BJfy8USic";
      }
      if (weather.match(/\D+(?=\s)/)[0] == "scattered") {
        id = "uOuiK4F5zZkZ2";
      }
      if (weather.match(/\D+(?=\s)/)[0] == "broken") {
        id = "63WsNg9DAhRkY";
      }
    }
    if (weather.match(/snow/)) {
      if (temperature == "freezing") {
        id = "s4Bi420mMDRBK";
      } else {
        if (weather.match(/\D+(?=\s)/)) {
          if (weather.match(/\D+(?=\s)/)[0] == "light") {
            if (weather.match(/shower/)) {
              id = "26xBwFcBGPLNfGbkY";
            } else {
              id = "5qFE91OmehdRq0sL5a";
            }
          }
        } else {
          id = "3oriNScTbEzEVoR1Is";
        }
      }
    }
    if (weather.match(/haze/)) {
      id = "r2OMuTCFo0rv2rgAL5";
    }
    if (weather.match(/mist/)) {
      id = "oVaigqUhPvDglQ0uWJ";
    }
    if (weather.match(/clear/)) {
      id = "RqSJ6nQVsOpxe";
    }
    if (weather.match(/fog/)) {
      id = "oAbvMXvah1M0U";
    }

    if (weather.match(/sleet/)) {
      id = "d3mlmtNPoxNrt4Bi";
    }

    if (weather.match(/drizzle/)) {
      id = "xT9GEOg09OuResnZ6g";
    }

    if (weather.match(/smoke/)) {
      id = "l2Je9dUI5LpzfHGTe";
    }
    if (weather.match(/thunderstorm/)) {
      id = "3osxYzIQRqN4DOEddC";
    }
    if (weather.match(/dust/)) {
      id = "tqtZDj5BqC0CY";
    }
  }

  //SUNSETTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
  if (
    timeAtCity < sunsetDate &&
    (sunsetDate - timeAtCity) / (60 * 1000 * 60) < 0.5
  ) {
    console.log("Sunset");
    if (weather.match(/mist/)) {
      id = "3o72F65dJl7Z0PtdjG";
    }
    if (weather.match(/clouds/)) {
      if (weather.match(/\D+(?=\s)/)[0] == "overcast") {
        id = "Yhg9l8kXuq94Q";
      }
      if (weather.match(/\D+(?=\s)/)[0] == "few") {
        id = "WzLDljBpplUvm";
      }
      if (weather.match(/\D+(?=\s)/)[0] == "scattered") {
        id = "63WsNg9DAhRkY";
      }
      if (weather.match(/\D+(?=\s)/)[0] == "broken") {
        id = "49VB0PHxR5Vsc";
      }
    }
    if (weather.match(/clear/)) {
      id = "ZZIEtQHmiTNwuxTOdt";
    }
    if (weather.match(/thunderstorm/)) {
      id = "Y4JPYsrJEk454pNbts";
    }
    if (weather.match(/fog/)) {
      id = "xT8qBj3Oxl9kuQKgOk";
    }
    if (weather.match(/dust/)) {
      id = "tqtZDj5BqC0CY";
    }
  }
  let apiPromise = await fetch(
    `https://api.giphy.com/v1/gifs/${id}?api_key=${gifKey}`,
    { mode: "cors" }
  );
  let apiPromiseResolved = await apiPromise.json();
  let src = apiPromiseResolved.data.images.original.url;
  return src;
}

export { getErrorGif, getWeatherGif };
