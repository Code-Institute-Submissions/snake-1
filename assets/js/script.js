// Global variables
let gameState = "MENU";
let gamesPlayed = 0;
let highScore = parseInt(localStorage.getItem("top")) || 0; // all time high score (since reset)
let currentHighScore; // highest score since window refresh
let currentScore; // score this game
const scoreBoardArray = []; // top five scores since window refresh
let sparkArray = [];

let direction;
const gameSpeed = 140; // fed into setInterval for game updates (ie game speed)
let lastKey = 0; // used to store time since last keydown
const safeDelay = 140; // used to add minimum interval between key presses to prevent snake eating its neck (milliseconds)
let myInterval;

let snake;
let food;

let walls = true;
let gameAudio = true;
let touchGesture = "pan"; // this can be switched to 'swipe' to change reading of input on mobile devices (accessing hammer.js)

function toggleWalls() {
  walls = !walls;
}

let collisionDetected;
let ateFood;

const eatSound = document.getElementById("eatSound");
const gameOverSound = document.getElementById("gameoverSound");

// Random number generator
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Color array
// Randomiser: colorArray[Math.floor(Math.random() * colorArray.length)]
const colorArray = [
  "rgba(128,255,0,1)",
  "rgba(252,243,64,1)",
  "rgba(251,51,219,1)",
  "rgba(3,16,234,1)",
];

// Keydown event listener
function keyboardHandler(e) {
  if (Date.now() - lastKey > safeDelay) {
    // checks time since last key press to prevent multiple presses causing snake to eat its neck
    if (e.keyCode === 38 && direction !== "down") {
      direction = "up";
    } else if (e.keyCode === 40 && direction !== "up") {
      direction = "down";
    } else if (e.keyCode === 37 && direction !== "right") {
      direction = "left";
    } else if (e.keyCode === 39 && direction !== "left") {
      direction = "right";
    }
  }
  lastKey = Date.now();
  if (e.keyCode == 32 && gameState === "PLAY") {
    changeState("PAUSE");
    clearInterval(myInterval);
  } else if (e.keyCode == 32 && gameState === "PAUSE") {
    changeState("PLAY");
    myInterval = setInterval(function () {
      gameLoop();
    }, gameSpeed);
    animate();
  }
}

document.addEventListener("keydown", keyboardHandler);

// GAME INITIALISATION
const gameBoard = document.getElementById("gameBoard");
const ctx = gameBoard.getContext("2d");

const startScreen = document.getElementById("startScreen");
const scoresScreen = document.getElementById("scoresScreen");
const optionsScreen = document.getElementById("optionsScreen");

const gameBoardHeightToWidthRatio = 20 / 23; // ie 20 wide, 23 high to account for score area

let orientationPortrait;
let tile;

let gameBoardWidthToLineWidthRatio = 100;

// Game area object
let gameArea = {
  checkOrientation: function () {
    if (window.innerWidth <= window.innerHeight) {
      orientationPortrait = true;
    } else {
      orientationPortrait = false;
    }
  },
  setGameBoardSize: function () {
    if (orientationPortrait === true) {
      gameBoard.height = window.innerWidth;
    } else {
      gameBoard.height = window.innerHeight;
    }
    while (gameBoard.height % 23 > 0) {
      gameBoard.height--;
    }
    gameBoard.width = Math.ceil(gameBoard.height * gameBoardHeightToWidthRatio);
  },
  setTileSize: function () {
    tile = gameBoard.width / 20;
  },
  draw: function () {
          // Score background
    ctx.fillStyle = "#001437";
    ctx.fillRect(0, 0, gameBoard.width, tile * 3);
    ctx.strokeStyle = "#fff";
    ctx.strokeRect(0, 0, gameBoard.width, tile * 3);
    // Background
    ctx.fillStyle = "#000";
    ctx.fillRect(0, tile * 3, gameBoard.width, gameBoard.height);
    if (walls) { // refactor this?
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = "red";
      ctx.lineWidth = gameBoard.width / gameBoardWidthToLineWidthRatio;
      ctx.strokeRect(0, tile * 3, gameBoard.width, gameBoard.height);
      
    } else {
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = "green";
      ctx.lineWidth = gameBoard.width / gameBoardWidthToLineWidthRatio;
      ctx.strokeRect(0, tile * 3, gameBoard.width, gameBoard.height);
    }

    ctx.closePath();
      ctx.restore();
  },
};

