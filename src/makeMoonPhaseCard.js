import NewMoon from "./new-moon.svg";
import WaxingCrescentMoon from "./waxing-cresent-moon.svg";
import FirstQuarterMoon from "./first-quarter-moon.svg";
import WaxingGibbousMoon from "./waxing-gibbous-moon.svg";
import FullMoon from "./full-moon.svg";
import WaningGibbousMoon from "./waning-gibbous-moon.svg";
import ThirdQuarterMoon from "./third-quarter-moon.svg";
import WaningCrescent from "./waning-crescent-moon.svg";

export function makeMoonPhaseCard(moonphase) {
  let moonPhaseCard = document.createElement("div");
  moonPhaseCard.classList.add("moon-phase-card");

  let moonIcon = new Image();
  moonIcon.alt = "Moon phase icon";

  let phaseName;

  if (moonphase == 0) {
    moonIcon.src = NewMoon;
    phaseName = "New Moon";
  }
  if (moonphase > 0 && moonphase < 0.25) {
    moonIcon.src = WaxingCrescentMoon;
    phaseName = "Waxing Crescent";
  }
  if (moonphase == 0.25) {
    moonIcon.src = FirstQuarterMoon;
    phaseName = "First Quarter";
  }
  if (moonphase > 0.25 && moonphase < 0.5) {
    moonIcon.src = WaxingGibbousMoon;
    phaseName = "Wacing Gibbous";
  }
  if (moonphase == 0.5) {
    moonIcon.src = FullMoon;
    phaseName = "Full Moon";
  }
  if (moonphase > 0.5 && moonphase < 0.75) {
    moonIcon.src = WaningGibbousMoon;
    phaseName = "Waning Gibbous";
  }
  if (moonphase == 0.75) {
    moonIcon.src = ThirdQuarterMoon;
    phaseName = "Last Quarter";
  }
  if (moonphase > 0.75 && moonphase <= 1) {
    moonIcon.src = WaningCrescent;
    phaseName = "Waning Crescent";
  }

  let description = document.createElement("p");
  description.innerText = `Moon phase: ${phaseName}`;

  moonPhaseCard.appendChild(moonIcon);
  moonPhaseCard.appendChild(description);

  return moonPhaseCard;
}
