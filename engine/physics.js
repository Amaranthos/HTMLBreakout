var Physics = {
	DistanceSquared : function(a1, a2, b1, b2){
		var dA = b1 - a1;
		var dB = b2 - a2;

		return(dA*dA + dB * dB);
	},

	RectRectIntersect : function(a, b) {
		return (a.x < b.x + b.w &&
				a.x + a.w > b.x &&
				a.y < b.y + b.h &&
				a.y + a.h > b.y);
	},

	CircleRectIntersect : function(a, b){
		var cX = 0, cY =0;

		if(a.x < b.x){
			cX = b.x;
		}
		else if (a.x > b.x + b.w){
			cX = b.x + b.w;
		}
		else{
			cX = a.x;
		}

		if(a.y < b.y){
			cY = b.y;
		}
		else if (a.y > b.y + b.h){
			cY = b.y + b.h;
		}
		else{
			cY = a.y;
		}

		if(Physics.DistanceSquared(a.x, a.y, cX, cY) < a.r * a.r){
			return true;
		}

		return false;
	},
};