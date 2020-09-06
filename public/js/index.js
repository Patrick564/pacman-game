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

let enemyRow = 3;
let enemyCol = 7;
let enemyWidth = 18;
let enemyHeight = 7;
let enemyPadding = 10;
let enemyTopMargin = 15;
let enemyLeftMargin = 15;

let enemyShips = [];

for (let row = 0; row < enemyRow; row++) {
    enemyShips[row] = [];

    for (let col = 0; col < enemyCol; col++) {
        enemyShips[row][col] = {
            x: (col * (enemyWidth + enemyPadding)) + enemyLeftMargin,
            y: (row * (enemyHeight + enemyPadding)) + enemyTopMargin,
            status: 1,
        };
    }
}

window.addEventListener('keypress', (event) => {
    if (event.key === 'd') {
        moveRight();
    } else if (event.key === 'a') {
        moveLeft();
    }
});

function drawShip() {
    ctx.beginPath();
    ctx.fillStyle = '#0095DD';
    ctx.fillRect(positionX, positionY, 14, 5);
    ctx.closePath();
}

function drawEnemyShips() {
    for (row of enemyShips) {
        for (col of row) {
            if (col.status === 1) {
               ctx.beginPath();
                ctx.fillStyle = '#0095DD';
                ctx.fillRect(col.x, col.y, enemyWidth, enemyHeight);
                ctx.closePath(); 
            }
        }
    }
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

    if (enemyShips[0][6].x > (canvas.width - 33) || enemyShips[0][0].x < 15) {
        enemySpeedX = -enemySpeedX;
    }
    
    // enemyPosX += enemySpeedX;

    for (row of enemyShips) {
        for (col of row) {
            col.x += enemySpeedX;
        }
    }

    // console.log(enemyShips[0][0].x);
}

setInterval(drawAll, 10);
