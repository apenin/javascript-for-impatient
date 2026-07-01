const angle = 1234;
const normalizedAngle = ((angle % 360) + 360) % 360;

console.log("Normalized angle: " + normalizedAngle); // 154