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

	this.Break = function(deleteFunc) {
		this.isBroken = true;

		var i = 10;
		var self = this;

		// this has to be saved as 'this' changes
		//	when in the generator
		// i, deleteFunc and self are saved in BreakAnimators state
		var BreakAnimator = function() {
			self.rect.x--;
			self.rect.y--;
			self.rect.w+=2;
			self.rect.h+=2;

			// i--;

			// if(i <= 0) {
			// 	// Delete self
			// 	// deleteFunc(self);
			// }else{
			// 	// Queue next animation
			// 	setTimeout(BreakAnimator, 100);				
			// }
		}

		function CurryTest(a, b) {
			console.log("CurryTest");
			console.log(a);
			console.log(b);
		}
		Calculus.Curry(CurryTest, 1)(5);

		// Start animation
		BreakAnimator();
	}
}