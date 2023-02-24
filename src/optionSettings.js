import SettingsIcon from "./settings.svg";
import favoritesBar from "./favoritesBar";
import { getOptionsUnfavorite } from "./options";

export function makeSettingsOption() {
  let settingsOption = document.createElement("div");
  settingsOption.classList.add("option-settings");
  let settingsImage = new Image();
  settingsImage.alt = "Settings icon";
  settingsImage.src = SettingsIcon;
  settingsOption.appendChild(settingsImage);

  settingsOption.addEventListener("click", () => {
    console.log("Uy gonorrea");
  });

  return settingsOption;
}
