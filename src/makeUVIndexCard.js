import UVIndexIcon from "./UVIcon.svg";

export function makeUVIndexCard(uvindex) {
  let uvIndexCard = document.createElement("div");
  uvIndexCard.classList.add("uv-index-card");

  let uvIcon = new Image();
  uvIcon.alt = "UV index icon";
  uvIcon.src = UVIndexIcon;

  let description;
  if (uvindex <= 2) {
    description = "(Low)";
  }
  if (uvindex > 2 && uvindex <= 5) {
    description = "(Moderate)";
  }
  if (uvindex > 5 && uvindex <= 7) {
    description = "(High)";
  }
  if (uvindex > 7 && uvindex <= 10) {
    description = "(Very High)";
  }
  if (uvindex > 10) {
    description = "(Extreme)";
  }

  let uvIndex = document.createElement("p");
  uvIndex.innerText = `UV Index: ${uvindex} ${description}`;

  uvIndexCard.appendChild(uvIcon);
  uvIndexCard.appendChild(uvIndex);

  return uvIndexCard;
}
