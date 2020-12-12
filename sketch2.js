let tela = 1;
let largura = 150;
let altura = 50;
let xMenu = 118;
let yMenu1 = 190;
let yMenu2 = 250;
let yMenu3 = 310;
let img1;
let xLargura = 75;
let xAltura = 25;
let xInformação = 5;
let yInformação1 = 10;
let img2;
let xSobre = 5;
let ySobre1 = 10;
let img3;
let zMenu = 40;
let zLargura = 75;
let zAltura = 2;
let xResposta = 5;
let yResposta1 = 200;
let yResposta2 = 270;
let yResposta3 = 340;
let yResposta4 = 410;
let img4;
let img5;
let img6;
let next = 240;
let xNext = 455;
let aAltura = 30;
let aLargura = 120;
let xNext2 = 455;
let bLargura = 190;
let bAltura = 30;
let wrong = 205;
let img7;

function preload(){
img1 = loadImage('Slide1.jpg')
img2 = loadImage('Slide2.jpg')
img3 = loadImage('Slide1-1.jpg')
img4 = loadImage('Slide1-2.jpg')
img5 = loadImage('Slide5.jpg')
img6 = loadImage('Slide6.jpg')
img7 = loadImage('Slide2-1.jpg')
}

function setup() {
  createCanvas(400,500);
}

