function Ball(){
	this.posX = 0;
	this.posY = 0;

	this.c = new Circle();

	this.vX = 0;
	this.vY = 0;

	this.vMax = 1;

	this.colour = "red";

	this.Start = function(x, y, r, vX, vY) {
		this.c.x = x;
		this.c.y = y;
		this.c.r = r;

		this.vX = vX;
		this.vY = vY;
	}

	this.Update = function() {
		this.c.x += this.vX;
		this.c.y += this.vY;

		if(this.c.x - this.c.r <= 0 || this.c.x + this.c.r  > canvas.width){
			this.vX *= -1;
		}

		if(this.c.y - this.c.r <= 0){
			this.vY *= -1;
		}

		if(this.c.y + this.c.r > canvas.height){
			Stop();
		}

		this.c.x = Calculus.Clamp(this.c.x, this.c.r, canvas.width - this.c.r);
		this.vX = Calculus.Clamp(this.vX, -this.vMax, this.vMax);
	}

	this.Draw = function() {
		Drawing.Circle(this.c.x, this.c.y, this.c.r, this.colour, true);
	}

	this.CollideBrick = function(brick, deleteFunc){
		if(Physics.CircleRectIntersect(this.c, brick.rect)){

			if(typeof(deleteFunc) == "function"){
				setTimeout(function(){
					deleteFunc.call(brick);
				}, 1000);
				brick.Break.call(brick);
			}


			// var adjChecks = true;

			if((this.c.x < brick.rect.x && this.vX > 0)|| (this.c.x > brick.rect.x + brick.rect.w && this.vX < 0)){
				this.vX *= -1;
				// adjChecks = false;
			}

			if((this.c.y < brick.rect.y && this.vY > 0) || (this.c.y > brick.rect.y + brick.rect.h && this.vY < 0)){
				this.vY *= -1;
				// adjChecks = false;
			}

			// if(adjChecks){
			// 	this.vX *= -1;
			// 	this.vY *= -1;
			// }
		}
	}

	this.CollidePaddle = function(paddle){
		if(Physics.CircleRectIntersect(this.c, paddle.rect)){
			this.vY = -this.vY;

			var cPaddleX = paddle.rect.x + paddle.rect.w/2;
			var dist = this.c.x - cPaddleX;
			this.vX = dist * 0.1;
		}
	}
}