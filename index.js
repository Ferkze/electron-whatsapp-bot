const { app, BrowserWindow, session } = require("electron");
const express = require("express");
const script = require("./scripts/whatsapp-send-message-script");

let mainWindow;

app.on("ready", () => {
  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders["User-Agent"] =
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.106 Safari/537.36";
    callback({ cancel: false, requestHeaders: details.requestHeaders });
  });

  var api = express();

  mainWindow = new BrowserWindow();

  api.get("/api/v1/whatsapp/hello-world", (req, res) => {
    res.send("API for sending whatsapp messages...");
  });

  let phone = "5511977570217";
  let text = "Hello world2";

  mainWindow.loadURL(
    `https://web.whatsapp.com/send?phone=${phone}&text=${text}`
  );

  setTimeout(() => {
    mainWindow.webContents.executeJavaScript(script);
  }, 1000);
});
