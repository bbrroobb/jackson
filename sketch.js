var path, boi, leftBoundary, rightBoundary;
var pathImg, boiImg;
var i;

function preload() {
  //loadImage de path (camino)
  pathImg = loadImage("path.png")
  //loadAnimation de boy (niño)
  boiImg = loadAnimation("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.png", "Jake5.png")

}

function setup() {

  createCanvas(400, 400);
  //crear sprite de path (camino) 
  path = createSprite(200, 200, 20, 20)
  //agregar imagen de path
  path.addImage("path", pathImg)
  //Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
  path.scale = 1.2;

  //crear sprite de boy (niño)
  boi = createSprite(200, 250,20,20)
  //agregar animación para boy
  boi.addAnimation("running", boiImg)

  boi.scale = 0.3;

  // crear  left Boundary (límite izquierdo)
  leftBoundary = createSprite(0, 0, 100, 800);
  ////establecer visibilidad como false (falso) para límite izquierdo
  leftBoundary.visible = false;
  //crear right Boundary (límite derecho)
  rightBoundary = createSprite(410, 0, 100, 800);
  //establecer visibilidad como false (falso) para límite izquierdo
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;

  // boi moviéndose en el eje X con el mouse
     boi.x = World.mouseX
  edges = createEdgeSprites();
  boi.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boi.collide(leftBoundary)
  boi.collide(rightBoundary)
  //código para reiniciar el fondo
  if (path.y > 400) {
    path.y = height / 2;
  }

  drawSprites();
}