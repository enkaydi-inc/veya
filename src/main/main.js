import { app, BrowserWindow } from "electron/main";
import path from "node:path";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join("../../assets/veya-logo.png"), // Use .ico for Windows
    webPreferences: {
      preload: path.join('../preload.js')
    }
  });
  win.loadFile("public/index.html");
};

app.whenReady().then(() => {
  createWindow();
});
