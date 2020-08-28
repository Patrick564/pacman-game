let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let positionX = (canvas.width / 2) - 7;
let positionY = canvas.height - 15;

let enemyPosX = 45;
let enemyPosY = 35;
 
let speedX = 6;
let speedY = -6;

let enemySpeedX = 0.3;
let enemySpeedY = -0.3;

window.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        moveRight();
        console.log('d');
    } else if (event.key === 'a') {
        moveLeft();
        console.log('a');
    }
});

function drawShip() {
    ctx.beginPath();
    ctx.fillStyle = '#0095DD';
    ctx.fillRect(positionX, positionY, 14, 5);
    ctx.closePath();
}

function drawEnemyShips() {
    ctx.beginPath();
    ctx.fillStyle = '#0095DD';
    ctx.fillRect(enemyPosX, enemyPosY, 25, 5);
    ctx.closePath();
}

function moveLeft() {
    if (positionX > 15) {
        positionX -= speedX;
    }
}

function moveRight() {
    if (positionX < (canvas.width - 29)) {
        positionX += speedX;
    }
}

function drawAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawShip();
    drawEnemyShips();

    if (enemyPosX > (canvas.width - 40) || enemyPosX < 15) {
        enemySpeedX = -enemySpeedX;
    }
    
    enemyPosX += enemySpeedX;

    console.log(canvas.width);
    console.log(enemyPosX);
}



setInterval(drawAll, 10);
