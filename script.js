const topEl = document.getElementById("topId");
const bottomEl = document.getElementById("bottomId");


const windAnglePlusBtn = document.getElementById("anglePlusBtn");
const windAngleMinusBtn = document.getElementById("angleMinusBtn");
const planeHeadingPlusBtn = document.getElementById("planeHeadingPlusBtn");
const planeHeadingMinusBtn = document.getElementById("planeHeadingMinusBtn");

let windAngle = 0;
let planeHeading = 0;

function changeElement(element, angle) {
    element.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`
}

windAnglePlusBtn.onclick = () => {
    windAngle +=5;
    changeElement(bottomEl, windAngle);
}
windAngleMinusBtn.onclick = () => {
    windAngle -=5;
    changeElement(bottomEl, windAngle);
}
planeHeadingPlusBtn.onclick = () => {
    planeHeading +=5;
    changeElement(topEl, planeHeading);
}
planeHeadingMinusBtn.onclick = () => {
    planeHeading -=5;
    changeElement(topEl, planeHeading);
}