// Window reseize event listener
window.addEventListener("resize", function () {
  let formerFoodCoordinates = food;
  let formerSnakeCoordinates = snake;
  let formerSnakeArray = snake.array;
  let formerSparkArray = sparkArray;
  let formerTileSize = tile;

  gameArea.checkOrientation(); // could refactor?
  gameArea.setGameBoardSize();
  gameArea.setTileSize();

  food.x = (formerFoodCoordinates.x / formerTileSize) * tile;
  food.y = (formerFoodCoordinates.y / formerTileSize) * tile;

  snake.x = (formerSnakeCoordinates.x / formerTileSize) * tile;
  snake.y = (formerSnakeCoordinates.y / formerTileSize) * tile;

  let i;
  for (i = 0; i < formerSnakeArray.length; i++) {
    snake.array[i].x = (formerSnakeArray[i].x / formerTileSize) * tile;
    snake.array[i].y = (formerSnakeArray[i].y / formerTileSize) * tile;
  }
  for (i = 0; i < formerSparkArray.length; i++) {
    sparkArray[i].x = (formerSparkArray[i].x / formerTileSize) * tile;
    sparkArray[i].y = (formerSparkArray[i].y / formerTileSize) * tile;
  }
  if (gameState !== "PLAY") {
    animate();
  }
});

let wallsCheckBox = document.querySelector("#wallsCheckBox");
let audioCheckBox = document.querySelector("#audioCheckBox");

let newSnake = function () {
  snake = new Snake(15 * tile, 15 * tile, "rgba(251,51,219,1)");
};

let newFood = function () {
  food = new Food("rgba(128,255,0,1)");
};

let newGame = function () {
  gameArea.checkOrientation(); // could refactor?
  gameArea.setGameBoardSize();
  gameArea.setTileSize();
  collisionDetected = false;
  ateFood = false;
  sparkArray = [];
  direction = "left";
  scoreBoard.getCurrentHighScore();
  currentScore = 0;

  if (wallsCheckBox.checked) {
    walls = true;
  } else {
    walls = false;
  }

  if (audioCheckBox.checked) {
    gameAudio = true;
  } else {
    gameAudio = false;
  }

  newSnake();
  newFood();
  changeState("PLAY");
  animate();

  gamesPlayed++;
  myInterval = setInterval(function () {
    gameLoop();
  }, gameSpeed);
};

let mc = new Hammer(gameBoard);

// this will block the vertical scrolling on a touch-device while on the element
mc.get(touchGesture).set({ direction: Hammer.DIRECTION_ALL });

// listen to events...
mc.on(
  `${touchGesture}left ${touchGesture}right ${touchGesture}up ${touchGesture}down press`,
  function (e) {
    if (Date.now() - lastKey > safeDelay) {
      if (e.type === `${touchGesture}left` && direction !== "right") {
        direction = "left";
      } else if (e.type === `${touchGesture}up` && direction !== "down") {
        direction = "up";
      } else if (e.type === `${touchGesture}right` && direction !== "left") {
        direction = "right";
      } else if (e.type === `${touchGesture}down` && direction !== "up") {
        direction = "down";
      }
    }
    lastKey = Date.now();
  }
);

// Scoreboard object

let fontRatio = 0.058;

