import { ipcRenderer } from "electron";
const IMPORT_FROM_FIGMA = "IMPORT_FROM_FIGMA";
import router from "../router";

ipcRenderer.on(IMPORT_FROM_FIGMA, () => {
  router.push({
    name: "Home",
    params: {
      fromMenu: true
    }
  });
});
