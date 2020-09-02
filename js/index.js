const canvas = document.querySelector("canvas");
canvas.width = 500;
canvas.height = 700;
const ctx = canvas.getContext("2d");
const carImg = new Image();
carImg.src = "/images/car.png";
const roadImg = new Image();
roadImg.src = "/images/road.png";

function animate() {
  window.requestAnimationFrame(animate);
  console.log("gameloop");
  ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(carImg, 250, 600, 50, 100);
}

animate();
