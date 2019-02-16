var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", init);
    // let serverAddress: string = "http://localhost:8100";
    let serverAddress = " https://eia2ws18.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
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
    function sortHighscore(_a, _b) {
        let returnNumber;
        if (_a.highscore > _b.highscore) {
            returnNumber = -1;
        }
        else if (_a.highscore < _b.highscore) {
            returnNumber = 1;
        }
        else {
            returnNumber = 0;
        }
        return returnNumber;
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementById("score");
            let data = JSON.parse(xhr.response);
            data.sort(sortHighscore);
            let emptyString;
            for (let i; i < 10; i++) {
                let place = 1 + i;
                emptyString += place + ". " + data[i].name + "     " + data[i].highscore + "<br>";
            }
            output.innerHTML = emptyString;
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=DatabaseClient.js.map