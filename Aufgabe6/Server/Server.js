"use strict";
const Http = require("http");
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server"); //Konsolenausgabe Starting Server
    let port = process.env.PORT; //Variable die den Port festlegt
    if (port == undefined)
        port = 8100;
    let server = Http.createServer(); //wandelt Computer in Http Server
    server.addListener("request", handleRequest); // wenn im Server eine Anfrage stattfindet dann wird die Funktion handleRequest aufgerufen
    server.addListener("listening", handleListen); // wenn dem Sever der Listener listening �bergeben wird dann wird funktion handleListen aufgerufen
    server.listen(port); // erstellt einen Listener an Port 8100
    function handleListen() {
        console.log("Listening"); //auf Konsole wird Listening ausgegeben
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //auf Konsole wird "I hear voices!" ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Der Antwort des Servers werden Eigenschaften zugewiesen; Von welchem Typ der Inhalt sein soll und was das charset ist
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Erlaubt den Zugriff auf Daten von einer anderen Quelle
        _response.write(_request.url); //setzt die �nderungen an die urspr�ngliche url
        console.log(_request.url);
        _response.end(); //beendet die Antwort des Servers
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map