let scoreBoard = {
  update: function () {
    if (scoreBoardArray.includes(currentScore) || currentScore === 0) {
      return;
    } else {
      scoreBoardArray.push(currentScore);
      scoreBoardArray.sort((a, b) => b - a);
    }
  },
  getCurrentHighScore: function () {
    currentHighScore = parseInt(localStorage.getItem("top"));
  },
  updateHighScore: function () {
    if (currentScore > parseInt(highScore)) {
      localStorage.setItem("top", currentScore);
      highScore = currentScore;
    } else {
      return;
    }
  },
  resetArray: function () {
    scoreBoardArray.length = 0;
    currentScore = 0;
    score = 0;
    this.print();
  },
  resetHighScore: function () {
    localStorage.removeItem("top");
    highScore = 0;
    if (gamesPlayed > 0) {
      animate();
    }
  },
  getFont: function () {
    let fontSize = gameBoard.width * fontRatio;
    return (fontSize | 0) + "px Orbitron";
  },
  draw: function () {
    ctx.fillStyle = "#fff";
    ctx.font = this.getFont();
    ctx.fillText(currentScore, tile, tile * 2);
    ctx.fillText(`High score: ${highScore}`, gameBoard.width * 0.5, tile * 2);
  },
  print: function () {
    let highScoreAward = document.getElementById("highScoreAward");
    highScoreAward.innerHTML = "";
    if (currentScore > currentHighScore) {
      highScoreAward.innerHTML = `Congratulations!</br>You beat your previous high score by ${
        currentScore - currentHighScore
      }!`;
    }
    let scoreOl = document.querySelector("ol");
    scoreOl.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      let scoreLi = document.createElement("li");
      scoreLi.textContent = scoreBoardArray[i];
      scoreOl.appendChild(scoreLi);
    }
  },
};

// Game loop with conditions for which functions are called depending on game state
let gameLoop = function () {
  if (gameState === "PLAY") {
    snake.checkCollision();
    snake.checkAteFood();
    snake.advance();
    snake.update();
    scoreBoard.updateHighScore();
  } else {
    clearInterval(myInterval);
    return;
  }
};

// Game state selection
function changeState(state) {
  gameState = state;
  showScreen(state);
}

function makeVisible(screen) {
  screen.style.visibility = "visible";
}

function makeHidden(screen) {
  screen.style.visibility = "hidden";
}

function showScreen(state) {
  if (state === "PLAY") {
    makeHidden(startScreen);
    makeHidden(scoresScreen);
  }
  if (state === "GAMEOVER") {
    makeHidden(optionsScreen);
    makeVisible(scoresScreen);
  }
  if (state === "OPTIONS") {
    makeHidden(startScreen);
    makeHidden(scoresScreen);
    makeVisible(optionsScreen);
  }
  if (state === "MENU") {
    makeHidden(scoresScreen);
    makeHidden(optionsScreen);
    makeVisible(startScreen);
  }
}

