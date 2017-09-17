// const {app, BrowserWindow} = require('electron')
// const path = require('path')
// const url = require('url')

let win

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600})
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  //win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

// app.on('ready', createWindow)

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })

// app.on('activate', () => {
//   if (win === null) {
//     createWindow()
//   }
// })

var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=6d5d22aef48b5087d22f2e0ef3ad790e';
var units = '&units=metric';

var input;

function setup() {

    var button = document.getElementById('#submit');
    // button.mousePressed(weatherAsk);

    input = document.getElementById('#city');
}

function weatherAsk() {
    var url = api + input.value() + apiKey + units;
    loadJSON(url, gotData);
}

function gotData(data) {
    weather = data;
    var category;

    category = document.getElementById('#category');
}
console.log(category);
