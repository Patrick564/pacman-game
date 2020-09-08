let left = document.getElementById('left');
let right = document.getElementById('right');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let positionX = (canvas.width / 2) - 7;
let positionY = canvas.height - 15;

let shotX = positionX + 7;
let shotY = positionY - 5;
// ---
let shipPosX;
let shipPosY;
 
let speedX = 2;
let speedY = -6;
// ---
let shipSpeedX;
let shipSpeedY;

let enemySpeedX = 0.3;
let enemySpeedY = -0.3;

let enemyRows = 3;
let enemyCols = 7;
let enemyWidth = 18;
let enemyHeight = 7;
let enemyGap = 10;
let enemyTopMargin = 15;
let enemyLeftMargin = 15;

let enemyShips = [];
let shots = [];

let rightPress = false;
let leftPress = false;

for (let row = 0; row < enemyRows; row++) {
    enemyShips[row] = [];

    for (let col = 0; col < enemyCols; col++) {
        enemyShips[row][col] = {
            x: (col * (enemyWidth + enemyGap)) + enemyLeftMargin,
            y: (row * (enemyHeight + enemyGap)) + enemyTopMargin,
            status: 1,
        };
    }
}

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

function shot() {
    ctx.beginPath();
    ctx.fillStyle = '#0095DD';
    ctx.fillRect(shotX, shotY, 2, 5);
    ctx.closePath();
}

// function drawShots() {
//     ctx.beginPath();
//     ctx.fillStyle = '#0095DD';
//     ctx.fillRect(shotX, shotY, 2, 5);
//     ctx.closePath();
// }

// For button movement
function moveLeft() {
    if (positionX > 15) {
        positionX -= (speedX + 8);
    }
}

function moveRight() {
    if (positionX < (canvas.width - 29)) {
        positionX += (speedX + 8);
    }
}

function drawAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawShip();
    shot();
    drawEnemyShips();
    
    if (enemyShips[0][6].x > (canvas.width - 33) || enemyShips[0][0].x < 15) {
        enemySpeedX = -enemySpeedX;
    }

    if (rightPress === true && positionX < (canvas.width - 29)) {
        positionX += speedX;
    } else if (leftPress === true && positionX > 15) {
        positionX -= speedX;
    }
    
    for (row of enemyShips) {
        for (col of row) {
            col.x += enemySpeedX;
        }
    }

    // if (shotY < 15) {
    //     shotY = positionY;
    // } else {
    //     shotY--;
    // }

    // shotX++;

    // console.log(enemyShips[0][0].x);
}

document.addEventListener('keydown', event => {
    if (event.key === 'a') {
        leftPress = true;
    } else if (event.key === 'd') {
        rightPress = true;
    }
});

document.addEventListener('keyup', event => {
    if (event.key === 'a') {
        leftPress = false;
    } else if (event.key === 'd') {
        rightPress = false;
    }
});

setInterval(drawAll, 10);
