const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
let mouseEvent = "empty";
let lastX, lastY;
let width_Line = 2;
canvas.addEventListener("touchstart", (e) => {
    lastX = e.touches[0].clientX - canvas.offsetLeft;
    lastY = e.touches[0].clientY - canvas.offsetTop;
});
canvas.addEventListener("touchmove", (e) => {
    currentTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentTouchY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
        ctx.storkeStyle = "black";
        ctx.lineWidth = width_Line;
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentTouchX, currentTouchY);
    ctx.stroke();
    lastX = currentTouchX;
    lastY = currentTouchY;
})