import { ipcMain } from "electron";
import createPlayerWindow from "../windows/player";

const ENTERING_PLAY_MODE = "ENTERING_PLAY_MODE";

ipcMain.on(ENTERING_PLAY_MODE, createPlayerWindow);
