const { app, BrowserWindow } = require('electron')

const isDev = process.env.NODE_ENV === 'development'

app.on('ready', () => {
    const loginWin = new BrowserWindow({
        width: 800,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        }
    })
    const mainWin = new BrowserWindow({
        width: 800,
        height: 500,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    })
    const otherWin = new BrowserWindow({
        width: 800,
        height: 500,
        frame: false,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    })
    loginWin.loadURL(isDev ? 'http://127.0.0.1:7000/login' : `file://${__dirname}/dist/login.html`)
    mainWin.loadURL(isDev ? 'http://127.0.0.1:7000/main' : `file://${__dirname}/dist/main.html`)
    otherWin.loadURL(isDev ? 'http://127.0.0.1:7000/login' : `file://${__dirname}/dist/other.html`)

    loginWin.on('closed', () => {
        // 判断是否有登录态，有登录态打开主窗口与副屏，没有登录态退出程序
        // app.quit()
        otherWin.show()
    })
})
