import { app, BrowserWindow } from 'electron';

let window: BrowserWindow | null = null;
const stage: 'PROD' | 'DEV' = (process.env.STAGE as 'PROD' | 'DEV');

const createWindow = () => {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hiddenInset',
  });

  if (stage === 'DEV') {
    window.loadURL('http://localhost:5173');
    window.webContents.openDevTools();
  } else {
    window.loadFile('frontend/index.html');
  }
};

app.whenReady().then(() => {
  createWindow();
});
