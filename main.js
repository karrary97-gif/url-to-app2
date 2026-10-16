const { app, BrowserWindow, Menu } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true }
  });
  Menu.setApplicationMenu(null);
  win.loadURL('https://shiny-pothos-26396e.netlify.app/');
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
