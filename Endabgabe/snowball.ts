namespace Endabgabe {

    export class Snowball extends DrawObject {
        radius: number;
        state: string;
        timer: number;


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
            crc.lineWidth = 50;
            crc.beginPath();
            crc.arc(_xP - 20, _yP - 5, 6, 0, 2 * Math.PI);
            crc.fill();
            crc.beginPath();
            crc.fillRect(_xP - 25, _yP + 2, 10, 20);
            crc.stroke();
            crc.fill();

            //Schlitten
            crc.beginPath();
            crc.moveTo(_xP - 37, _yP + 25);
            crc.lineTo(_xP - 10, _yP + 42);
            crc.lineTo(_xP - 6, _yP + 43);
            crc.lineWidth = 1;
            crc.lineCap = "round";
            crc.stroke();
            crc.fill();
            crc.closePath();

            console.log(_xP);
            crc.beginPath();
            crc.moveTo(_xP, _yP);
            crc.arc(_xP, _yP, 50, 0, 2 * Math.PI);
            crc.closePath();

            if (crc.isPointInPath(this.xP, this.yP)) {
                console.log("win");
                return true;
            }
            else {
                console.log("fail");
                return false;
            }

        }
    }

}
