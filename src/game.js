const fps = 30;

const rowsPadding = 2;
const rows = 8; 
const cols = 10;

const brickWidth = 80;
const brickHeight = 30;

const paddleWidth = 100;
const paddleHeight = 15;
const paddlePadding = 20;

var canvas, canvasContext;
var clearColour = "black";

var ball = new Ball();
var paddle = new Paddle();

var bricks = [];

window.onload = function(){
	canvas = document.getElementById("game");
	canvasContext = canvas.getContext('2d');

	// console.log(canvasContext);

	setInterval(GameLoop, fps/1000);
	Input.AddListeners();
	Start();
}

function GameLoop() {
	Update();
	DrawAll();
}

function Start() {
	SpawnBricks();

	ball.Start(canvas.width/2, canvas.height -  2 * paddleHeight - paddlePadding, 10, 0, -1);
	paddle.Start(canvas.width/2 - paddleWidth/2, canvas.height - paddleHeight - paddlePadding, paddleWidth, paddleHeight)
}

function Update() {
	ball.Update();
	paddle.Update();

	for(var i = 0; i < bricks.length; i++){
		if(!bricks[i]) continue;
		bricks[i].Update();

		ball.CollideBrick(bricks[i], function(){
			bricks.splice(i,1);
			i--;
			console.log("Break");
		});
	}

	ball.CollidePaddle(paddle);
}

function DrawAll() {
	Clear();

	for(var i = 0; i < bricks.length; i++){
		bricks[i].Draw();
	}

	ball.Draw();
	paddle.Draw();
}

function SpawnBricks() {
	for(var i = 0; i < cols; i++){
		for(var j = 0; j < rows; j++){
			var brick = bricks[Index(i, j)] = new Brick();
			brick.Start(i * brickWidth, (j + rowsPadding) * brickHeight, brickWidth, brickHeight);
		}
	}
}

function Clear(){
	Drawing.Rect(0,0, canvas.width, canvas.height, clearColour);
}

function Index(col, row) {
	return col + row * cols;
}

function Stop() {
	setTimeout(function(){
		bricks = [];
		Start();
	}, 2000);
}