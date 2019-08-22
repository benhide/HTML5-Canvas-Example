const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;
const centerX = width / 2;
const centerY = height / 2;
const radius = width / 3;

// context.fillStyle = "Green";
// context.fillRect(200, 150, 200, 100);
// context.arc(100, 100, 50, 0, 2 * Math.PI, false);
// context.fillStyle = "Blue";
// context.fill();
// let scores = [100, 80, 70, 40, 90, 60, 90, 20, 50];
// let width = 50;
// let currentX = 50;
// let base = 200;
// let startX = 0;
// let startY = 0;

// for (let i = 0; i < scores.length; i++) {
//   let x = currentX;
//   let y = canvas.clientHeight - scores[i];
//   // Move to point
//   if (startX === 0) startX = x;
//   if (startY === 0) startY = y;
//   context.beginPath();
//   context.strokeStyle = "red";
//   context.lineWidth = 1;
//   context.moveTo(startX, startY - base);
//   context.lineTo(x, y - base);
//   context.stroke();
//   context.closePath();
//   startX = currentX + 10;
//   startY = y;
//   context.beginPath();
//   context.fillStyle = "navy";
//   context.arc(x, y - base, 10, 0, 2 * Math.PI, false);
//   context.fill();
//   context.closePath();
//   currentX += width + 10;
// }
// let text = "This is text";
// context.font = "40pt Arial";
// context.translate(300, 200);
// setInterval(() => {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   context.rotate(-0.01 * Math.PI);
//   context.fillText(text, 50, 50, 600);
// }, 10);

// let timerID;
// const video = document.getElementById("video");
// video.addEventListener("play", () => {
//   video.currentTime = 10.0;
//   timerID = window.setInterval(() => {
//     context.drawImage(video, 5, 5, 270, 125);
//   }, 30);
// });
// video.addEventListener("pause", () => {
//   stopTimer();
// });
// video.addEventListener("stop", () => {
//   stopTimer();
// });
// function stopTimer() {
//   window.clearInterval(timerID);
// }

// context.font = "30pt Arial";
// const rotatedText = "rotated text";
// context.save();
// context.translate(200, 350);
// context.rotate(-0.5 * Math.PI);
// context.scale(1.5, 4);
// context.fillText(rotatedText, 0, 0);
// context.restore();
// context.fillRect(250, 100, 200, 100);

// function generateImage() {
//   const width = canvas.width;
//   const height = canvas.height;
//   let pixelData = context.createImageData(width, height);
//   const centerX = width / 2;
//   const centerY = height / 2;
//   let pixelPos = 0;
//   for (let y = 0; y < pixelData.height; y++) {
//     for (let x = 0; x < pixelData.width; x++) {
//       let xOffset = x - centerX;
//       let yOffset = y - centerY;
//       let d = Math.abs(xOffset) + Math.abs(yOffset);
//       let t = Math.cos(d / 10);
//       let r = t * 255;
//       let g = 125 + t * 80;
//       let b = 235 + t * 20;
//       pixelData.data[pixelPos++] = Math.max(0, Math.min(255, r));
//       pixelData.data[pixelPos++] = Math.max(0, Math.min(255, g));
//       pixelData.data[pixelPos++] = Math.max(0, Math.min(255, b));
//       pixelData.data[pixelPos++] = Math.random() * 1000;
//     }
//   }
//   context.putImageData(pixelData, 0, 0);
// }
// generateImage();

// window.requestAnimFrame = (function() {
//   return (
//     window.requestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     window.oRequestAnimationFrame ||
//     window.msRequestAnimationFrame ||
//     function(callback) {
//       window.setTimeout(callback, 1000 / 60);
//     }
//   );
// })();
// const radius = 50;
// const posY = 70;
// let posX = radius;
// const speed = 8;
// const width = canvas.width;
// const height = canvas.height;
// let dir = 1;
// function update() {
//   if (dir > 0) dir = posX < width - radius ? 1 : -1;
//   if (dir < 0) dir = posX > 0 + radius ? -1 : 1;
//   posX += speed * dir;
// }
// function render() {
//   context.clearRect(0, 0, width, height);
//   context.fillStyle = "Navy";
//   context.beginPath();
//   context.arc(posX, posY, radius, 0, 2 * Math.PI, false);
//   context.closePath();
//   context.fill();
// }
// function animate() {
//   update();
//   render();
//   requestAnimFrame(animate);
// }
// animate();

// const borderColor = "#c8c8c8";
// const innerBorderColor = "#c8c8c8";
// const handColor = "#666666";
// drawClockFace();
// drawHand();
// function drawHand() {
//   let radians = (new Date().getSeconds() * Math.PI) / 30;
//   radians -= (90 * Math.PI) / 180;
//   context.beginPath();
//   const gradient = context.createRadialGradient(
//     centerX,
//     centerY,
//     radius / 1.3,
//     70,
//     50,
//     radius / 4
//   );
//   gradient.addColorStop(0, "#88bfe8");
//   gradient.addColorStop(1, "#fff");
//   context.fillStyle = gradient;
//   context.arc(centerX, centerY, radius - 10, 0, 2 * Math.PI, false);
//   context.fill();
//   context.strokeStyle = innerBorderColor;
//   context.stroke();
//   context.closePath();
//   context.save();
//   context.beginPath();
//   context.translate(centerX, centerY);
//   context.rotate(radians);
//   context.lineWidth = 2;
//   context.lineCap = "round";
//   context.moveTo(0, 0);
//   context.lineTo(radius - 25, 0);
//   context.strokeStyle = handColor;
//   context.stroke();
//   context.closePath();
//   context.restore();
// }
// function drawClockFace() {
//   context.beginPath();
//   context.strokeStyle = borderColor;
//   context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
//   const gradient = context.createRadialGradient(
//     centerX,
//     centerY,
//     radius,
//     100,
//     50,
//     radius / 2
//   );
//   gradient.addColorStop(0, "#ccc");
//   gradient.addColorStop(1, "#fff");
//   context.fillStyle = gradient;
//   context.fill();
//   context.stroke();
//   context.closePath();
// }
