/**
 * Created by Abhishek Srivastava on 21-07-2016.
 */
const electron = require('electron');
const {app,BrowserWindow} = electron;

const path = require('path');

app.on('ready' , ()=> {
    let window = new BrowserWindow({width: 1300, height: 700, transparent:true,frame:false});
window.loadURL(path.join('file://', __dirname, 'index.html'));
window.webContents.openDevTools();
});
module.exports.newWindow = () =>{
    let window = new BrowserWindow({width: 300, height:200, transparent:true});
    window.loadURL(path.join('file://', __dirname, 'new-template.html'));
};