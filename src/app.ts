import { app, BrowserWindow } from 'electron';

let window: BrowserWindow | null = null;

const createWindow = () => {
  window = new BrowserWindow({
    width: 800,
    height: 600,
  });
};

app.whenReady().then(() => {
  createWindow();
});
