function Paddle() {
	this.rect = new Rect();

	this.vX = 0;
	this.a = 6;
	this.colour = "blue";

	this.Start = function(x, y, w, h){
		this.rect.x = x;
		this.rect.y = y;
		this.rect.w = w;
		this.rect.h = h;
	}

	this.Update = function() {
		this.rect.x = Calculus.Clamp(this.rect.x, 0, canvas.width - this.rect.w);
	}

	this.Draw = function(){
		Drawing.Rect(this.rect.x, this.rect.y, this.rect.w, this.rect.h, this.colour);
	}

	this.KeyHeld = function(event, bool){
		if(event.keyCode == this.Keycode.Left){
			this.Keyheld.Left = bool;
		}

		if(event.keyCode == this.Keycode.Right){
			this.Keyheld.Right = bool;	
		}
	}
}