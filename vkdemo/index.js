const {app, BrowserWindow} = require('electron')

let mainWindow;



app.on('ready', function(){
    mainWindow  = new BrowserWindow({'width':800, 'height':600,'minWidth':800, 'minHeight':600})
    mainWindow.loadFile('index.html')

    mainWindow.on('close', function(){
        mainWindow = null
    })
})

app.on('windows-all-closed', function(){
    if (process.platform !== 'darwin') {
        application.quit()
    }
})

app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
      createWindow()
    }
  })