// Snake constructor
class Snake {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.array = [{ x: this.x, y: this.y }];
  }

  get newHead() {
    if (direction === "left") {
      return { x: this.x - tile, y: this.y };
    }
    if (direction === "up") {
      return { x: this.x, y: this.y - tile };
    }
    if (direction === "right") {
      return { x: this.x + tile, y: this.y };
    }
    if (direction === "down") {
      return { x: this.x, y: this.y + tile };
    }
  }
  update() {
    this.x = this.newHead.x;
    this.y = this.newHead.y;
  }
  checkCollision() {
    for (let i = 0; i < this.array.length; i++) {
      if (
        this.newHead.x === this.array[i].x &&
        this.newHead.y === this.array[i].y
      ) {
        collisionDetected = true;
      }
      if (this.newHead.x > gameBoard.width - tile && direction === "right") {
        if (walls === true) {
          collisionDetected = true;
        } else {
          this.x = -tile;
        }
      }

      if (this.newHead.x < 0 && direction === "left") {
        if (walls === true) {
          collisionDetected = true;
        } else {
          this.x = gameBoard.width;
        }
      }

      if (this.newHead.y > gameBoard.height - tile && direction === "down") {
        if (walls === true) {
          collisionDetected = true;
        } else {
          this.y = 2 * tile;
        }
      }

      if (this.newHead.y < 3 * tile && direction === "up") {
        if (walls === true) {
          collisionDetected = true;
        } else {
          this.y = gameBoard.height;
        }
      }
    }
  }
  checkAteFood() {
    for (let i = 0; i < this.array.length; i++) {
      if (food.x === this.array[i].x && food.y === this.array[i].y) {
        newFood(); // if food is within snake body, spawns new food
      }
    }
    if (this.newHead.x === food.x && this.newHead.y === food.y) {
      ateFood = true;
    } else {
      ateFood = false;
    }
  }
  advance() {
    if (collisionDetected === true) {
      if (gameAudio === true) {
        gameOverSound.play();
      }
      scoreBoard.update();
      scoreBoard.print();
      changeState("GAMEOVER");
      return;
    } else if (ateFood === true) {
      newFood();
      this.array.unshift(this.newHead);
      currentScore++;
      if (gameAudio === true) {
        eatSound.play();
      }
      populateSparkArray();
    } else {
      this.array.unshift(this.newHead);
      this.array.pop();
    }
  }
  draw() {
    for (let i = 0; i < snake.array.length; i++) {
      ctx.save();
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 10;
      ctx.fillRect(snake.array[i].x, snake.array[i].y, tile, tile); // fills tiles occupied by snake array's coordinates

      ctx.restore();
      ctx.strokeStyle = "#000";
      ctx.strokeRect(snake.array[i].x, snake.array[i].y, tile, tile);
    }
  }
}

// Food constructor
class Food {
  constructor(color) {
    this.x = Math.floor(Math.random() * 20) * tile;
    this.y = Math.floor(Math.random() * 20 + 3) * tile; // taking account of the score area
    this.color = color;
  }

  draw() {
    ctx.save();
    ctx.beginPath();
    ctx.arc(
      this.x + (tile - 3) / 2,
      this.y + (tile - 3) / 2,
      tile / 2,
      0,
      2 * Math.PI,
      false
    );
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}

// Spark constructor
class Spark {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = randomNumber(tile / 10, tile / 4);
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.gravity = randomNumber(0.2, 0.4);
    this.friction = randomNumber(0.4, 0.6);
    this.ttl = 25;
    this.opacity = 1;
  }
  draw() {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle =
      this.color.substring(0, this.color.length - 2) + this.opacity + ")";
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 20;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}

Spark.prototype.update = function () {
  this.draw();

  if (this.x + this.dx > gameBoard.width - this.radius || this.x + this.dx < this.radius) {
    this.dx = -this.dx;
  }
  this.x += this.dx;

  if (this.y + this.dy  > gameBoard.height - this.radius) {
    this.dy = -this.dy * this.friction;
    this.ttl -= 1;
    this.opacity -= 1 / this.ttl;
  } else {
    this.dy += this.gravity;
  }
  this.y += this.dy;
};

// Spark array
function populateSparkArray() {
  for (let i = 0; i < snake.array.length && i < 150; i++) {
    let dx;
    let dy;
    let x = snake.array[0].x + tile / 2;
    let y = snake.array[0].y + tile / 2;
    if (direction === "up") {
      dx = randomNumber(-2, 2);
      dy = randomNumber(-5, -2);
    }
    if (direction === "down") {
      dx = randomNumber(-2, 2);
      dy = randomNumber(2, 3);
    }
    if (direction === "left") {
      dx = randomNumber(-4, -1);
      dy = randomNumber(-3, 3);
    }
    if (direction === "right") {
      dx = randomNumber(1, 4);
      dy = randomNumber(-3, 3);
    }

    sparkArray.push(new Spark(x, y, dx, dy));
  }
}

// Animation loop
function animate() {
  gameArea.draw();
  food.draw();
  scoreBoard.draw();
  snake.draw();

  sparkArray.forEach((spark, index) => {
    spark.update();
    if (spark.ttl === 0) {
      sparkArray.splice(index, 1);
    }
  });

  if (gameState === "PLAY") {
    requestAnimationFrame(animate);
  } else {
    return;
  }
}
