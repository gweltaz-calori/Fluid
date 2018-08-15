import { Menu, BrowserWindow, dialog } from "electron";
import themes from "../../renderer/themes";
import { IMPORT_FROM_FIGMA, CHANGE_THEME } from "../events-types/index";

import "shared/";

const openFile = () => {
  dialog.showOpenDialog(
    {
      properties: ["openFile"],
      filters: [{ name: "Fluid Project", extensions: ["fluid"] }]
    },
    filePath => {
      if (!filePath) return;
    }
  );
};

const save = () => {
  dialog.showSaveDialog(
    {
      filters: [{ name: "Fluid Project", extensions: ["fluid"] }]
    },
    filePath => {
      if (!filePath) return;
    }
  );
};

const importFromFigma = () => {
  let focusedWindow = BrowserWindow.getFocusedWindow();
  focusedWindow.webContents.send(IMPORT_FROM_FIGMA);
};

const changeTheme = theme => {
  let focusedWindow = BrowserWindow.getFocusedWindow();
  focusedWindow.webContents.send(CHANGE_THEME, theme);
};
export default Menu.buildFromTemplate([
  {
    label: "File",
    submenu: [
      { label: "Import From Figma", click: importFromFigma },
      { label: "Open", accelerator: "CmdOrCtrl+O", click: openFile },
      { label: "Save", accelerator: "CmdOrCtrl+S", click: save },
      { label: "Save As", accelerator: "Shift+CmdOrCtrl+S", click: save },
      { role: "close", label: "Exit" }
    ]
  },
  {
    label: "View",
    submenu: [
      {
        label: "Theme",
        submenu: themes.map(theme => {
          return {
            label: theme.name,
            type: "radio",
            click: () => changeTheme(theme)
          };
        })
      }
    ]
  }
]);
