import * as Http from "http";

namespace L06_SendData {
    console.log("Starting server"); //Konsolenausgabe Starting Server
    let port: number = process.env.PORT; //Variable die den Port festlegt
    if (port == undefined)  //wenn kein spezielle Port angegeben ist dann Port 8100 nutzen
        port = 8100;

    let server: Http.Server = Http.createServer();  //wandelt Computer in Http Server
    server.addListener("request", handleRequest); // wenn im Server eine Anfrage stattfindet dann wird die Funktion handleRequest aufgerufen
    server.addListener("listening", handleListen); // wenn dem Sever der Listener listening übergeben wird dann wird funktion handleListen aufgerufen
    server.listen(port); // erstellt einen Listener an Port 8100

    function handleListen(): void {
        console.log("Listening"); //auf Konsole wird Listening ausgegeben
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Variablen _request und _response werden übergeben
        console.log("I hear voices!"); //auf Konsole wird "I hear voices!" ausgegeben

        _response.setHeader("content-type", "text/html; charset=utf-8"); //Der Antwort des Servers werden Eigenschaften zugewiesen; Von welchem Typ der Inhalt sein soll und was das charset ist
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Erlaubt den Zugriff auf Daten von einer anderen Quelle

        _response.write(_request.url); //setzt die Änderungen an die ursprüngliche url
        
        _response.end();//beendet die Antwort des Servers
    }
}