const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 2700;
canvas.height = 1500;

//criando degrade para o fundo
degrade = ctx.createLinearGradient(0, 0, screen.width * 2, canvas.height * 2);
degrade.addColorStop(0, '#000a19');
degrade.addColorStop(1, '#0047b3');
//colorindo o fundo
ctx.fillStyle = degrade;
ctx.fillRect(0,0, canvas.width, canvas.height);

//Arvores 1

ctx.beginPath();
ctx.moveTo(0, 1000);
ctx.arc(100, 1100, 120, 0, 2 * Math.PI);
ctx.arc(250, 1100, 120, 0, 2 * Math.PI);
ctx.arc(400, 1100, 120, 0, 2 * Math.PI);
ctx.arc(550, 1100, 120, 0, 2 * Math.PI);
ctx.arc(700, 1100, 120, 0, 2 * Math.PI);
ctx.arc(850, 1100, 120, 0, 2 * Math.PI);
ctx.arc(1000, 1100, 120, 0, 2 * Math.PI);
ctx.arc(1150, 1100, 120, 0, 2 * Math.PI);
ctx.arc(1300, 1100, 120, 0, 2 * Math.PI);
ctx.arc(1450, 1100, 120, 0, 2 * Math.PI);
ctx.arc(1600, 1100, 120, 0, 2 * Math.PI);
ctx.arc(1750, 1100, 120, 0, 2 * Math.PI);
ctx.arc(1900, 1100, 120, 0, 2 * Math.PI);
ctx.arc(2050, 1100, 120, 0, 2 * Math.PI);
ctx.arc(2200, 1100, 120, 0, 2 * Math.PI);
ctx.arc(2350, 1100, 120, 0, 2 * Math.PI);
ctx.arc(2500, 1100, 120, 0, 2 * Math.PI);
ctx.arc(2650, 1100, 120, 0, 2 * Math.PI);
ctx.lineTo(2770, 2000);
ctx.lineTo(0, 2200);
ctx.lineTo(0,1000);
ctx.fillStyle = "#034149";
ctx.fill();
ctx.closePath();


//arvores 2
ctx.beginPath();
ctx.moveTo(0, 1200);
ctx.arc(100, 1200, 100, 0, 2 * Math.PI);
ctx.arc(250, 1200, 100, 0, 2 * Math.PI);
ctx.arc(400, 1200, 100, 0, 2 * Math.PI);
ctx.arc(550, 1200, 100, 0, 2 * Math.PI);
ctx.arc(700, 1200, 100, 0, 2 * Math.PI);
ctx.arc(850, 1200, 100, 0, 2 * Math.PI);
ctx.arc(1000, 1200, 100, 0, 2 * Math.PI);
ctx.arc(1150, 1200, 100, 0, 2 * Math.PI);
ctx.arc(1300, 1200, 100, 0, 2 * Math.PI);
ctx.arc(1450, 1200, 100, 0, 2 * Math.PI);
ctx.arc(1600, 1200, 100, 0, 2 * Math.PI);
ctx.arc(1750, 1200, 100, 0, 2 * Math.PI);
ctx.arc(1900, 1200, 100, 0, 2 * Math.PI);
ctx.arc(2050, 1200, 100, 0, 2 * Math.PI);
ctx.arc(2200, 1200, 100, 0, 2 * Math.PI);
ctx.arc(2350, 1200, 100, 0, 2 * Math.PI);
ctx.arc(2500, 1200, 100, 0, 2 * Math.PI);
ctx.arc(2650, 1200, 100, 0, 2 * Math.PI);
ctx.fillStyle = "#033025";
ctx.fill();
ctx.closePath();


//arvores 3
ctx.beginPath();
ctx.moveTo(0, 1300);
ctx.arc(100, 1300, 100, 0, 2 * Math.PI);
ctx.arc(250, 1300, 100, 0, 2 * Math.PI);
ctx.arc(400, 1300, 100, 0, 2 * Math.PI);
ctx.arc(550, 1300, 100, 0, 2 * Math.PI);
ctx.arc(700, 1300, 100, 0, 2 * Math.PI);
ctx.arc(850, 1300, 100, 0, 2 * Math.PI);
ctx.arc(1000, 1300, 100, 0, 2 * Math.PI);
ctx.arc(1150, 1300, 100, 0, 2 * Math.PI);
ctx.arc(1300, 1300, 100, 0, 2 * Math.PI);
ctx.arc(1450, 1300, 100, 0, 2 * Math.PI);
ctx.arc(1600, 1300, 100, 0, 2 * Math.PI);
ctx.arc(1750, 1300, 100, 0, 2 * Math.PI);
ctx.arc(1900, 1300, 100, 0, 2 * Math.PI);
ctx.arc(2050, 1300, 100, 0, 2 * Math.PI);
ctx.arc(2200, 1300, 100, 0, 2 * Math.PI);
ctx.arc(2350, 1300, 100, 0, 2 * Math.PI);
ctx.arc(2500, 1300, 100, 0, 2 * Math.PI);
ctx.arc(2650, 1300, 100, 0, 2 * Math.PI);
ctx.lineTo(2770, 2000);
ctx.lineTo(0, 2200);
ctx.lineTo(0,1000);
ctx.fillStyle = "#011819";
ctx.fill();

ctx.closePath();

//Pescoço
ctx.beginPath();
ctx.moveTo(450,1000);
ctx.lineTo(0, 1350);
ctx.lineTo(0, 700);
ctx.lineTo(50, 550);
ctx.strokeStyle = "white";
ctx.stroke();
ctx.fillStyle = "#080808";
ctx.fill();


ctx.closePath();

//inicio do lobo
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


//dentes superiores
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

//dentes inferiores
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
ctx.quadraticCurveTo(480,1000,130,1200);
ctx.quadraticCurveTo(300,950,270,900);

ctx.quadraticCurveTo(250, 1000, 50, 1100);
ctx.quadraticCurveTo(150, 880, 100, 850);

ctx.quadraticCurveTo(55, 850, 0, 900);
ctx.lineTo(0, 650)
ctx.quadraticCurveTo(0, 630, 50, 580);


ctx.fillStyle = "black";
ctx.fill();
ctx.strokeStyle = "white";
ctx.stroke();
ctx.closePath();

//Olho
ctx.beginPath();
ctx.moveTo(450,550);
ctx.bezierCurveTo(470,500,630,500,650,600);
ctx.bezierCurveTo(500, 675, 480, 525, 450, 550);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

//lua
ctx.beginPath()
ctx.moveTo(2500,500);
ctx.arc(2500, 300, 220, 0, 2 * Math.PI);
ctx.fillStyle = '#e6f1ff';
ctx.fill();
ctx.closePath();

//montanha
ctx.beginPath()
ctx.moveTo(1200, 1500);
ctx.lineTo(1500, 1000);
ctx.lineTo(1800, 1000);
ctx.lineTo(1950, 800);
ctx.lineTo(2000, 700);
ctx.lineTo(3000, 0);
ctx.lineTo(3000, 1500);
ctx.lineTo(1200,1500);

ctx.fillStyle = '#000b19';
ctx.fill();
ctx.closePath();