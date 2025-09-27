const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

// Game config
const paddleWidth = 12;
const paddleHeight = 90;
const ballSize = 14;
const playerX = 18;
const aiX = canvas.width - paddleWidth - 18;
const paddleSpeed = 5;
const ballSpeed = 5;

// Game state
let playerY = canvas.height / 2 - paddleHeight / 2;
let aiY = canvas.height / 2 - paddleHeight / 2;
let ballX = canvas.width / 2 - ballSize / 2;
let ballY = canvas.height / 2 - ballSize / 2;
let ballVelX = ballSpeed * (Math.random() > 0.5 ? 1 : -1);
let ballVelY = ballSpeed * (Math.random() > 0.5 ? 1 : -1);

let playerScore = 0;
let aiScore = 0;

// Player paddle follows mouse
canvas.addEventListener('mousemove', function(e) {
    const rect = canvas.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    playerY = mouseY - paddleHeight / 2;

    // Clamp within canvas
    if (playerY < 0) playerY = 0;
    if (playerY + paddleHeight > canvas.height) playerY = canvas.height - paddleHeight;
});

// Basic AI: moves toward ball
function moveAI() {
    const centerAI = aiY + paddleHeight / 2;
    const targetY = ballY + ballSize / 2;
    if (centerAI < targetY - 10) {
        aiY += paddleSpeed;
    } else if (centerAI > targetY + 10) {
        aiY -= paddleSpeed;
    }
    // Clamp
    if (aiY < 0) aiY = 0;
    if (aiY + paddleHeight > canvas.height) aiY = canvas.height - paddleHeight;
}

// Ball collisions
function ballCollision() {
    // Top/bottom walls
    if (ballY <= 0 || ballY + ballSize >= canvas.height) {
        ballVelY *= -1;
    }

    // Left paddle
    if (
        ballX <= playerX + paddleWidth &&
        ballY + ballSize > playerY &&
        ballY < playerY + paddleHeight
    ) {
        ballVelX *= -1;
        // Add some randomness
        ballVelY += (Math.random() - 0.5) * 2;
        ballX = playerX + paddleWidth; // prevent sticking
    }

    // Right paddle (AI)
    if (
        ballX + ballSize >= aiX &&
        ballY + ballSize > aiY &&
        ballY < aiY + paddleHeight
    ) {
        ballVelX *= -1;
        ballVelY += (Math.random() - 0.5) * 2;
        ballX = aiX - ballSize; // prevent sticking
    }

    // Score
    if (ballX < 0) {
        aiScore++;
        resetBall(-1);
    }
    if (ballX + ballSize > canvas.width) {
        playerScore++;
        resetBall(1);
    }
}

function resetBall(direction) {
    ballX = canvas.width / 2 - ballSize / 2;
    ballY = canvas.height / 2 - ballSize / 2;
    ballVelX = ballSpeed * direction;
    ballVelY = ballSpeed * (Math.random() > 0.5 ? 1 : -1);
}

function draw() {
    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw net
    ctx.strokeStyle = '#fff';
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(canvas.width/2, 0);
    ctx.lineTo(canvas.width/2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw paddles
    ctx.fillStyle = '#0af';
    ctx.fillRect(playerX, playerY, paddleWidth, paddleHeight);
    ctx.fillStyle = '#fa0';
    ctx.fillRect(aiX, aiY, paddleWidth, paddleHeight);

    // Draw ball
    ctx.fillStyle = '#fff';
    ctx.fillRect(ballX, ballY, ballSize, ballSize);

    // Draw scores
    ctx.font = '32px Arial';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.fillText(playerScore, canvas.width / 4, 50);
    ctx.fillText(aiScore, canvas.width * 3 / 4, 50);
}

// Main game loop
function gameLoop() {
    moveAI();

    ballX += ballVelX;
    ballY += ballVelY;

    ballCollision();
    draw();

    requestAnimationFrame(gameLoop);
}

// Start
gameLoop();