const canvas = document.querySelector("canvas");
canvas.width = 500;
canvas.height = 700;
const ctx = canvas.getContext("2d");
const carImg = new Image();
carImg.src = "/images/car.png";
const roadImg = new Image();
roadImg.src = "/images/road.png";
let id = null
class Car {
  constructor(img, x, y, w, h) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  drawCar() {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

let miniCooper = new Car(carImg, 250, 600, 50, 100);

window.onkeydown = function (event) {
  console.log(event.key);
  switch (event.key) {
    case "ArrowLeft":
      miniCooper.x -= 7;
      break;
    case "ArrowRight":
      miniCooper.x += 7;
      break;
  }
};

class Obstacle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  drawObstacle = () => {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y++, this.w, this.h);
  };
  checkCollision = () => {
    if (miniCooper.x < this.x + this.w &&
      miniCooper.x + miniCooper.w > this.x &&
      miniCooper.y < this.y + this.h &&
      miniCooper.y + miniCooper.h > this.y) {
      window.cancelAnimationFrame(id)
    }
  }
}

let obstacless = [
  new Obstacle(100, 20, 100, 20),
  new Obstacle(200, 50, 100, 20),
  new Obstacle(0, 80, 100, 20),
];
let random = () => Math.floor(Math.random() * canvas.width);
setInterval(function () {
  obstacless.push(new Obstacle(random(), 0, 100, 20));
}, 1000);

var rect1 = { x: 5, y: 5, width: 50, height: 50 }
var rect2 = { x: 20, y: 10, width: 10, height: 10 }

function collision() {

}

// collision detected!


function animate() {
  id = window.requestAnimationFrame(animate);
  console.log("gameloop");
  ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
  miniCooper.drawCar();
  for (obs of obstacless) {
    obs.drawObstacle();
    obs.checkCollision();

  }

}
animate();
