import { app } from "electron";
import "./events/editor";
import "./events/player";
import createEditorWindow from "./windows/editor";

if (process.env.NODE_ENV !== "development") {
  global.__static = require("path")
    .join(__dirname, "/static")
    .replace(/\\/g, "\\\\");
}

app.on("ready", createEditorWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createEditorWindow();
  }
});
