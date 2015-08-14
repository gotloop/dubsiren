'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 320,
        width: 240
    });

    mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
});