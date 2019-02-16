namespace Endabgabe {

    export class Child extends DrawObject {
        xD: number;
        yD: number;
        colorBody: string;
        state: string;
        moved: boolean;

        constructor() {
            super();
            this.xP = Math.random() * 4 - 2;
            this.yP = Math.floor(Math.random() * crc.canvas.height);
            this.xD = Math.random() * 6 + 1;
            this.yD = Math.random() * 2 + 1.2;
            this.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";

        }//constructor

        move(): void {

            if (this.state == "ride") {
                if (this.xP > 1005 || this.yP > crc.canvas.height) {
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

        /*   if (this.state == "pullUp") {
               this.xP -= this.xD;
               this.yP -= this.yD;
 
               if (this.xP < 20) {
                   this.state = "ride";
                   this.xP += this.xD;
                   this.yP += this.yD;
               }*/


        //move

        getSpeed(): number {
            return Math.floor(this.xD * this.yD * 10);
        }

        draw(): void {

            if (this.state == "hit") {
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
            if (this.state == "pullUp") {
                crc.beginPath();
                crc.fillStyle = "#000000";
                crc.arc(this.xP - 20, this.yP - 6, 6, 0, 2 * Math.PI);
                crc.fill();
                crc.beginPath();
                crc.fillStyle = this.colorBody;
                crc.fillRect(this.xP - 25, this.yP + 2, 10, 20);
                crc.stroke();
                crc.fill();


                //Schlitten
                crc.beginPath();
                crc.moveTo(this.xP + 6, this.yP + 25);
                crc.lineTo(this.xP + 10, this.yP + 42);
                crc.lineTo(this.xP + 37, this.yP + 43);
                crc.lineWidth = 1;
                crc.lineCap = "round";
                crc.strokeStyle = "#000000";
                crc.stroke();
                crc.fill();
            }

            if (this.state == "ride") {
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
}