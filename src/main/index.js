import { app, BrowserWindow, Menu } from "electron";
import { openFile, saveFile, saveAsFile } from "./menuEvents";
import "./events";

const template = [
  {
    label: "File",
    submenu: [
      { label: "Open", accelerator: "CmdOrCtrl+O", click: openFile },
      { label: "Save", accelerator: "CmdOrCtrl+S", click: saveFile },
      { label: "Save As", accelerator: "Shift+CmdOrCtrl+S", click: saveAsFile },
      { role: "close", label: "Exit" }
    ]
  }
];

if (process.env.NODE_ENV !== "development") {
  global.__static = require("path")
    .join(__dirname, "/static")
    .replace(/\\/g, "\\\\");
}
const menu = Menu.buildFromTemplate(template);

let mainWindow;
const winURL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`;

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    backgroundColor: "#131313",
    webPreferences: {
      webSecurity: false
    },
    show: false
  });

  mainWindow.setMenu(menu);

  mainWindow.maximize();
  mainWindow.show();

  mainWindow.loadURL(winURL);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
