var Animation;
(function (Animation) {
    class Background {
        draw() {
            //Sky
            Animation.crc2.fillStyle = "#00bfff";
            Animation.crc2.fillRect(0, 0, Animation.crc2.canvas.width, 110);
            Animation.crc2.beginPath();
            Animation.crc2.moveTo(0, 110);
            Animation.crc2.lineTo(0, 260);
            Animation.crc2.lineTo(270, 110);
            Animation.crc2.lineTo(0, 110);
            Animation.crc2.closePath();
            Animation.crc2.fill();
            //Cloud1    
            Animation.crc2.beginPath();
            Animation.crc2.moveTo(100, 100);
            Animation.crc2.arc(95, 100, 12, 0, 2 * Math.PI);
            Animation.crc2.arc(110, 100, 12, 0, 2 * Math.PI);
            Animation.crc2.arc(87, 100, 12, 0, 2 * Math.PI);
            Animation.crc2.arc(100, 95, 12, 0, 2 * Math.PI);
            Animation.crc2.fillStyle = "#ffffff";
            Animation.crc2.fill();
            //Cloud2
            Animation.crc2.beginPath();
            Animation.crc2.moveTo(235, 55);
            Animation.crc2.arc(235, 55, 10, 0, 2 * Math.PI);
            Animation.crc2.arc(228, 48, 10, 0, 2 * Math.PI);
            Animation.crc2.arc(242, 50, 10, 0, 2 * Math.PI);
            Animation.crc2.arc(230, 59, 8, 0, 2 * Math.PI);
            Animation.crc2.arc(220, 57, 10, 0, 2 * Math.PI);
            Animation.crc2.fillStyle = "#ffffff";
            Animation.crc2.fill();
            //Cloud 3
            Animation.crc2.beginPath();
            Animation.crc2.moveTo(10, 170);
            Animation.crc2.arc(10, 170, 10, 0, 2 * Math.PI);
            Animation.crc2.arc(17, 163, 10, 0, 2 * Math.PI);
            Animation.crc2.arc(17, 177, 10, 0, 2 * Math.PI);
            Animation.crc2.arc(27, 163, 10, 0, 2 * Math.PI);
            Animation.crc2.arc(27, 177, 10, 0, 2 * Math.PI);
            Animation.crc2.moveTo(34, 170);
            Animation.crc2.arc(34, 170, 10, 0, 2 * Math.PI);
            Animation.crc2.fillStyle = "#ffffff";
            Animation.crc2.fill();
            //Cloud4
            Animation.crc2.beginPath();
            Animation.crc2.moveTo(170, 15);
            Animation.crc2.arc(170, 15, 10, 0, 2 * Math.PI);
            Animation.crc2.arc(165, 20, 10, 0, 2 * Math.PI);
            Animation.crc2.arc(175, 18, 10, 0, 2 * Math.PI);
            Animation.crc2.arc(178, 17, 10, 0, 2 * Math.PI);
            Animation.crc2.arc(180, 22, 10, 0, 2 * Math.PI);
            Animation.crc2.moveTo(180, 22);
            Animation.crc2.arc(185, 18, 8, 0, 2 * Math.PI);
            Animation.crc2.fillStyle = "#ffffff";
            Animation.crc2.fill();
            //Hill
            Animation.crc2.lineWidth = 1;
            Animation.crc2.beginPath();
            Animation.crc2.moveTo(270, 110);
            Animation.crc2.lineTo(0, 260);
            Animation.crc2.closePath();
            Animation.crc2.stroke();
            //Sun
            let x = 40;
            let y = 40;
            let radius = 20;
            let startAngle = 0;
            let endAngle = 2 * Math.PI;
            Animation.crc2.moveTo(40, 40);
            Animation.crc2.beginPath();
            Animation.crc2.arc(x, y, radius, startAngle, endAngle, true);
            Animation.crc2.fillStyle = "#ffd700";
            Animation.crc2.fill();
        }
    }
    Animation.Background = Background;
    class Snowflake {
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
        draw() {
            Animation.crc2.beginPath();
            Animation.crc2.moveTo(this.x, this.y - 40);
            Animation.crc2.lineTo(this.x - 10, this.y);
            Animation.crc2.lineTo(this.x + 10, this.y);
            Animation.crc2.closePath();
            Animation.crc2.fillStyle = "#008000";
            Animation.crc2.strokeStyle = "#008000";
            Animation.crc2.fill();
            Animation.crc2.stroke();
        }
    }
    Animation.Snowflake = Snowflake;
    class Child1 {
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
        draw() {
            Animation.crc2.moveTo(140, 255);
            Animation.crc2.beginPath();
            Animation.crc2.arc(140, 255, 3, 0, 2 * Math.PI);
            Animation.crc2.lineTo(140, 259);
            Animation.crc2.lineTo(135, 263);
            Animation.crc2.moveTo(140, 259);
            Animation.crc2.lineTo(145, 255);
            Animation.crc2.moveTo(140, 259);
            Animation.crc2.lineTo(140, 265);
            Animation.crc2.lineTo(135, 270);
            Animation.crc2.moveTo(140, 265);
            Animation.crc2.lineTo(145, 270);
            Animation.crc2.closePath();
            Animation.crc2.fillStyle = "#000000";
            Animation.crc2.strokeStyle = "#000000";
            Animation.crc2.stroke();
            Animation.crc2.fill();
        }
    }
    Animation.Child1 = Child1;
    class Sleigh1 {
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
        draw() {
            Animation.crc2.moveTo(135, 263);
            Animation.crc2.beginPath();
            Animation.crc2.lineTo(130, 265);
            Animation.crc2.lineTo(112, 276);
            Animation.crc2.moveTo(125, 268);
            Animation.crc2.lineTo(125, 276);
            Animation.crc2.moveTo(117, 273);
            Animation.crc2.lineTo(117, 280);
            Animation.crc2.moveTo(130, 273);
            Animation.crc2.lineTo(112, 283);
            Animation.crc2.closePath();
            Animation.crc2.fillStyle = "#000000";
            Animation.crc2.strokeStyle = "#000000";
            Animation.crc2.stroke();
            Animation.crc2.fill();
        }
    }
    Animation.Sleigh1 = Sleigh1;
    class Child2 {
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
        draw() {
            Animation.crc2.moveTo(215, 185);
            Animation.crc2.beginPath();
            Animation.crc2.arc(215, 185, 3, 0, 2 * Math.PI);
            Animation.crc2.moveTo(215, 185);
            Animation.crc2.lineTo(215, 196);
            Animation.crc2.moveTo(215, 196);
            Animation.crc2.lineTo(210, 200);
            Animation.crc2.moveTo(215, 190);
            Animation.crc2.lineTo(210, 192);
            Animation.crc2.closePath();
            Animation.crc2.fillStyle = "#000000";
            Animation.crc2.strokeStyle = "#000000";
            Animation.crc2.stroke();
            Animation.crc2.fill();
        }
    }
    Animation.Child2 = Child2;
    class Sleigh2 {
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
        draw() {
            Animation.crc2.moveTo(205, 205);
            Animation.crc2.beginPath();
            Animation.crc2.lineTo(205, 205);
            Animation.crc2.lineTo(220, 195);
            Animation.crc2.moveTo(211, 202);
            Animation.crc2.lineTo(211, 208);
            Animation.crc2.moveTo(217, 198);
            Animation.crc2.lineTo(217, 204);
            Animation.crc2.moveTo(222, 200);
            Animation.crc2.lineTo(205, 210);
            Animation.crc2.fillStyle = "#000000";
            Animation.crc2.strokeStyle = "#000000";
            Animation.crc2.stroke();
            Animation.crc2.fill();
        }
    }
    Animation.Sleigh2 = Sleigh2;
})(Animation || (Animation = {}));
//# sourceMappingURL=animation.js.map