function draw(){
  textStyle(NORMAL);
  // Tela de início;
  if (tela == 1){
    image(img3, -255, -40)
    
  textAlign(CENTER);
  textSize(26); 
  
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura ){
    stroke(200);
    fill(250, 128, 0);
    rect(xMenu,yMenu1,largura, 60, 20)
  if (mouseIsPressed) {
    tela = 2
  }
}
  fill(24)
  noStroke()
  text("Iniciar", 190, 230)
  
  
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura ){
    stroke(200);
    fill(250, 128, 0);
    rect(xMenu,yMenu2,largura, 60, 20)
  if (mouseIsPressed) {
    tela = 3
  }
}
  fill(24)
  noStroke()
  text("Instruções", 194, 290)
    
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura ){
    stroke(200);
    fill(250, 128, 0);
    rect(xMenu,yMenu3,largura, 60, 20)
  if (mouseIsPressed) {
    tela = 4
  }
}
    fill(24)
    noStroke()
    text("Sobre", 192, 350)
}
  else if (tela == 2){
    image(img4, -100, -100)
    
    textAlign(CENTER);
  textSize(16);
  textStyle(BOLD)
   
  if (mouseX > xInformação && mouseX < xInformação + xLargura && mouseY > yInformação1 && mouseY < yInformação1 + xAltura ){
    stroke(0);
    fill(250, 128, 0);
    rect(xInformação, yInformação1, xLargura, 40, 20);
  if (mouseIsPressed) {
    tela = 1
  }
}
  fill(24)
  noStroke()
  text("Voltar", 42, 35)
       
 stroke(0);
    fill(250, 128, 0);
    rect(zMenu,yResposta1,zLargura, 30, 15)
  if (mouseIsPressed) {
    tela = 5
  }
    fill(24)
  noStroke()
  text("ca-sa", 78, 220)
    
    stroke(0);
    fill(250, 128, 0);
    rect(zMenu,yResposta2,zLargura, 30, 15)
  if (mouseIsPressed) {
    tela = 6
  }
    fill(24)
  noStroke()
  text("ca-rro", 78, 290)
    
    stroke(0);
    fill(250, 128, 0);
    rect(zMenu,yResposta3,zLargura, 30, 15)
  if (mouseIsPressed) {
    tela = 6
  }
    fill(24)
  noStroke()
  text("co-r", 78, 360)
    
    stroke(0);
    fill(250, 128, 0);
    rect(zMenu,yResposta4,zLargura, 30, 15)
  if (mouseIsPressed) {
    tela = 6
  }
    fill(24)
  noStroke()
  text("c-ama", 78, 430)
    
    fill(24)
  noStroke()
  text("A)", 20, 220)
    
    stroke(0);
    fill(250, 128, 0);
    
    fill(24)
  noStroke()
  text("B)", 20, 290)
    
    stroke(0);
    fill(250, 128, 0);
    
    fill(24)
  noStroke()
  text("C)", 20, 360)
    
    stroke(0);
    fill(250, 128, 0);
    
    fill(24)
  noStroke()
  text("D)", 20, 430)
    
    stroke(0);
    fill(250, 128, 0);
    
}
  else if (tela == 3){
    image(img1, -380, -40)
   
  textAlign(CENTER);
  textSize(16);
  textStyle(BOLD)
   
  if (mouseX > xInformação && mouseX < xInformação + xLargura && mouseY > yInformação1 && mouseY < yInformação1 + xAltura ){
    stroke(200);
    fill(153, 0, 204);
    rect(xInformação, yInformação1, xLargura, 40, 20);
  if (mouseIsPressed) {
    tela = 1
  }
}
  fill(24)
  noStroke()
  text("Voltar", 42, 35)
 }
  else if (tela == 4){
    image(img2, -380, -20)
    textAlign(CENTER);
  textSize(16);
  textStyle(BOLD)
   
  if (mouseX > xInformação && mouseX < xInformação + xLargura && mouseY > yInformação1 && mouseY < yInformação1 + xAltura ){
    stroke(200);
    fill(250, 128, 0);
    rect(xInformação, yInformação1, xLargura, 40, 20);
  if (mouseIsPressed) {
    tela = 1
  }
}
  fill(24)
  noStroke()
  text("Voltar", 42, 35)
  }
  else if (tela == 5){
    //tela acerto
    image(img5, -450, -100)
    
    textAlign(CENTER);
  textSize(18);
    textStyle(BOLD)
  
  if (mouseX > next && mouseX < next + aLargura && mouseY > xNext && mouseY < xNext + aAltura ){
    stroke(200);
    fill(250, 128, 0);
    rect(next,xNext,aLargura, 40, 20)
  if (mouseIsPressed) {
    tela = 7
  }
}
  fill(24)
  noStroke()
  text("Próxima fase", 300, 480)
    
    textAlign(CENTER);
  textSize(16);
  textStyle(BOLD)
   
  if (mouseX > xInformação && mouseX < xInformação + xLargura && mouseY > yInformação1 && mouseY < yInformação1 + xAltura ){
    stroke(200);
    fill(250, 128, 0);
    rect(xInformação, yInformação1, xLargura, 40, 20);
  if (mouseIsPressed) {
    tela = 1
  }
}
  fill(24)
  noStroke()
  text("Voltar", 42, 35)
  }
  else if (tela == 6){
    image(img6, -450, -100)
    
     textAlign(CENTER);
  textSize(18);
    textStyle(BOLD)
  
    if (mouseX > wrong && mouseX < wrong + bLargura && mouseY > xNext2 && mouseY < xNext2 + bAltura ){
      stroke(200);
      fill(250, 128, 0);
      rect(wrong,xNext2,bLargura, 40, 20)
    if (mouseIsPressed) {
      tela = 2
    }
  }
  fill(24)
  noStroke()
  text("Tentar novamente", 300, 480)
}
  else if (tela == 7){
    image(img7, -450, -140)
    
    textStyle(BOLD)
    textSize(15)
    stroke(0);
    fill(250, 128, 0);
    rect(zMenu,yResposta1,zLargura, 30, 15)
  if (mouseIsPressed) {
    tela = 5
  }
    fill(24)
  noStroke()
  text("col-her", 52, 220)
    
    stroke(0);
    fill(250, 128, 0);
    rect(zMenu,yResposta2,zLargura, 30, 15)
  if (mouseIsPressed) {
    tela = 6
  }
    fill(24)
  noStroke()
  text("mo-to-r", 50, 290)
    
    stroke(0);
    fill(250, 128, 0);
    rect(zMenu,yResposta3,zLargura, 30, 15)
  if (mouseIsPressed) {
    tela = 6
  }
    fill(24)
  noStroke()
  text("c-ha-ve", 52, 360)
    
    stroke(0);
    fill(250, 128, 0);
    rect(zMenu,yResposta4,zLargura, 30, 15)
  if (mouseIsPressed) {
    tela = 6
  }
    fill(24)
  noStroke()
  text("fo-gão", 55, 430)
    
    fill(24)
  noStroke()
  text("A)", 20, 220)
    
    stroke(0);
    fill(250, 128, 0);
    
    fill(24)
  noStroke()
  text("B)", 20, 290)
    
    stroke(0);
    fill(250, 128, 0);
    
    fill(24)
  noStroke()
  text("C)", 20, 360)
    
    stroke(0);
    fill(250, 128, 0);
    
    fill(24)
  noStroke()
  text("D)", 20, 430)
    
    stroke(0);
    fill(250, 128, 0);
  }
}