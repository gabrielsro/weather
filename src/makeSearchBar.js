import SearchIcon from "./search-outline.svg";
import handleUserInput from "./handleUserInput";

export function makeSearchBar() {
  const searchBar = document.querySelector(".searchbar");
  let searchIcon = new Image();
  searchIcon.alt = "Search Icon";
  searchIcon.src = SearchIcon;
  searchBar.appendChild(searchIcon);

  searchIcon.addEventListener("click", handleUserInput.handleSearchIcon);
  const searchBarInput = document.querySelector(".searchbar > input");
  searchBarInput.onfocus = () => {
    searchBarInput.addEventListener("keydown", (event) => {
      if (event.key == "Enter") {
        searchIcon.click();
      }
    });
  };
}
