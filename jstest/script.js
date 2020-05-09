const canvas = document.querySelector("#etch-a-sketch");

const ctx = canvas.getContext("2d");

const shakebutton = document.querySelector(".shake");


const width = canvas.width;
const height = canvas.height;

const MOVE_AMOUNT = 20;

ctx.lineJoin = 'square';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x,y);
ctx.stroke();


function draw({key}) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    switch (key) {
        case "ArrowUp":
            y -= MOVE_AMOUNT;
            break
        case "ArrowDown":
            y += MOVE_AMOUNT;
            break
        case "ArrowLeft":
            x -= MOVE_AMOUNT;
            break
        case "ArrowRight":
            x += MOVE_AMOUNT;
            break
        default:
            break
    }
    ctx.lineTo(x,y);
    ctx.stroke();
}

function handleclick(e) {
    if(e.key.includes('Arrow')) {
        draw({key: e.key});

    }
}

window.addEventListener("keydown", handleclick)