namespace Inheritance {
    export class Snow extends MovingObject {

        constructor() {
            super();
            this.color = "ffffff";
        }

        draw(): void {
            super.draw();
            crc2.beginPath();
            crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
        }
        move(): void {
            this.y += this.dy;
            if (this.y > crc2.canvas.height + 2) {
                this.y = -1;
            }
        }
    }
}