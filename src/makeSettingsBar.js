import { makeAutoRefreshSetting } from "./settingAutoRefresh";
import { makeSortSetting } from "./settingSort";

export function makeSettingsBar() {
  let settingsBar = document.createElement("div");
  settingsBar.classList.add("settings-bar");

  let autoRefSetting = makeAutoRefreshSetting();
  settingsBar.appendChild(autoRefSetting);

  let sortSetting = makeSortSetting();
  settingsBar.appendChild(sortSetting);

  return settingsBar;
}
