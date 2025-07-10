import { app, BrowserWindow } from "electron/main";

const createWindow = () => {
  const win = new BrowserWindow({
    // width: 550,
    // height: 300,
  });
  win.loadFile("public/index.html");
};

app.whenReady().then(() => {
  createWindow();
});
