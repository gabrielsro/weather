import FavsIcon from "./favs.svg";
import { getOptionsFavList } from "./options";
import { makeFavList } from "./makeFavList";
import { clean } from "./showData";
import favoritesBar from "./favoritesBar";
import { getOptionsUnfavorite } from "./options";

export function makeShowFavsOption() {
  let favsOption = document.createElement("div");
  favsOption.classList.add("option-favs");
  let favsImage = new Image();
  favsImage.alt = "Show favorites icon";
  favsImage.src = FavsIcon;
  favsOption.appendChild(favsImage);

  favsOption.addEventListener("click", () => {
    let result = document.querySelector(".result");
    clean(result);
    makeFavList();
  });

  return favsOption;
}
