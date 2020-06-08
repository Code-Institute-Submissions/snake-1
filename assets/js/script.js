const gameBoard = document.getElementById("gameBoard");
const ctx = gameBoard.getContext("2d");
const tile = 10;
let direction = "left";

function draw() {

    ctx.clearRect(0,0,gameBoard.clientWidth, gameBoard.height) // Clears any tiles filled on each draw to prevent trail
    ctx.fillStyle = "red";
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, tile, tile); // Fills tiles occupied by snake array's coordinates
    };
    let currentHeadX = snake[0].x; // current position of snake head coordinates. Will supply new coordinate on each draw or change in direction
    let currentHeadY = snake[0].y;

    if (direction === "up") {
        currentHeadY = currentHeadY - tile;
    } else if (direction === "down") {
        currentHeadY = currentHeadY + tile;
    } else if (direction === "left") {
        currentHeadX = currentHeadX - tile;
    } else if (direction === "right") {
        currentHeadX = currentHeadX + tile;
    };
    
    snake.pop(); // removes last object (tail end) in snake array
    
    let newHead = {
        x: currentHeadX,
        y: currentHeadY
    };
    snake.unshift(newHead);

    for (let i = 1; i < snake.length; i++) {
        if (currentHeadX === snake[i].x && currentHeadY === snake[i].y) {
            console.log("ATE SELF");
        }; // Detects whether currentHead has same coordinates as existing objects in snake array
    };
    if (currentHeadX > gameBoard.width || currentHeadX < -10) {
        console.log("HIT X WALL"); 
    } else if (currentHeadY > gameBoard.height || currentHeadY < -10) {
        console.log("HIT Y WALL"); 
    }
};

setInterval(draw, 1000); // time between each draw, effectively the speed of the snake

// Initial snake array
let snake = [];
snake[0] = {
    x: 19 * tile,
    y: 19 * tile
};
snake[1] = {
    x: 20 * tile,
    y: 19 * tile
};
snake[2] = {
    x: 21 * tile,
    y: 19 * tile
};