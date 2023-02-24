import reloadIcon from "./reload.svg";

export function makeReloadOption() {
  let reloadOption = document.createElement("div");
  let reloadImage = new Image();
  reloadImage.alt = "Reload icon";
  reloadImage.src = reloadIcon;

  reloadOption.appendChild(reloadImage);

  reloadOption.classList.add("option-reload");

  return reloadOption;
}
