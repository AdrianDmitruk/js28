const animated = document.querySelector(".animated");

let angle = 0;
let radius = 50;
const centerX = 150;
const centerY = 150;

const animate = () => {
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  animated.style.left = x + "px";
  animated.style.top = y + "px";

  angle += 0.02;
  radius += 0.1;

  requestAnimationFrame(animate);
};

animate();
