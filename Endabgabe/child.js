var Endabgabe;
(function (Endabgabe) {
    class Child extends Endabgabe.DrawObject {
        constructor() {
            super();
            this.xP = Math.random() * 4 - 2;
            this.yP = Math.floor(Math.random() * Endabgabe.crc.canvas.height);
            this.xD = Math.random() * 6 + 1;
            this.yD = Math.random() * 2 + 1.2;
            this.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.getSpeed();
        } //constructor
        move() {
            this.xP += this.xD;
            this.yP += this.yD;
        } //move
        getSpeed() {
            return Math.floor(this.xD * this.yD * 10);
        }
        draw() {
            if (this.state == "hit") {
                Endabgabe.crc.beginPath();
                Endabgabe.crc.moveTo(this.xP - 37, this.yP + 25);
                Endabgabe.crc.lineTo(this.xP - 10, this.yP + 42);
                Endabgabe.crc.lineTo(this.xP - 6, this.yP + 43);
                Endabgabe.crc.lineWidth = 1;
                Endabgabe.crc.lineCap = "round";
                Endabgabe.crc.strokeStyle = "#000000";
                Endabgabe.crc.stroke();
                Endabgabe.crc.fill();
            }
            if (this.state == "ride") {
                Endabgabe.crc.beginPath();
                Endabgabe.crc.fillStyle = "#000000";
                Endabgabe.crc.arc(this.xP - 20, this.yP - 5, 6, 0, 2 * Math.PI);
                Endabgabe.crc.fill();
                Endabgabe.crc.beginPath();
                Endabgabe.crc.fillStyle = this.colorBody;
                Endabgabe.crc.fillRect(this.xP - 25, this.yP + 2, 10, 20);
                Endabgabe.crc.stroke();
                Endabgabe.crc.fill();
                //Schlitten
                Endabgabe.crc.beginPath();
                Endabgabe.crc.moveTo(this.xP - 37, this.yP + 25);
                Endabgabe.crc.lineTo(this.xP - 10, this.yP + 42);
                Endabgabe.crc.lineTo(this.xP - 6, this.yP + 43);
                Endabgabe.crc.lineWidth = 1;
                Endabgabe.crc.lineCap = "round";
                Endabgabe.crc.strokeStyle = "#000000";
                Endabgabe.crc.stroke();
                Endabgabe.crc.fill();
            }
        }
    }
    Endabgabe.Child = Child;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=child.js.map