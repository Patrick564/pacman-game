let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// 143 - 130
let positionX = (canvas.width / 2) - 7;
let positionY = canvas.height - 15;

// let limitX = canvas.width;
// let limitY =;
 
let speedX = 5;
let speedY = -5;

function drawShip() {
    ctx.beginPath();
    ctx.fillStyle = 'rgb(300, 0, 0)';
    ctx.fillRect(positionX, positionY, 14, 5);
    ctx.closePath();
}

window.addEventListener('keydown', (event) => {
    if (event.key === 'w') {
        // moveUp();
        console.log('w');
    } else if (event.key === 'd') {
        moveRight();
        console.log('d');
    } else if (event.key === 's') {
        // moveDown();
        console.log('s');
    } else if (event.key === 'a') {
        moveLeft();
        console.log('a');
    }
});

function moveLeft() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (positionX > 15) {
        positionX -= speedX;
    }
    
    drawShip();
}

function moveRight() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (positionX < (canvas.width - 29)) {
        positionX += speedX;
    }
    
    drawShip();
}

drawShip();
