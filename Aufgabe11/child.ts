namespace Inheritance {
     export class Child extends MovingObject {
        dx: number;
        dy: number;
        colorBody: string;
        md: boolean;

        constructor() {
            super();
            this.x = Math.random() * 75 + 100;
            this.y = Math.random() * 75 + 400;
            this.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }//constructor

        move(): void {
            if (this.md == true)
                this.moveDown();

            else {
                this.moveUp();
            }//else
        }//if

        moveDown(): void {
            this.dx = 6;
            this.dy = 3;

            this.x += this.dx;
            this.y += this.dy;

            if (this.x < 10) {
                this.md = false;
            }//if
        }//moveDown

        moveUp(): void {

            this.x = Math.random() * (-6);
            this.y = Math.random() * (-3);

            this.x += this.dx;
            this.y += this.dy;

            if (this.x > 200) {
                this.md = true;
            }//if
            this.draw();
        }//moveUp

        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(this.x - 20, this.y - 5, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = this.colorBody;
            crc2.fillRect(this.x - 25, this.y + 2, 10, 20);
            crc2.stroke();
            crc2.fill();

            //Schlitten
            crc2.beginPath();
            crc2.moveTo(this.x - 37, this.y + 25);
            crc2.lineTo(this.x - 10, this.y + 42);
            crc2.lineTo(this.x - 6, this.y + 43);
            crc2.lineWidth = 1;
            crc2.lineCap = "round";
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fill();
        }
    }
}
    