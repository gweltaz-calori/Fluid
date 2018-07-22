import { dialog, ipcMain } from "electron";
export const openFile = () => {
  dialog.showOpenDialog(
    {
      properties: ["openFile"],
      filters: [{ name: "Fluid Project", extensions: ["fluid"] }]
    },
    filePath => {
      if (!filePath) return;
      ipcMain.send("ON_FILE_OPENED", filePath[0]);
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
      ipcMain.send("ON_FILE_SAVED", filePath);
    }
  );
};
export const saveAsFile = () => {};
