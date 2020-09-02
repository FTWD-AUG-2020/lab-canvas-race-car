const canvas = document.querySelector('canvas');
canvas.width = 500;
canvas.height = 700;
const ctx = canvas.getContext('2d');
const roadImg = new Image();
roadImg.src = '/images/road.png'

roadImg.onload = () => {
  ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height)
}