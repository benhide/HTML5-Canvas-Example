const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.fillStyle = "Green";
context.fillRect(200, 150, 200, 100);

context.arc(100, 100, 50, 0, 2 * Math.PI, false);
context.fillStyle = "Blue";
context.fill();
