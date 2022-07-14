const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    resizable: true,
    width: 1920,
    height: 1080,
    icon: __dirname + '/img/logo.png',
    autoHideMenuBar: true,
    frame: false,
    show: false
  })

  win.loadURL('http://localhost:3000/')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})