'use strict'

// ReferenceError: x is not defined
// x = 12.858; 

// Primitive
// number
var n = 8.88;
console.log(typeof n);

// string
var s = "Hello";
console.log(typeof s);

// boolean
var b = true;
console.log(typeof b);

// Not a Number (NaN)
console.log(typeof NaN);  // number
var test = isNaN (1/'three');
console.log (test);
test = (NaN === NaN);  //false
console.log (test);
test = isNaN('caterpillar'); //true
test = isNaN(undefined);     //true
test = isNaN('0');           //false

function isRealNaN(value) {
    return value !== value;
}
 
console.log(isRealNaN(NaN));           // true
console.log(isRealNaN(1/'three'));     // true
console.log(isRealNaN('caterpillar')); // false
console.log(isRealNaN(undefined));     // false

function isRealFiniteNumber(value) {
    return typeof value === 'number' && isFinite(value);
}
 
console.log(isRealFiniteNumber(NaN));       // false
console.log(isRealFiniteNumber(Infinity));  // false
console.log(isRealFiniteNumber('93'));      // false
console.log(isRealFiniteNumber(93));        // true


// Composite
// Object
console.log(typeof new Object()); //object
console.log(typeof {});           //object
console.log(typeof []);           //object

var x1 = {};
var x2 = [];
console.log(x1 instanceof Object);          //true
console.log(x2 instanceof Object);          //true
console.log(x1 instanceof Array);           //false
console.log(x2 instanceof Array);           //true

// Null means that the variable value is defined and set to null (has no value).
var x = null;
console.log(x);                //null
console.log(x === null);       //true

//weird
console.log(typeof null);             //object
console.log(null instanceof Object);  //false


// Undefined means that the variable value has not been defined; it is not known what the value is.
/*undefined is just a variable that can be re-assigned by the user: writing undefined = 'a'; 
will cause your code to no longer do what you think it does. 
Using typeof is better and also works for variables (not just properties) that haven't been declared.
*/

var u;

if (u === undefined) {
    console.log("x is undefined");
} else {
    console.log("x is defined");
}

console.log(u === undefined);    //true 
console.log(u);                  //undefined               
console.log(typeof u);           //undefined

var u2 = null;
var u3;
console.log(u === u2);            //false 
console.log(u === u3);            //true
