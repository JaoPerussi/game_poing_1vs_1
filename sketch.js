//variaveis bolinha
xbolinha  =300;
ybolinha   =200;
dbolinha   =35;
rbolinha    =dbolinha/2;
//variaveis de velocidade bolinha 
xvelocidade  =6;
yvelocidade  =6;
//variaveis raquete
xraquete =5;
yraquete =150;
lraquete = 10;
araquete = 90;
//variaveis raquete oponente 
xraquetei = 585;
yraquetei = 150;
lraquetei = 10;
araquetei = 90;
colidiu=false;
// pontos 
meuPontos = 0;
oponentepontos = 0;
//sons do jogo
let ponto;
let raquetada;
let trilha;

function preload(){
trilha = loadSound("trilha.mp3");
ponto = loadSound("ponto.mp3");
raquetada = loadSound("raquetada.mp3");
}

function setup() {
trilha.loop();
  createCanvas(600, 400);
}

function draw() {
  background(0);
bolinha();
movimentobolinha();
colisaobolinha();
raquete();
movimentoraquete();
//colisaoraquete();
raqueteinimigo();
//movimentoraqueteinimigo();
movimentoraqueteinimigoplayer();
raqueteColissao (xraquete , yraquete);
raqueteColissao (xraquetei , yraquetei);
placar();
somapontos();

function bolinha(){circle(xbolinha, ybolinha, dbolinha)};


function movimentobolinha(){xbolinha += xvelocidade;
ybolinha += yvelocidade
;};


function colisaobolinha(){if(xbolinha  +rbolinha > width || xbolinha  -rbolinha < 0) 
{xvelocidade *=-1};



if(ybolinha  +rbolinha> height || ybolinha -rbolinha< 0)
{yvelocidade *=-1};

 

};                        
}
function raquete(){
  rect(xraquete, yraquete, lraquete, araquete);
}
function movimentoraquete(){
if (keyIsDown(87)){
    yraquete -= 5;}
if (keyIsDown(83)){
    yraquete += 5;}
  };
function raquete(){
  rect(xraquete, yraquete, lraquete, araquete);
}
function colisaoraquete(){
if (xbolinha - rbolinha < xraquete + lraquete
&& ybolinha -rbolinha < yraquete + araquete &&
ybolinha + rbolinha > yraquete){
xvelocidade *= -1;

}
}
function raqueteinimigo(){
rect(xraquetei, yraquetei, lraquetei, araquetei);
}
function movimentoraqueteinimigo(){
(yraquetei = ybolinha);
}
function movimentoraqueteinimigoplayer(){
if (keyIsDown(UP_ARROW)){
    yraquetei -= 5;}
if (keyIsDown(DOWN_ARROW)){
    yraquetei += 5;}
}
function raqueteColissao (x , y){
colidiu = collideRectCircle(x, y, lraquete, araquete, xbolinha, ybolinha, rbolinha);
if(colidiu){
    xvelocidade *= -1;
raquetada.play();
}
}
function placar(){
textAlign(CENTER);
textSize(16)
fill(color (0,102,0))
rect(140, 10, 30, 20, 30);
fill(255)
text (meuPontos, 150, 26)
fill(color (0,102,0))
rect(440, 10, 30, 20, 30);
fill(255)
text (oponentepontos, 450, 26)
fill(color (0,102,0))
}
function somapontos(){
if (xbolinha < 15){
oponentepontos +=1
ponto.play();
}
if (xbolinha > 585){
meuPontos +=1
ponto.play();
}
}
