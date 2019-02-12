namespace Endabgabe {
    export function drawBackground(): void {

        //Sky
        crc.fillStyle = "#00bfff";
        crc.fillRect(0, 0, 1000, 650);
        crc.fill();

        //Hill
        crc.beginPath();
        crc.moveTo(0, 0);
        crc.lineTo(1000, 400);
        crc.lineTo(1000, 800);
        crc.lineTo(0, 900);
        crc.lineTo(0, 900);
        crc.closePath();
        crc.fillStyle = "#FFFFFF";
        crc.fill();



        //Sun
        let x: number = 900;
        let y: number = 100;
        let radius: number = 50;
        let startAngle: number = 0;
        let endAngle: number = 2 * Math.PI;

        crc.moveTo(40, 40);
        crc.beginPath();
        crc.arc(x, y, radius, startAngle, endAngle, true);

        crc.fillStyle = "#ffd700";
        crc.fill();

        //Tree
        for (let i: number = 0; i < 15; i++) {
            let x: number = Math.floor(Math.random() * crc.canvas.width);
            let y: number = Math.floor(Math.random() * (290 - 410) + crc.canvas.height);
            crc.beginPath();
            crc.moveTo(x, y - 40);
            crc.lineTo(x - 10, y);
            crc.lineTo(x + 10, y);
            crc.closePath();

            crc.fillStyle = "#008000";
            crc.strokeStyle = "#008000";
            crc.fill();
            crc.stroke();
        }
    }

}