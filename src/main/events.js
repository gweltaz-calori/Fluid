import { ipcMain, BrowserWindow, Menu, MenuItem } from "electron";
const ENTERING_PLAY_MODE = "ENTERING_PLAY_MODE";

ipcMain.on(ENTERING_PLAY_MODE, () => {
  const menu = new Menu();

  menu.append(new MenuItem({ accelerator: "Echap", role: "close" }));

  let playWindow = new BrowserWindow({
    backgroundColor: "#131313",
    webPreferences: {
      webSecurity: false
    },
    width: 1920,
    height: 1080,
    fullscreen: true
  });

  playWindow.setMenu(menu);

  const winURL =
    process.env.NODE_ENV === "development"
      ? `http://localhost:9080/#play`
      : `file://${__dirname}/index.html#play`;

  playWindow.loadURL(winURL);

  playWindow.on("closed", () => {
    playWindow = null;
  });
});
