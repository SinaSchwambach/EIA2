var Endabgabe;
(function (Endabgabe) {
    function drawBackground() {
        //Sky
        Endabgabe.crc.fillStyle = "#00bfff";
        Endabgabe.crc.fillRect(0, 0, 1000, 650);
        Endabgabe.crc.fill();
        //Hill
        Endabgabe.crc.beginPath();
        Endabgabe.crc.moveTo(0, 0);
        Endabgabe.crc.lineTo(1000, 300);
        Endabgabe.crc.lineTo(1000, 800);
        Endabgabe.crc.lineTo(0, 900);
        Endabgabe.crc.lineTo(0, 900);
        Endabgabe.crc.closePath();
        Endabgabe.crc.fillStyle = "#FFFFFF";
        Endabgabe.crc.fill();
        //Sun
        let x = 900;
        let y = 100;
        let radius = 50;
        let startAngle = 0;
        let endAngle = 2 * Math.PI;
        Endabgabe.crc.moveTo(40, 40);
        Endabgabe.crc.beginPath();
        Endabgabe.crc.arc(x, y, radius, startAngle, endAngle, true);
        Endabgabe.crc.fillStyle = "#ffd700";
        Endabgabe.crc.fill();
        //Tree
        for (let i = 0; i < 15; i++) {
            let x = Math.floor(Math.random() * Endabgabe.crc.canvas.width);
            let y = Math.floor(Math.random() * (200 - 450) + Endabgabe.crc.canvas.height);
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(x, y - 40);
            Endabgabe.crc.lineTo(x - 10, y);
            Endabgabe.crc.lineTo(x + 10, y);
            Endabgabe.crc.closePath();
            Endabgabe.crc.fillStyle = "#008000";
            Endabgabe.crc.strokeStyle = "#008000";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
        }
    }
    Endabgabe.drawBackground = drawBackground;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Background.js.map