function Brick() {
	this.rect = new Rect();

	this.colour = "white";

	this.isBroken = false;

	this.Start = function(x, y, w, h) {
		this.rect.x = x;
		this.rect.y = y;
		this.rect.w = w;
		this.rect.h = h;

	}

	this.Update = function() {
	}

	this.Draw = function() {
		Drawing.Rect((this.rect.x==0)?this.rect.x+1:this.rect.x, 
				(this.rect.y==0)?this.rect.y+1:this.rect.y, 
				(this.rect.x==0)?brickWidth-2:brickWidth-1,
				(this.rect.y==0)?brickHeight-2:brickHeight-1, 
				this.colour);
	}

	this.DrawBreak = function(){
		this.rect.x--;
		this.rect.y--;
		this.rect.w+=2;
		this.rect.h+=2;

		window.requestAnimationFrame(this.DrawBreak.call(this));
	}

	this.Break = function() {
		if(!this.isBroken) {
			this.isBroken = true;
		}

		// window.requestAnimationFrame(this.DrawBreak.call(this));
	}
}