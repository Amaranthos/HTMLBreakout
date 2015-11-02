var Calculus = {
	Clamp : function(val, min, max) {
		if(min > max){
			console.warn("Can not clamp when min is greater than max");
		}

		if(val < min){
			return min;
		}

		if(val > max){
			return max;
		}

		return val;
	},

	Curry : function(func) {
		var a = Array.prototype.splice.call(arguments, 1);
		return function() {
			var b = Array.prototype.splice.call(arguments, 0);
			return func.apply(this, a.concat(b));
		}
	}
}