const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 5000;
canvas.height = 5000;

ctx.beginPath();
ctx.moveTo(50,600);
ctx.lineTo(50,200);
ctx.lineTo(250, 450);
ctx.lineTo(250, 150);
ctx.lineTo(450,450);
ctx.lineTo(700,450);
ctx.lineTo(800,600);
ctx.lineTo(1250,600);
ctx.bezierCurveTo(1350,650,1350,750,1250,800);

ctx.lineTo(1200,750);
ctx.lineTo(1200,800);
ctx.lineTo(1150,750);
ctx.lineTo(1150,800);

ctx.lineTo(1100,750);
ctx.lineTo(1100,800);
ctx.lineTo(1050,750);
ctx.lineTo(1050,800);

ctx.lineTo(1000,750);
ctx.lineTo(1000,800);
ctx.lineTo(950,750);
ctx.lineTo(950,800);

ctx.lineTo(900,750);
ctx.lineTo(900,800);
ctx.lineTo(850,750);
ctx.lineTo(850,800);

ctx.lineTo(800,750);

ctx.bezierCurveTo(750,830,750,870,800,900);

ctx.lineTo(800,850);
ctx.lineTo(850,900);
ctx.lineTo(850,850);
ctx.lineTo(900,900);

ctx.lineTo(900,850);
ctx.lineTo(950,900);
ctx.lineTo(950,850);
ctx.lineTo(1000,900);

ctx.lineTo(1000,850);
ctx.lineTo(1050,900);
ctx.lineTo(1050,850);
ctx.lineTo(1100,900);

ctx.lineTo(1100,850);
ctx.lineTo(1150,900);
ctx.lineTo(1150,850);
ctx.lineTo(1200,900);

ctx.lineTo(1200,850);
ctx.lineTo(1250,900);

ctx.quadraticCurveTo(1250,1000,1200,1000);

ctx.lineTo(450,1000);

//pelo do queixo
ctx.quadraticCurveTo(330,950,250,1100);
ctx.quadraticCurveTo(250,900,300,900);

ctx.quadraticCurveTo(200,800,175,1000);






ctx.stroke();