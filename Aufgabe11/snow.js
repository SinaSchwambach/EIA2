var Inheritance;
(function (Inheritance) {
    class Snow extends Inheritance.MovingObject {
        constructor() {
            super();
            this.color = "ffffff";
        }
        draw() {
            super.draw();
            Inheritance.crc2.beginPath();
            Inheritance.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            Inheritance.crc2.fill();
            Inheritance.crc2.stroke();
        }
        move() {
            this.y += this.dy;
            if (this.y > Inheritance.crc2.canvas.height + 2) {
                this.y = -1;
            }
        }
    }
    Inheritance.Snow = Snow;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=snow.js.map