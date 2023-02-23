import reloadIcon from "./reload.svg";

export function makeReloadOption() {
  let reloadOption = document.createElement("div");
  let reloadImage = new Image();
  reloadImage.alt = "Reload icon";
  reloadImage.src = reloadIcon;

  let reloadSelect = document.createElement("select");
  reloadSelect.setAttribute("id", "reload-select");
  let optionManual = document.createElement("option");
  optionManual.innerText = "-Select refresh mode-";
  optionManual.setAttribute("selected", true);
  let optionOneMinute = document.createElement("option");
  optionOneMinute.innerText = "Every minute";
  let optionTenMinutes = document.createElement("option");
  optionTenMinutes.innerText = "Every 10 minutes";
  let option30Minutes = document.createElement("option");
  option30Minutes.innerText = "Every 30 minutes";
  let optionOneHour = document.createElement("option");
  optionOneHour.innerText = "Every hour";
  let optionTwoHours = document.createElement("option");
  optionTwoHours.innerText = "Every 2 hours";
  let optionOneDay = document.createElement("option");
  optionOneDay.innerText = "Every 24 hours";
  reloadSelect.appendChild(optionManual);
  reloadSelect.appendChild(optionOneMinute);
  reloadSelect.appendChild(optionTenMinutes);
  reloadSelect.appendChild(option30Minutes);
  reloadSelect.appendChild(optionOneHour);
  reloadSelect.appendChild(optionTwoHours);
  reloadSelect.appendChild(optionOneDay);

  reloadOption.appendChild(reloadImage);
  reloadOption.appendChild(reloadSelect);

  reloadOption.classList.add("option-reload");

  return reloadOption;
}
