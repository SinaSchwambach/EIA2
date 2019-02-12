namespace Endabgabe {

    export class Snowball extends DrawObject {
        xD: number;
        yD: number;
        shooting: boolean;
        setTargetX: number;
        setTargetY: number;
        timer: number;

        constructor() {
            super();
            this.xP = 500;
            this.yP = 500;
            
           
    //        this.move();
            this.draw();
        }



        move(): void {
            this.xP += this.setTargetX ;
            this.yP += this.setTargetY ;

        }




        draw(): void {
            crc.beginPath();
            crc.arc(this.xP, this.yP, 7, 0, 2 * Math.PI);
            crc.fillStyle = "#FFFFFF";
            crc.fill();
            crc.lineWidth = .3;
            crc.strokeStyle = "black";
            crc.stroke();
        }
    }
}