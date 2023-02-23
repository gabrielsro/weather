import favoriteIcon from "./fav.svg";

export function makeFavoriteOption() {
  let favoriteOption = document.createElement("div");
  let favoriteImage = new Image();
  favoriteImage.alt = "Favorite icon";
  favoriteImage.src = favoriteIcon;
  let favoriteText = document.createElement("p");
  favoriteText.innerText = "Add to favorites";
  favoriteOption.appendChild(favoriteImage);
  favoriteOption.appendChild(favoriteText);

  favoriteOption.classList.add("option-favorite");

  return favoriteOption;
}
