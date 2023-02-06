//Variables
/*
const mainCanvas = document.querySelector('#main-canvas');
const contexto = mainCanvas.getContext('2d');


let inicialX;
let inicialY;

const dibujar = (cursorX, cursorY)=>{

    contexto.beginPath();
    contexto.moveTo(inicialX, inicialY);
    contexto.lineWith = 50;
    contexto.strokeStyle = '#0000';
    contexto.lineCap = 'round';
    contexto.lineJoin = 'round';
    contexto.lineTo(cursorX, cursorY);
    contexto.stroke();

    inicialX = cursorX;
    inicialY = cursorY;
};

const mouseDown = (evt) =>{

    inicialX = evt.offsetX;
    inicialY = evt.offsetY;
    dibujar(inicialX, inicialY);
    mainCanvas.addEventListener('mousemove', mouseMoving);

};

const mouseMoving = (evt) =>{

    dibujar(evt.offsetX, evt.offsetY);

}


mainCanvas.addEventListener('mousedown', mouseDown);
*/


const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");

let initialX;
let initialY;

const dibujar = (cursorX, cursorY) => {
  context.beginPath();
  context.moveTo(initialX, initialY);
  context.lineWidth = 25;
  context.strokeStyle = "#000";
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineTo(cursorX, cursorY);
  context.stroke();

  initialX = cursorX;
  initialY = cursorY;
};

const mouseDown = (evt) => {
  initialX = evt.offsetX;
  initialY = evt.offsetY;
  dibujar(initialX, initialY);
  mainCanvas.addEventListener("mousemove", mouseMoving);
};

const mouseMoving = (evt) => {
  dibujar(evt.offsetX, evt.offsetY);
};

const mouseUp = () => {
  mainCanvas.removeEventListener("mousemove", mouseMoving);
};

mainCanvas.addEventListener("mousedown", mouseDown);
mainCanvas.addEventListener("mouseup", mouseUp);
