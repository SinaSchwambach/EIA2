var Endabgabe;
(function (Endabgabe) {
    class CloudTwo extends Endabgabe.DrawObject {
        constructor() {
            super();
            this.xP = 100;
            this.yP = 50;
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
            Endabgabe.crc.arc(this.xP, this.yP + 150, 45, 0, 2 * Math.PI);
            Endabgabe.crc.arc(this.xP + 40, this.yP + 150, 50, 0, 2 * Math.PI);
            Endabgabe.crc.fillStyle = "#FFFFFF";
            Endabgabe.crc.fill();
        }
    }
    Endabgabe.CloudTwo = CloudTwo;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=cloudTwo.js.map