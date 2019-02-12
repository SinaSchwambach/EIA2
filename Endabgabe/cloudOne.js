var Endabgabe;
(function (Endabgabe) {
    class CloudOne extends Endabgabe.DrawObject {
        constructor() {
            super();
            this.xP = 50;
            this.yP = 100;
        }
        move() {
            if (this.xP > 1000) {
                this.xP = 0;
            }
            this.xP += 1;
            this.draw();
        }
        draw() {
            Endabgabe.crc.beginPath();
            Endabgabe.crc.arc(this.xP - 50, this.yP, 45, 0, 2 * Math.PI);
            Endabgabe.crc.arc(this.xP, this.yP, 50, 0, 2 * Math.PI);
            Endabgabe.crc.arc(this.xP + 40, this.yP, 40, 0, 2 * Math.PI);
            Endabgabe.crc.fillStyle = "#FFFFFF";
            Endabgabe.crc.fill();
        }
    }
    Endabgabe.CloudOne = CloudOne;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=cloudOne.js.map