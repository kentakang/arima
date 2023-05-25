import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import { JSONFile } from 'lowdb/node';
import { Low } from 'lowdb';

import Bridge, { IInternalDatabase } from './bridge';

let window: BrowserWindow | null = null;
let bridge: Bridge | null = null;
const stage: 'PROD' | 'DEV' = (process.env.STAGE as 'PROD' | 'DEV');

const createWindow = async () => {
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

  const dbPath = path.join(app.getPath('userData'), 'db.json');
  const adapter = new JSONFile<IInternalDatabase>(dbPath);
  const defaultData: IInternalDatabase = {
    keychains: [],
  };
  const db = new Low(adapter, defaultData);

  await db.read();

  bridge = new Bridge(db, window.webContents);

  bridge.initialize();
};

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  app.quit();
});
