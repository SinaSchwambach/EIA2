namespace Endabgabe {

    window.addEventListener("load", startGame);
    window.addEventListener("load", refresh);
    let serverAddress: string = " https://eia2ws18.herokuapp.com/";

    export let crc: CanvasRenderingContext2D;


    let objects: DrawObject[] = [];
    let snowballs: Snowball[] = [];
    let children: Child[] = [];

    let imagedata: ImageData;
    let cloudOne: CloudOne;
    let cloudTwo: CloudTwo;

    let fps: number = 25;
    export let highscore: number;
    let gameState: string;

    function startGame(): void {
        document.getElementById("start").style.display = "initial";
        document.getElementById("beschreibung").style.display = "initial";
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementsByTagName("fieldset")[0].style.display = "none";
        document.getElementById("endScreen").style.display = "initial";
        document.getElementById("highscore").style.display = "none";
        let button: HTMLElement = document.getElementById("start");
        button.addEventListener("click", init);
        startDatabase();
    }
    function startDatabase(): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let showScore: HTMLElement = document.getElementById("showHighscore");
        showScore.innerHTML = highscore.toString();
        insertButton.addEventListener("click", insert);
    }

    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&highscore=" + highscore;
        console.log(query);
        sendRequest(query, handleInsertResponse);
        refresh(_event);
    }

    function refresh(_event: Event): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let data: HighscoreData[] = JSON.parse(xhr.response);

            function sortHighscore(_a: HighscoreData, _b: HighscoreData): number {
                if (_a.highscore < _b.highscore) { return 1; }
                if (_a.highscore > _b.highscore) { return -1; }
                return 0;

            }
            data.sort(sortHighscore);
            console.log("data");

            let scores: HTMLElement = document.getElementById("score");
            document.getElementById("score").innerHTML = "";

            for (let i: number = 0; i < 10; i++) {
                let div: HTMLDivElement = document.createElement("div");
                scores.appendChild(div);
                div.innerHTML = data[i].name + " :   ";
                div.innerHTML += data[i].highscore;
            }
        }
    }


    function init(): void {
        objects = [];
        snowballs = [];
        children = [];
        highscore = 0;

        gameState = "running";
        window.clearTimeout(60000);
        window.setTimeout(endGame, 60000);
        document.getElementById("beschreibung").style.display = "none";
        document.getElementById("endScreen").style.display = "none";
        document.getElementsByTagName("canvas")[0].style.display = "initial";
        document.getElementById("highscore").style.display = "initial";
        document.getElementById("highscore").innerHTML = "";
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", shoot);
        crc = canvas.getContext("2d");

        drawBackground();
        generateSnow();
        generateClouds();
        generateChild();

        imagedata = crc.getImageData(0, 0, canvas.width, canvas.height);

        update();
    }
    
    function shoot(_event: MouseEvent): void {
        let ball: Snowball = new Snowball();

        ball.xP = _event.clientX;
        ball.yP = _event.clientY;

        ball.radius = 50;
        ball.state = "throw";
        snowballs.push(ball);

        console.log("snowball state: " + ball.state, "snowball radius " + ball.radius);
        console.log(ball.xP, ball.yP);
        console.log("snowballs:" + snowballs.length);
    }

    function generateSnow(): void {
        for (let i: number = 0; i < 150; i++) {

            let snowflake: Snow = new Snow();
            objects.push(snowflake);
        }
    }//generateSnow

    function generateClouds(): void {
        cloudOne = new CloudOne();
        cloudTwo = new CloudTwo();
    }//generateClouds


    function generateChild(): void {
        window.clearTimeout(60000);
        window.setTimeout(generateChild, 3000);

        let child: Child = new Child();
        child.state = "ride";
        children.push(child);

    } //generateChild


    function update(): void {
        crc.putImageData(imagedata, 0, 0);

        if (gameState == "running") {
            window.setTimeout(update, 1000 / fps);
        }

        cloudOne.move();
        cloudOne.draw();
        cloudTwo.move();
        cloudTwo.draw();

        for (let i: number = 0; i < children.length; i++) {
            children[i].move();
            children[i].draw();

            if (children[i].state == "hit" && children[i].xP < -10 || children[i].yP > (crc.canvas.height + 10)) {
                children.splice(i, 1);
                console.log("kids: " + children.length);
            }
        }

        for (let i: number = 0; i < objects.length; i++) {
            let object: DrawObject = objects[i];
            object.draw();
            object.move();
        }

        for (let i: number = 0; i < snowballs.length; i++) {
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

                    for (let a: number = 0; a < children.length; a++) {
                        console.log("hallo");
                        if (snowballs[i].hit(children[a].xP, children[a].yP) == true && children[a].state == "ride") {
                            children[a].state = "hit";
                            console.log("hi");
                            highscore += Math.floor(children[a].yD * children[a].xD);
                            console.log(highscore);
                            document.getElementById("highscore").innerHTML = " Your Score: " + highscore.toString();

                        }

                        else if (snowballs[i].hit(children[a].xP, children[a].yP) == true && children[a].state == "pullUp") {
                            children[a].state = "hit";
                            console.log("hi");
                            highscore += Math.floor(children[a].yD * children[a].xD);
                            console.log(highscore);
                            document.getElementById("highscore").innerHTML = " Your Score: " + highscore.toString();
                        }
                    }
                }
            }
        }
    }

    function endGame(): void {

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
 
}//namespace