'use strict';

//Global scope
var x = 10;

function func1() {
	//Local scope (only in function block)
    var x = 20;
    console.log(x);
}
 
function func2() {
    console.log(x);
}
 
func1();  //20
func2();  //10
 
console.log(x); //10


//No block scope (No such thing as block scope in JavaScript (ES5; ES6 introduces let))
var y = 50;
function func3() {
    if(true) {
        var y = 100;
    }
    return y;
}
 
console.log(func3()); //100


//ReferenceError
/*
function func4() {
    console.log(z);
}
 
func4();
*/

/*
u = 17;
console.log(u);
*/

//Hoisting
function func5() {
    console.log(m);    //undefined
    var m = 18;
    console.log(m);    //18
}
 
func5();


//Closure
var a = 1;

var six = (function() {
  var a = 6;

  return function() {
    // JavaScript "closure" means I have access to 'a' in here,
    // because it is defined in the function in which I was defined.
    console.log(a); // 6
  };
})();


//Prototype-based scope resolution
var a = 1;

function seven() {
  this.a = 7;
}

// [object].prototype.property loses to
// [object].property in the lookup chain. For example...

// Won't get reached, because 'a' is set in the constructor above.
seven.prototype.a = -1;

// Will get reached, even though 'b' is NOT set in the constructor.
seven.prototype.b = 8;

console.log(new seven().a); //7
console.log(new seven().b); //8


//Global+Local: JavaScript always moves variable declarations (not initializations) to the top of the scope
var x = 5;

(function () {
    console.log(x);  //undefined
    var x = 10;
    console.log(x);  //10
})();

//equivalent to:
var x = 5;

//immediate function
(function () {
    var x;
    console.log(x);
    x = 10;
    console.log(x); 
})();


//Catch clause-scoped variable

var e = 5;
console.log(e);       //5
try {
    throw 6;
} catch (e) {
    console.log(e);  //6
}
console.log(e);      //5