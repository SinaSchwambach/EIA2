namespace Animation {
    export class Background {
        draw(): void {
            //Sky
            crc2.fillStyle = "#00bfff";
            crc2.fillRect(0, 0, crc2.canvas.width, 110);

            crc2.beginPath();
            crc2.moveTo(0, 110);
            crc2.lineTo(0, 260);
            crc2.lineTo(270, 110);
            crc2.lineTo(0, 110);
            crc2.closePath();

            crc2.fill();

            //Cloud1    
            crc2.beginPath();
            crc2.moveTo(100, 100);
            crc2.arc(95, 100, 12, 0, 2 * Math.PI);
            crc2.arc(110, 100, 12, 0, 2 * Math.PI);
            crc2.arc(87, 100, 12, 0, 2 * Math.PI);
            crc2.arc(100, 95, 12, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            //Cloud2
            crc2.beginPath();
            crc2.moveTo(235, 55);
            crc2.arc(235, 55, 10, 0, 2 * Math.PI);
            crc2.arc(228, 48, 10, 0, 2 * Math.PI);
            crc2.arc(242, 50, 10, 0, 2 * Math.PI);
            crc2.arc(230, 59, 8, 0, 2 * Math.PI);
            crc2.arc(220, 57, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            //Cloud 3
            crc2.beginPath();
            crc2.moveTo(10, 170);
            crc2.arc(10, 170, 10, 0, 2 * Math.PI);
            crc2.arc(17, 163, 10, 0, 2 * Math.PI);
            crc2.arc(17, 177, 10, 0, 2 * Math.PI);
            crc2.arc(27, 163, 10, 0, 2 * Math.PI);
            crc2.arc(27, 177, 10, 0, 2 * Math.PI);
            crc2.moveTo(34, 170);
            crc2.arc(34, 170, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            //Cloud4
            crc2.beginPath();
            crc2.moveTo(170, 15);
            crc2.arc(170, 15, 10, 0, 2 * Math.PI);
            crc2.arc(165, 20, 10, 0, 2 * Math.PI);
            crc2.arc(175, 18, 10, 0, 2 * Math.PI);
            crc2.arc(178, 17, 10, 0, 2 * Math.PI);
            crc2.arc(180, 22, 10, 0, 2 * Math.PI);
            crc2.moveTo(180, 22);
            crc2.arc(185, 18, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            //Hill
            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.moveTo(270, 110);
            crc2.lineTo(0, 260);
            crc2.closePath();

            crc2.stroke();

            //Sun
            let x: number = 40;
            let y: number = 40;
            let radius: number = 20;
            let startAngle: number = 0;
            let endAngle: number = 2 * Math.PI;

            crc2.moveTo(40, 40);
            crc2.beginPath();
            crc2.arc(x, y, radius, startAngle, endAngle, true);

            crc2.fillStyle = "#ffd700";
            crc2.fill();

            //Tree
            crc2.beginPath();
            crc2.moveTo(x, y - 40);
            crc2.lineTo(x - 10, y);
            crc2.lineTo(x + 10, y);
            crc2.closePath();

            crc2.fillStyle = "#008000";
            crc2.strokeStyle = "#008000";
            crc2.fill();
            crc2.stroke();
        }
    }
    export class Snowflake {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
        }
        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 40);
            crc2.lineTo(this.x - 10, this.y);
            crc2.lineTo(this.x + 10, this.y);
            crc2.closePath();

            crc2.fillStyle = "#008000";
            crc2.strokeStyle = "#008000";
            crc2.fill();
            crc2.stroke();
        }
    }

    export class Child1 {
        x: number;
        y: number;
        dx: number;
        dy: number;

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
        }

        draw(): void {
            crc2.moveTo(140, 255);
            crc2.beginPath();
            crc2.arc(140, 255, 3, 0, 2 * Math.PI);
            crc2.lineTo(140, 259);
            crc2.lineTo(135, 263);
            crc2.moveTo(140, 259);
            crc2.lineTo(145, 255);
            crc2.moveTo(140, 259);
            crc2.lineTo(140, 265);
            crc2.lineTo(135, 270);
            crc2.moveTo(140, 265);
            crc2.lineTo(145, 270);
            crc2.closePath();

            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fill();
        }
    }


    export class Sleigh1 {
        x: number;
        y: number;
        dx: number;
        dy: number;

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
        }

        draw(): void {
            crc2.moveTo(135, 263);
            crc2.beginPath();
            crc2.lineTo(130, 265);
            crc2.lineTo(112, 276);
            crc2.moveTo(125, 268);
            crc2.lineTo(125, 276);
            crc2.moveTo(117, 273);
            crc2.lineTo(117, 280);
            crc2.moveTo(130, 273);
            crc2.lineTo(112, 283);
            crc2.closePath();

            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fill();
        }
    }
    export class Child2 {
        x: number;
        y: number;
        dx: number;
        dy: number;

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
        }

        draw(): void {
            crc2.moveTo(215, 185);
            crc2.beginPath();
            crc2.arc(215, 185, 3, 0, 2 * Math.PI);
            crc2.moveTo(215, 185);
            crc2.lineTo(215, 196);
            crc2.moveTo(215, 196);
            crc2.lineTo(210, 200);
            crc2.moveTo(215, 190);
            crc2.lineTo(210, 192);
            crc2.closePath();

            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fill();
        }
    }
    export class Sleigh2 {
        x: number;
        y: number;
        dx: number;
        dy: number;

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
        }

        draw(): void {
            crc2.moveTo(205, 205);
            crc2.beginPath();
            crc2.lineTo(205, 205);
            crc2.lineTo(220, 195);
            crc2.moveTo(211, 202);
            crc2.lineTo(211, 208);
            crc2.moveTo(217, 198);
            crc2.lineTo(217, 204);
            crc2.moveTo(222, 200);
            crc2.lineTo(205, 210);

            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fill();
        }
    }
}