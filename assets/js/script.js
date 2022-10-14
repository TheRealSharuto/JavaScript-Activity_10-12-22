//  Old way to handle this problem. This will only work if an .onclick is added to the HTML element in <button>.
/*
const revealThis = getElementById('greeting');

function revealContent() {
    document.getElementById("greeting").style.visibility = "visible";
}

function begoneContent() {
    document.getElementById("greeting").style.visibility = "hidden";
}

const revealThat = getElementByID('mother-nature');

function revealImgContent() {
    document.getElementById("mother-nature").style.visibility = "visible";
}

function begoneImgContent() {
    document.getElementById("mother-nature").style.visibility = "hidden";
}

*/

// calling the elements
const imgBlock = document.querySelector('#mother-nature');
const textParagraph = document.getElementById('greeting');

const revealImgButtonEl = document.getElementById('revealThat');
const begoneImgButtonEl = document.getElementById('begoneThat');
const revealTextButtonEl = document.getElementById('revealThis');
const begoneTextButtonEl = document.getElementById('begoneThis');

// Functions
const revealImgContent = () => {
    imgBlock.style.visibility = "visible";
}

const begoneImgContent = () => {
    imgBlock.style.visibility = "hidden";
}

const revealTextContent = () => {
    textParagraph.style.visibility = "visible";
}

const begoneTextContent = () => {
    textParagraph.style.visibility = "hidden";
}

// Event Listener

revealImgButtonEl.addEventListener('click', revealImgContent);
begoneImgButtonEl.addEventListener('click', begoneImgContent);
revealTextButtonEl.addEventListener('click', revealTextContent);
begoneTextButtonEl.addEventListener('click', begoneTextContent);