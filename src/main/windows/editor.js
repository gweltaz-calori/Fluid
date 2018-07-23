import { BrowserWindow } from "electron";
import menu from "../menus/editor";

const winURL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`;

export default function createWindow() {
  let mainWindow = new BrowserWindow({
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

  return mainWindow;
}
