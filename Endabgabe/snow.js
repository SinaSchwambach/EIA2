var Endabgabe;
(function (Endabgabe) {
    class Snow extends Endabgabe.DrawObject {
        constructor() {
            super();
            this.xP = Math.random() * 1000;
            this.yP = Math.random() * 550;
        }
        move() {
            this.yD = 5;
            this.xD = Math.random() * 0;
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.yP > 700) {
                this.yP = 0;
            }
            this.draw();
        }
        draw() {
            Endabgabe.crc.beginPath();
            Endabgabe.crc.arc(this.xP, this.yP, 3, 0, 2 * Math.PI);
            Endabgabe.crc.fillStyle = "#FFFFFF";
            Endabgabe.crc.fill();
            Endabgabe.crc.lineWidth = .3;
            Endabgabe.crc.strokeStyle = "#707070";
            Endabgabe.crc.stroke();
        }
    }
    Endabgabe.Snow = Snow;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=snow.js.map