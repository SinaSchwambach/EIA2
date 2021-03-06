var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", startGame);
    window.addEventListener("load", refresh);
    let serverAddress = " https://eia2ws18.herokuapp.com/";
    let objects = [];
    let snowballs = [];
    let children = [];
    let imagedata;
    let cloudOne;
    let cloudTwo;
    let fps = 25;
    let gameState;
    function startGame() {
        document.getElementById("start").style.display = "initial";
        document.getElementById("beschreibung").style.display = "initial";
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementsByTagName("fieldset")[0].style.display = "none";
        document.getElementById("endScreen").style.display = "initial";
        document.getElementById("highscore").style.display = "none";
        let button = document.getElementById("start");
        button.addEventListener("click", init);
        startDatabase();
    }
    function startDatabase() {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let showScore = document.getElementById("showHighscore");
        showScore.innerHTML = Endabgabe.highscore.toString();
        insertButton.addEventListener("click", insert);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&highscore=" + Endabgabe.highscore;
        console.log(query);
        sendRequest(query, handleInsertResponse);
        refresh(_event);
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
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
            let data = JSON.parse(xhr.response);
            function sortHighscore(_a, _b) {
                if (_a.highscore < _b.highscore) {
                    return 1;
                }
                if (_a.highscore > _b.highscore) {
                    return -1;
                }
                return 0;
            }
            data.sort(sortHighscore);
            console.log("data");
            let scores = document.getElementById("score");
            document.getElementById("score").innerHTML = "";
            for (let i = 0; i < 10; i++) {
                let div = document.createElement("div");
                scores.appendChild(div);
                div.innerHTML = data[i].name + " :   ";
                div.innerHTML += data[i].highscore;
            }
        }
    }
    function init() {
        objects = [];
        snowballs = [];
        children = [];
        Endabgabe.highscore = 0;
        gameState = "running";
        window.clearTimeout(60000);
        window.setTimeout(endGame, 60000);
        document.getElementById("beschreibung").style.display = "none";
        document.getElementById("endScreen").style.display = "none";
        document.getElementsByTagName("canvas")[0].style.display = "initial";
        document.getElementById("highscore").style.display = "initial";
        document.getElementById("highscore").innerHTML = "";
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", shoot);
        Endabgabe.crc = canvas.getContext("2d");
        Endabgabe.drawBackground();
        generateSnow();
        generateClouds();
        generateChild();
        imagedata = Endabgabe.crc.getImageData(0, 0, canvas.width, canvas.height);
        update();
    }
    function shoot(_event) {
        let ball = new Endabgabe.Snowball();
        ball.xP = _event.clientX;
        ball.yP = _event.clientY;
        ball.radius = 50;
        ball.state = "throw";
        snowballs.push(ball);
        console.log("snowball state: " + ball.state, "snowball radius " + ball.radius);
        console.log(ball.xP, ball.yP);
        console.log("snowballs:" + snowballs.length);
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
        window.clearTimeout(60000);
        window.setTimeout(generateChild, 3000);
        let child = new Endabgabe.Child();
        child.state = "ride";
        children.push(child);
    } //generateChild
    function update() {
        Endabgabe.crc.putImageData(imagedata, 0, 0);
        if (gameState == "running") {
            window.setTimeout(update, 1000 / fps);
        }
        cloudOne.move();
        cloudOne.draw();
        cloudTwo.move();
        cloudTwo.draw();
        for (let i = 0; i < children.length; i++) {
            children[i].move();
            children[i].draw();
            if (children[i].state == "hit" && children[i].xP < -10 || children[i].yP > (Endabgabe.crc.canvas.height + 10)) {
                children.splice(i, 1);
                console.log("kids: " + children.length);
            }
        }
        for (let i = 0; i < objects.length; i++) {
            let object = objects[i];
            object.draw();
            object.move();
        }
        for (let i = 0; i < snowballs.length; i++) {
            console.log("test");
            if (snowballs[i].radius > 16) {
                snowballs[i].move();
                snowballs[i].draw();
                console.log("test2");
            }
            else {
                if (snowballs[i].radius == 16) {
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
                        else if (snowballs[i].hit(children[a].xP, children[a].yP) == true && children[a].state == "pullUp") {
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
    }
    function endGame() {
        gameState = "end";
        objects = [];
        snowballs = [];
        children = [];
        document.getElementById("beschreibung").style.display = "none";
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementsByTagName("fieldset")[0].style.display = "initial";
        document.getElementById("endScreen").style.display = "initial";
        document.getElementById("highscore").style.display = "none";
        startDatabase();
    }
})(Endabgabe || (Endabgabe = {})); //namespace
//# sourceMappingURL=main.js.map