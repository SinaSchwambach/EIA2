var Inheritance;
(function (Inheritance) {
    class Child extends Inheritance.MovingObject {
        constructor() {
            super();
            this.x = Math.random() * 75 + 100;
            this.y = Math.random() * 75 + 400;
            this.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        } //constructor
        move() {
            if (this.md == true)
                this.moveDown();
            else {
                this.moveUp();
            } //else
        } //if
        moveDown() {
            this.dx = 6;
            this.dy = 3;
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 10) {
                this.md = false;
            } //if
        } //moveDown
        moveUp() {
            this.x = Math.random() * (-6);
            this.y = Math.random() * (-3);
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 200) {
                this.md = true;
            } //if
            this.draw();
        } //moveUp
        draw() {
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "#000000";
            Inheritance.crc2.arc(this.x - 20, this.y - 5, 6, 0, 2 * Math.PI);
            Inheritance.crc2.fill();
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = this.colorBody;
            Inheritance.crc2.fillRect(this.x - 25, this.y + 2, 10, 20);
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
            //Schlitten
            Inheritance.crc2.beginPath();
            Inheritance.crc2.moveTo(this.x - 37, this.y + 25);
            Inheritance.crc2.lineTo(this.x - 10, this.y + 42);
            Inheritance.crc2.lineTo(this.x - 6, this.y + 43);
            Inheritance.crc2.lineWidth = 1;
            Inheritance.crc2.lineCap = "round";
            Inheritance.crc2.strokeStyle = "#000000";
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
        }
    }
    Inheritance.Child = Child;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=child.js.map