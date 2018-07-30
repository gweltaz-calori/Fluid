import { Menu, BrowserWindow, dialog } from "electron";

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
  focusedWindow.webContents.send("IMPORT_FROM_FIGMA");
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
  }
]);
