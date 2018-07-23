import { BrowserWindow } from "electron";
const winURL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:9080/#play`
    : `file://${__dirname}/index.html#play`;

export default function createWindow() {
  let playWindow = new BrowserWindow({
    backgroundColor: "#131313",
    webPreferences: {
      webSecurity: false
    },
    width: 1920,
    height: 1080,
    fullscreen: true
  });

  playWindow.setMenu(null);

  playWindow.loadURL(winURL);

  playWindow.on("closed", () => {
    console.log("play window closed");
    playWindow = null;
  });
}
