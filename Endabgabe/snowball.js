var Endabgabe;
(function (Endabgabe) {
    class Snowball extends Endabgabe.DrawObject {
        constructor() {
            super();
            this.xP = 500;
            this.yP = 500;
            //        this.move();
            this.draw();
        }
        move() {
            this.xP += this.setTargetX;
            this.yP += this.setTargetY;
        }
        draw() {
            Endabgabe.crc.beginPath();
            Endabgabe.crc.arc(this.xP, this.yP, 7, 0, 2 * Math.PI);
            Endabgabe.crc.fillStyle = "#FFFFFF";
            Endabgabe.crc.fill();
            Endabgabe.crc.lineWidth = .3;
            Endabgabe.crc.strokeStyle = "black";
            Endabgabe.crc.stroke();
        }
    }
    Endabgabe.Snowball = Snowball;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=snowball.js.map