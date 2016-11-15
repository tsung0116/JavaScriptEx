var points = [ // An array with 2 elements.
	{x:0, y:0}, // Each element is an object.
	{x:1, y:1}
];

points.dist = function() { // Define a method to compute distance between points
	var p1 = this[0];      // First element of array we're invoked on
	var p2 = this[1];      // Second element of the "this" object
	var a = p2.x-p1.x;     // Difference in X coordinates
	var b = p2.y-p1.y;     // Difference in Y coordinates
	return Math.sqrt(a*a + // The Pythagorean theorem
					b*b);  // Math.sqrt() computes the square root	
};
points.dist()