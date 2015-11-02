var Drawing = {
	Rect : function(x, y, w, h, colour){
		canvasContext.fillStyle = colour;
		canvasContext.fillRect(x, y, w, h);
	},

	Circle : function(x, y, r, colour){
		canvasContext.fillStyle = colour;
		canvasContext.beginPath();
		canvasContext.arc(x, y, r, 0, 2*Math.PI);
		canvasContext.fill();
	},
};
