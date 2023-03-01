import reloadIcon from "./reload.svg";
import handleUserInput from "./handleUserInput";
import { clean } from "./showData";

export function makeReloadOption() {
  let reloadOption = document.createElement("div");
  let reloadImage = new Image();
  reloadImage.alt = "Reload icon";
  reloadImage.src = reloadIcon;

  reloadOption.appendChild(reloadImage);

  reloadOption.classList.add("option-reload");

  reloadOption.addEventListener("click", () => {
    let info = document.querySelector(".info");
    if (info) {
      let city = document.getElementById("city");
      let cityName = city.innerText;
      clean(".result");
      handleUserInput.handleSearchIcon(cityName);
    } else {
      let searchbar = document.querySelector(".searchbar > input");
      searchbar.value = "";
      console.log(searchbar);
      clean(".result");
      handleUserInput.handleSearchIcon();
    }
  });

  return reloadOption;
}
