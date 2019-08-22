const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

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


