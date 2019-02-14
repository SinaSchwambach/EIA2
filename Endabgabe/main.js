var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", startGame);
    function startGame() {
        document.getElementById("start").style.display = "initial";
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("endScreen").style.display = "initial";
        let button = document.getElementsByTagName("Button")[0];
        button.addEventListener("click", init);
    }
    let objects = [];
    let snowballs = [];
    let children = [];
    let imagedata;
    let cloudOne;
    let cloudTwo;
    let fps = 25;
    Endabgabe.highscore = 0;
    function init() {
        window.setTimeout(endGame, 60000);
        document.getElementById("endScreen").style.display = "none";
        document.getElementsByTagName("canvas")[0].style.display = "initial";
        document.getElementById("highscore").style.display = "initial";
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", shoot);
        Endabgabe.crc = canvas.getContext("2d");
        Endabgabe.drawBackground();
        generateSnow();
        generateClouds();
        generateChild();
        //       generateSnowball();
        imagedata = Endabgabe.crc.getImageData(0, 0, canvas.width, canvas.height);
        update();
        function shoot(_event) {
            if (snowballs.length < 20) {
                let ball = new Endabgabe.Snowball();
                ball.xP = _event.clientX;
                ball.yP = _event.clientY;
                ball.radius = 50;
                ball.state = "throw";
                snowballs.push(ball);
                console.log("throw");
                console.log(ball.xP, ball.yP);
            }
        }
        function generateSnow() {
            for (let i = 0; i < 150; i++) {
                let snowflake = new Endabgabe.Snow();
                objects.push(snowflake);
            }
        } //generateSnow
        function generateClouds() {
            cloudOne = new Endabgabe.CloudOne();
            cloudTwo = new Endabgabe.CloudTwo();
        } //generateClouds
        function generateChild() {
            window.setTimeout(generateChild, 3000);
            let child = new Endabgabe.Child();
            child.state = "ride";
            children.push(child);
        } //generateChild
        /*      function generateSnowball(): void {
      
                  let snowball: Snowball = new Snowball();
                  snowballs.push(snowball);
      
              }//generateSnowball*/
        function update() {
            Endabgabe.crc.putImageData(imagedata, 0, 0);
            window.setTimeout(update, 1000 / fps);
            //Wolken
            cloudOne.move();
            cloudOne.draw();
            cloudTwo.move();
            cloudTwo.draw();
            for (let i = 0; i < objects.length; i++) {
                let object = objects[i];
                object.draw();
                object.move();
            }
            for (let i = 0; i < children.length; i++) {
                children[i].move();
                children[i].draw();
                if (children[i].xP < -10 || children[i].yP > (Endabgabe.crc.canvas.height + 10)) {
                    children.splice(i, 1);
                    console.log("length:" + children.length);
                }
            }
            for (let i = 0; i < snowballs.length; i++) {
                if (snowballs[i].radius > 15) {
                    snowballs[i].move();
                    snowballs[i].draw();
                }
                else {
                    if (snowballs[i].radius == 15) {
                        console.log("snowball");
                        snowballs[i].move();
                        snowballs[i].draw();
                        for (let a = 0; a < children.length; a++) {
                            console.log("hallo");
                            if (snowballs[i].hit(children[a].xP, children[a].yP) == true && children[a].state == "ride") {
                                children[a].state = "hit";
                                console.log("hi");
                                Endabgabe.highscore += Math.floor(children[a].yD * children[a].xD);
                                console.log(Endabgabe.highscore);
                                document.getElementById("highscore").innerHTML = " Your Score: " + Endabgabe.highscore.toString();
                            }
                        }
                    }
                }
            }
            /*     for (let i: number = 0; i < snowballs.length; i++) {
                      snowballs[i].draw();
                      snowballs[i].move();
                      console.log("Snowballarraylenght:" + snowballs.length);
                  }*/
        } //update
        function endGame() {
            document.getElementsByTagName("canvas")[0].style.display = "none";
            document.getElementById("endScreen").style.display = "initial";
            startDatabase();
            let serverAddress = " https://eia2ws18.herokuapp.com/";
            function startDatabase() {
                console.log("Init");
                let insertButton = document.getElementById("insert");
                let refreshButton = document.getElementById("refresh");
                let showScore = document.getElementById("showHighscore");
                showScore.innerHTML = Endabgabe.highscore.toString();
                //   let findButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("find");
                insertButton.addEventListener("click", insert);
                refreshButton.addEventListener("click", refresh);
                //   findButton.addEventListener("click", find);
            }
            function insert(_event) {
                let inputs = document.getElementsByTagName("input");
                let query = "command=insert";
                query += "&name=" + inputs[0].value;
                query += "&highscore=" + Endabgabe.highscore;
                //   query += "&matrikel=" + inputs[2].value;
                console.log(query);
                sendRequest(query, handleInsertResponse);
            }
            function refresh(_event) {
                let query = "command=refresh";
                sendRequest(query, handleFindResponse);
            }
            /*  function find(_event: Event): void {
                  let search: HTMLInputElement = <HTMLInputElement>document.getElementById("Suche");
                  let query: string = "command=find";
                  query += "&matrikel=" + search.value;
                  console.log(query);
                  sendRequest(query, handleFindResponse);
                  }*/
            function sendRequest(_query, _callback) {
                let xhr = new XMLHttpRequest();
                xhr.open("GET", serverAddress + "?" + _query, true);
                xhr.addEventListener("readystatechange", _callback);
                xhr.send();
            }
            function handleInsertResponse(_event) {
                let xhr = _event.target;
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    alert(xhr.response);
                }
            }
            function handleFindResponse(_event) {
                let xhr = _event.target;
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    let output = document.getElementsByTagName("textarea")[0];
                    output.value = xhr.response;
                    let responseAsJson = JSON.parse(xhr.response);
                    console.log(responseAsJson);
                }
            }
        }
    } //init
})(Endabgabe || (Endabgabe = {})); //namespace
//# sourceMappingURL=main.js.map