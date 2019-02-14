var Endabgabe;
(function (Endabgabe) {
    class Snowball extends Endabgabe.DrawObject {
        draw() {
            if (this.state == "throw") {
                this.throwSnowball();
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
        throwSnowball() {
            Endabgabe.crc.fillStyle = "#ffffff";
            Endabgabe.crc.strokeStyle = "#000000";
            Endabgabe.crc.beginPath();
            Endabgabe.crc.arc(this.xP, this.yP, this.radius, 0, 2 * Math.PI);
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
        }
        hit(_xP, _yP) {
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(_xP, _yP);
            Endabgabe.crc.lineTo(_xP - 7, _yP + 2);
            Endabgabe.crc.moveTo(_xP, _yP);
            Endabgabe.crc.lineTo(_xP - 6, _yP + 4);
            Endabgabe.crc.moveTo(_xP, _yP);
            Endabgabe.crc.lineTo(_xP, _yP - 15);
            Endabgabe.crc.arc(_xP, _yP - 15, 15, 0, 2 * Math.PI);
            Endabgabe.crc.moveTo(_xP, _yP - 10);
            Endabgabe.crc.lineTo(_xP - 6, _yP + 2);
            Endabgabe.crc.moveTo(_xP, _yP - 12);
            Endabgabe.crc.lineTo(_xP - 7, _yP - 2);
            Endabgabe.crc.moveTo(_xP + 8, _yP + 5);
            Endabgabe.crc.lineTo(_xP - 10, _yP + 7);
            Endabgabe.crc.moveTo(_xP + 4, _yP + 6);
            Endabgabe.crc.lineTo(_xP + 3, _yP + 12);
            Endabgabe.crc.moveTo(_xP - 6, _yP + 7);
            Endabgabe.crc.lineTo(_xP - 8, _yP + 14);
            Endabgabe.crc.moveTo(_xP + 8, _yP + 12);
            Endabgabe.crc.lineTo(_xP - 10, _yP + 15);
            Endabgabe.crc.closePath();
            console.log("hi");
            if (Endabgabe.crc.isPointInPath(this.xP, this.yP)) {
                console.log("win!");
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