import { ipcRenderer } from "electron";
import { IMPORT_FROM_FIGMA, CHANGE_THEME } from "../../main/events-types";
import router from "../router";
import store from "../store";

ipcRenderer.on(IMPORT_FROM_FIGMA, () => {
  router.push({
    name: "Home",
    params: {
      fromMenu: true
    }
  });
});

ipcRenderer.on(CHANGE_THEME, (event, theme) => {
  store.dispatch("setTheme", theme);
});
