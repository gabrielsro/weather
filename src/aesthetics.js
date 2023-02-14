import "./style.css";
import SearchIcon from "./search-outline.svg";
import TemperatureIcon from "./thermometer-outline.svg";

const Aesthetics = {
  searchbar: document.querySelector(".searchbar"),
  options: document.querySelector(".options"),
  addIcons() {
    let searchIcon = new Image();
    searchIcon.alt = "Search Icon";
    searchIcon.src = SearchIcon;
    this.searchbar.appendChild(searchIcon);

    let temperatureIcon = new Image();
    temperatureIcon.alt = "Temperature Icon";
    temperatureIcon.src = TemperatureIcon;
    this.options.appendChild(temperatureIcon);
  },
};

export default Aesthetics;
