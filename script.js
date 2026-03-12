const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letras = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
const colunas = canvas.width / fontSize;

const gotas = [];

for(let x = 0; x < colunas; x++){
gotas[x] = 1;
}

function desenhar(){

ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "rgba(255,255,255,0.25)";
ctx.font = fontSize + "px monospace";

for(let i = 0; i < gotas.length; i++){

const texto = letras.charAt(Math.floor(Math.random()*letras.length));

ctx.fillText(texto, i*fontSize, gotas[i]*fontSize);

if(gotas[i]*fontSize > canvas.height && Math.random()>0.975){
gotas[i]=0;
}

gotas[i]++;
}

}

setInterval(desenhar,33);
