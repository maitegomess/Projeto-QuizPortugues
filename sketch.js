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
let wasPressing = false;
let questaoAtual = 1;
let acertos = 0;

telaDaQuestao = {
  1: 1,
  2: 8,
  3: 9,
  4: 10,
  5: 11,
  6: 1
}

function preload() {
  img1 = loadImage('Slide1.jpg')
  img2 = loadImage('Slide2.jpg')
  img3 = loadImage('Slide1-1.jpg')
  img4 = loadImage('Slide1-2.jpg')
  img5 = loadImage('Slide5.jpg')
  img6 = loadImage('Slide6.jpg')
  img7 = loadImage('Slide2-1.jpg')
}

function setup() {
  createCanvas(400, 500);
}

function inBetween(mx, my, x, y, largura, altura) {
  return (mx > x && mx < x + largura && my > y && my < y + altura);
}

function draw() {

  textStyle(NORMAL);

  if (tela == 1) {
    image(img3, -255, -40)
    textAlign(CENTER);
    textSize(26);
    questaoAtual = 1
    acertos = 0

    if (inBetween(mouseX, mouseY, xMenu, yMenu1, largura, altura)) {
      stroke(200);
      fill(250, 128, 0);
      rect(xMenu, yMenu1, largura, 60, 20);
      if (mouseIsPressed && wasPressing == false) {
        tela = 2;
      }
    }

    if (inBetween(mouseX, mouseY, xMenu, yMenu2, largura, altura)) {
      stroke(200);
      fill(250, 128, 0);
      rect(xMenu, yMenu2, largura, 60, 20);
      if (mouseIsPressed && wasPressing == false) {
        tela = 3;
      }
    }

    if (inBetween(mouseX, mouseY, xMenu, yMenu3, largura, altura)) {
      stroke(200);
      fill(250, 128, 0);
      rect(xMenu, yMenu3, largura, 60, 20);
      if (mouseIsPressed && wasPressing == false) {
        tela = 4;
      }
    }


    fill(24);
    noStroke();
    text("Iniciar", 190, 230)
    text("Instruções", 194, 290)
    text("Sobre", 192, 350)
  } 
  else if (tela == 2) {
    image(img4, -100, -100);
    textAlign(CENTER);
    textSize(16);
    textStyle(BOLD);
    draw2ScreenElements();
    if (inBetween(mouseX, mouseY, xInformação, yInformação1, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(xInformação, yInformação1, xLargura, 40, 20);
      if (mouseIsPressed && wasPressing == false) {
        tela = 1
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta1, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta1, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 5
        questaoAtual = 2
        acertos += 1
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta2, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta2, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 6
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta3, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta3, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 6
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta4, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta4, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 6
      }
    }
  } 
  else if (tela == 3) {
    image(img1, -380, -40)
   
    textAlign(CENTER);
    textSize(16);
    textStyle(BOLD)
    if(inBetween(mouseX, mouseY, xInformação, yInformação1, xLargura, xAltura)){
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
  else if (tela == 4) {
    image(img2, -380, -20)
    textAlign(CENTER);
    textSize(16);
    textStyle(BOLD)
    if(inBetween(mouseX, mouseY, xInformação, yInformação1, xLargura, xAltura)){
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
  else if (tela == 5) {
    //tela acerto

    image(img5, -450, -100)
    textAlign(CENTER);
    textSize(18);
    textStyle(BOLD)
    if (inBetween(mouseX, mouseY, next, xNext, aLargura, aAltura)) {
      stroke(200);
      fill(250, 128, 0);
      rect(next, xNext, aLargura, 40, 20)
      if (mouseIsPressed) {
        tela = telaDaQuestao[questaoAtual]
      }
    }
    fill(24)
    noStroke()
    text("Próxima fase", 300, 480)

    textAlign(CENTER);
    textSize(16);
    textStyle(BOLD)
    if (inBetween(mouseX, mouseY, xInformação, yInformação1, xLargura, xAltura)) {
      stroke(200);
      fill(250, 128, 0);
      rect(xInformação, yInformação1, xLargura, 40, 20);
      if (mouseIsPressed) {
        questaoAtual = 0
        tela = 1
      }
    }
    fill(24)
    noStroke()
    text("Voltar", 42, 35)
  } 
  else if (tela == 6) {

    image(img6, -450, -100)
    textAlign(CENTER);
    textSize(18);
    textStyle(BOLD);

    if (inBetween(mouseX, mouseY, wrong, xNext2, bLargura, bAltura)) {
      stroke(200);
      fill(250, 128, 0);
      rect(wrong, xNext2, bLargura, 40, 20)
      if (mouseIsPressed) {
        tela = 2
      }
    }
    fill(24)
    noStroke()
    text("Tentar novamente", 300, 480)
  } 
  else if (tela == 8) {
    image(img4, -100, -100);
    textAlign(CENTER);
    textSize(16);
    textStyle(BOLD);
    draw8ScreenElements();
    if (inBetween(mouseX, mouseY, xInformação, yInformação1, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(xInformação, yInformação1, xLargura, 40, 20);
      if (mouseIsPressed && wasPressing == false) {
        tela = 1
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta1, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta1, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 6
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta2, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta2, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 5
        questaoAtual = 3
        acertos += 1
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta3, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta3, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 6
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta4, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta4, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 6
      }
    }
  } 
  else if (tela == 9) {
    image(img4, -100, -100);
    textAlign(CENTER);
    textSize(16);
    textStyle(BOLD);
    draw9ScreenElements();
    if (inBetween(mouseX, mouseY, xInformação, yInformação1, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(xInformação, yInformação1, xLargura, 40, 20);
      if (mouseIsPressed && wasPressing == false) {
        tela = 1
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta1, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta1, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 6
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta2, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta2, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 6
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta3, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta3, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 5
        questaoAtual = 4
        acertos += 1
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta4, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta4, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 6
      }
    }
  } 
  else if (tela == 10) {
    image(img4, -100, -100);
    textAlign(CENTER);
    textSize(16);
    textStyle(BOLD);
    draw10ScreenElements();
    if (inBetween(mouseX, mouseY, xInformação, yInformação1, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(xInformação, yInformação1, xLargura, 40, 20);
      if (mouseIsPressed && wasPressing == false) {
        tela = 1
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta1, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta1, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 6
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta2, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta2, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 6
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta3, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta3, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 5
        questaoAtual = 5
        acertos += 1
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta4, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta4, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 6
      }
    }
  }
  else if (tela == 11) {
    image(img4, -100, -100);
    textAlign(CENTER);
    textSize(16);
    textStyle(BOLD);
    draw11ScreenElements();
    if (inBetween(mouseX, mouseY, xInformação, yInformação1, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(xInformação, yInformação1, xLargura, 40, 20);
      if (mouseIsPressed && wasPressing == false) {
        tela = 1
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta1, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta1, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 6
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta2, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta2, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 5
        questaoAtual = 6
        acertos += 1
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta3, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta3, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 6
      }
    }
    if (inBetween(mouseX, mouseY, zMenu, yResposta4, xLargura, xAltura)) {
      stroke(0);
      fill(250, 128, 0, 100);
      rect(zMenu, yResposta4, zLargura, 30, 15)
      if (mouseIsPressed && wasPressing == false) {
        tela = 6
      }
    }
  }

}

const draw2ScreenElements = () => {
  fill(24)
  noStroke()
  text("Voltar", 42, 35)

  fill(24)
  noStroke()
  text("ca-sa", 78, 220)


  fill(24)
  noStroke()
  text("ca-rro", 78, 290)

  fill(24)
  noStroke()
  text("co-r", 78, 360)

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
const draw8ScreenElements = () => {
  fill(24)
  noStroke()
  text("Voltar", 42, 35)

  fill(24)
  noStroke()
  text("po-rta", 78, 220)


  fill(24)
  noStroke()
  text("ga-to", 78, 290)

  fill(24)
  noStroke()
  text("ve-rde", 78, 360)

  fill(24)
  noStroke()
  text("s-apo", 78, 430)

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
const draw9ScreenElements = () => {
  fill(24)
  noStroke()
  text("Voltar", 42, 35)

  fill(24)
  noStroke()
  text("tet-o", 78, 220)


  fill(24)
  noStroke()
  text("ced-o", 78, 290)

  fill(24)
  noStroke()
  text("men-te", 78, 360)

  fill(24)
  noStroke()
  text("mod-a", 78, 430)

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
const draw10ScreenElements = () => {
  fill(24)
  noStroke()
  text("Voltar", 42, 35)

  fill(24)
  noStroke()
  text("mot-o", 78, 220)


  fill(24)
  noStroke()
  text("f-oca", 78, 290)

  fill(24)
  noStroke()
  text("ca-fé", 78, 360)

  fill(24)
  noStroke()
  text("mal-a", 78, 430)

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
const draw11ScreenElements = () => {
  fill(24)
  noStroke()
  text("Voltar", 42, 35)

  fill(24)
  noStroke()
  text("d-edo", 78, 220)


  fill(24)
  noStroke()
  text("li-xo", 78, 290)

  fill(24)
  noStroke()
  text("pret-o", 78, 360)

  fill(24)
  noStroke()
  text("fad-a", 78, 430)

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
