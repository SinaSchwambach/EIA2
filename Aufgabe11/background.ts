namespace Inheritance {
     export function drawBackground(): void {

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
        for (let i: number = 0; i < 15; i++) {
            let x: number = Math.floor(Math.random() * crc2.canvas.width);
            let y: number = Math.floor(Math.random() * (310 - 410) + crc2.canvas.height);
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

    }