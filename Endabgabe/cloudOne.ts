namespace Endabgabe {

    export class CloudOne extends DrawObject {
        xD: number;
        yD: number;

        constructor() {
            super();
            this.xP = 50;
            this.yP = 100;
        }

        move(): void {

            if (this.xP > 1000) {
                this.xP = 0;
            }

            this.xP += 1;

            this.draw();
        }

        draw(): void {
            crc.beginPath();
            crc.arc(this.xP - 50, this.yP, 45, 0, 2 * Math.PI);
            crc.arc(this.xP, this.yP, 50, 0, 2 * Math.PI);
            crc.arc(this.xP + 40, this.yP, 40, 0, 2 * Math.PI);
            crc.fillStyle = "#FFFFFF";
            crc.fill();
        }
    }
}