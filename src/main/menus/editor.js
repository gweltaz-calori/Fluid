import { Menu } from "electron";

export const openFile = () => {
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
export const saveFile = () => {
  dialog.showSaveDialog(
    {
      filters: [{ name: "Fluid Project", extensions: ["fluid"] }]
    },
    filePath => {
      if (!filePath) return;
    }
  );
};
export const saveAsFile = () => {};

export default Menu.buildFromTemplate([
  {
    label: "File",
    submenu: [
      { label: "Open", accelerator: "CmdOrCtrl+O", click: openFile },
      { label: "Save", accelerator: "CmdOrCtrl+S", click: saveFile },
      { label: "Save As", accelerator: "Shift+CmdOrCtrl+S", click: saveAsFile },
      { role: "close", label: "Exit" }
    ]
  }
]);
