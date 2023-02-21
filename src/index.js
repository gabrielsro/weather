import "./style.css";
import Aesthetics from "./aesthetics";
import { getOptions } from "./options";
import handleUserInput from "./handleUserInput";

Aesthetics.addIcons();
getOptions();

const searchIcon = document.querySelector(".searchbar > img");
searchIcon.addEventListener("click", handleUserInput.handleSearchIcon);
const searchBar = document.querySelector(".searchbar > input");
searchBar.onfocus = () => {
  searchBar.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
      searchIcon.click();
    }
  });
};
