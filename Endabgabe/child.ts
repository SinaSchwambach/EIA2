namespace Endabgabe {

    export class Child extends DrawObject {
        xD: number;
        yD: number;
        colorBody: string;
        next: boolean;

        constructor() {
            super();
            this.xP = Math.random() * 4 - 2;
            this.yP = Math.floor(Math.random() * crc.canvas.height);
            this.xD = Math.random() * 6 + 1;
            this.yD = Math.random() * 2 + 1.2;
            this.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.getSpeed();
        }//constructor

        move(): void {
          

            this.xP += this.xD;
            this.yP += this.yD;

            if (this.yP > 550) {
                this.next == true;

            }//if

            this.draw();
        }//move

        getSpeed(): number {
            return Math.floor(this.xD * this.yD * 10);
        }

        draw(): void {
            crc.beginPath();
            crc.fillStyle = "#000000";
            crc.arc(this.xP - 20, this.yP - 5, 6, 0, 2 * Math.PI);
            crc.fill();
            crc.beginPath();
            crc.fillStyle = this.colorBody;
            crc.fillRect(this.xP - 25, this.yP + 2, 10, 20);
            crc.stroke();
            crc.fill();

            //Schlitten
            crc.beginPath();
            crc.moveTo(this.xP - 37, this.yP + 25);
            crc.lineTo(this.xP - 10, this.yP + 42);
            crc.lineTo(this.xP - 6, this.yP + 43);
            crc.lineWidth = 1;
            crc.lineCap = "round";
            crc.strokeStyle = "#000000";
            crc.stroke();
            crc.fill();
        }
    }
}