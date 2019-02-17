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
        } //constructor
        move() {
            if (this.state == "ride") {
                if (this.xP > 1005 || this.yP > Endabgabe.crc.canvas.height) {
                    this.state = "pullUp";
                }
            }
            if (this.state == "pullUp") {
                this.xP -= this.xD;
                this.yP -= this.yD;
            }
            if (this.state == "pullUp" && this.xP < 0) {
                this.state = "ride";
            }
            if (this.state == "ride" || this.state == "hit") {
                this.xP += this.xD;
                this.yP += this.yD;
            }
        }
        draw() {
            if (this.state == "hit") {
                Endabgabe.crc.beginPath();
                Endabgabe.crc.moveTo(this.xP - 32, this.yP + 20);
                Endabgabe.crc.lineTo(this.xP - 5, this.yP + 37);
                Endabgabe.crc.lineTo(this.xP - 1, this.yP + 38);
                Endabgabe.crc.moveTo(this.xP - 15, this.yP + 30);
                Endabgabe.crc.lineTo(this.xP - 20, this.yP + 35);
                Endabgabe.crc.moveTo(this.xP - 22, this.yP + 27);
                Endabgabe.crc.lineTo(this.xP - 27, this.yP + 32);
                Endabgabe.crc.moveTo(this.xP - 37, this.yP + 25);
                Endabgabe.crc.lineTo(this.xP - 10, this.yP + 42);
                Endabgabe.crc.lineTo(this.xP - 6, this.yP + 43);
                Endabgabe.crc.lineWidth = 1;
                Endabgabe.crc.lineCap = "round";
                Endabgabe.crc.strokeStyle = "#000000";
                Endabgabe.crc.stroke();
                Endabgabe.crc.fill();
            }
            if (this.state == "pullUp") {
                Endabgabe.crc.beginPath();
                Endabgabe.crc.fillStyle = "#000000";
                Endabgabe.crc.arc(this.xP - 45, this.yP - 6, 6, 0, 2 * Math.PI);
                Endabgabe.crc.fill();
                Endabgabe.crc.beginPath();
                Endabgabe.crc.fillStyle = this.colorBody;
                Endabgabe.crc.fillRect(this.xP - 50, this.yP + 2, 10, 20);
                Endabgabe.crc.stroke();
                Endabgabe.crc.fill();
                //Schlitten
                Endabgabe.crc.beginPath();
                Endabgabe.crc.moveTo(this.xP - 32, this.yP + 20);
                Endabgabe.crc.lineTo(this.xP - 1, this.yP + 38);
                Endabgabe.crc.moveTo(this.xP - 15, this.yP + 30);
                Endabgabe.crc.lineTo(this.xP - 20, this.yP + 35);
                Endabgabe.crc.moveTo(this.xP - 22, this.yP + 27);
                Endabgabe.crc.lineTo(this.xP - 27, this.yP + 32);
                Endabgabe.crc.moveTo(this.xP - 41, this.yP + 26);
                Endabgabe.crc.lineTo(this.xP - 37, this.yP + 25);
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
                Endabgabe.crc.moveTo(this.xP - 32, this.yP + 20);
                Endabgabe.crc.lineTo(this.xP - 5, this.yP + 37);
                Endabgabe.crc.lineTo(this.xP - 1, this.yP + 38);
                Endabgabe.crc.moveTo(this.xP - 15, this.yP + 30);
                Endabgabe.crc.lineTo(this.xP - 20, this.yP + 35);
                Endabgabe.crc.moveTo(this.xP - 22, this.yP + 27);
                Endabgabe.crc.lineTo(this.xP - 27, this.yP + 32);
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