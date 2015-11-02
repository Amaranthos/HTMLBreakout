var Input = {
	Mouse : {
		x: 0,
		y: 0
	},

	Keycodes : Object.freeze({
		Left: 37,
		Right: 39
	}),

	AddListeners : function() {
		document.addEventListener('keydown', function(){

		});
		document.addEventListener('keyup', function() {

		});
		canvas.addEventListener('mousemove', function() {
			var rect = canvas.getBoundingClientRect();
			var root = document.documentElement;
			Input.Mouse.x = event.clientX - rect.left - root.scrollLeft;
			Input.Mouse.y = event.clientY - rect.top - root.scrollTop;

			paddle.rect.x = Input.Mouse.x - paddle.rect.w/2;

			// ball.c.x = Input.Mouse.x;
			// ball.c.y = Input.Mouse.y;

			// ball.vX = 1;
			// ball.vY = 0;
		});
	},
};