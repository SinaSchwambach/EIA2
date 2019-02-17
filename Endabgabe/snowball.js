var Endabgabe;
(function (Endabgabe) {
    class Snowball extends Endabgabe.DrawObject {
        draw() {
            if (this.state == "throw") {
                Endabgabe.crc.fillStyle = "#ffffff";
                Endabgabe.crc.strokeStyle = "#000000";
                Endabgabe.crc.beginPath();
                Endabgabe.crc.arc(this.xP, this.yP, this.radius, 0, 2 * Math.PI);
                Endabgabe.crc.fill();
                Endabgabe.crc.stroke();
            }
        }
        move() {
            if (this.radius > 14) {
                this.radius -= 2;
            }
            else {
                this.radius = 0;
            }
        }
        hit(_xP, _yP) {
            Endabgabe.crc.lineWidth = 50;
            Endabgabe.crc.beginPath();
            Endabgabe.crc.arc(_xP - 20, _yP - 5, 6, 0, 2 * Math.PI);
            Endabgabe.crc.fill();
            Endabgabe.crc.beginPath();
            Endabgabe.crc.fillRect(_xP - 25, _yP + 2, 10, 20);
            Endabgabe.crc.stroke();
            Endabgabe.crc.fill();
            //Schlitten
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(_xP - 37, _yP + 25);
            Endabgabe.crc.lineTo(_xP - 10, _yP + 42);
            Endabgabe.crc.lineTo(_xP - 6, _yP + 43);
            Endabgabe.crc.lineWidth = 1;
            Endabgabe.crc.lineCap = "round";
            Endabgabe.crc.stroke();
            Endabgabe.crc.fill();
            Endabgabe.crc.closePath();
            console.log(_xP);
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(_xP, _yP);
            Endabgabe.crc.arc(_xP, _yP, 35, 0, 2 * Math.PI);
            Endabgabe.crc.closePath();
            if (Endabgabe.crc.isPointInPath(this.xP, this.yP)) {
                console.log("win");
                return true;
            }
            else {
                console.log("fail");
                return false;
            }
        }
    }
    Endabgabe.Snowball = Snowball;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=snowball.js.map