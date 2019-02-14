namespace Endabgabe {

    export class Snowball extends DrawObject {
        radius: number;
        state: string;


        draw(): void {
            if (this.state == "throw") {
                this.throwSnowball();
            }

        }

        move(): void {
            if (this.radius > 14) {
                this.radius -= 2;
            } else { this.radius = 0; }
        }

        throwSnowball(): void {
            crc.fillStyle = "#ffffff";
            crc.strokeStyle = "#000000";
            crc.beginPath();
            crc.arc(this.xP, this.yP, this.radius, 0, 2 * Math.PI);
            crc.fill();
            crc.stroke();

        }

        hit(_xP: number, _yP: number): boolean {

            crc.beginPath();
            crc.moveTo(_xP, _yP);
            crc.lineTo(_xP - 7, _yP + 2);
            crc.moveTo(_xP, _yP);
            crc.lineTo(_xP - 6, _yP + 4);
            crc.moveTo(_xP, _yP);
            crc.lineTo(_xP, _yP - 15);
            crc.arc(_xP, _yP - 15, 15, 0, 2 * Math.PI);
            crc.moveTo(_xP, _yP - 10);
            crc.lineTo(_xP - 6, _yP + 2);
            crc.moveTo(_xP, _yP - 12);
            crc.lineTo(_xP - 7, _yP - 2);
            crc.moveTo(_xP + 8, _yP + 5);
            crc.lineTo(_xP - 10, _yP + 7);
            crc.moveTo(_xP + 4, _yP + 6);
            crc.lineTo(_xP + 3, _yP + 12);
            crc.moveTo(_xP - 6, _yP + 7);
            crc.lineTo(_xP - 8, _yP + 14);
            crc.moveTo(_xP + 8, _yP + 12);
            crc.lineTo(_xP - 10, _yP + 15);
            crc.closePath();

            console.log("hi");

            if (crc.isPointInPath(this.xP, this.yP)) {
                console.log("win!");

                return true;
            }
            else {
                console.log("fail");

                return false;
            }

        }
    }

}
