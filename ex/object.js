//create an object
var obj = new Object();

//equivalent to:
var obj = {};


//Object is the collection of properties and corresponding values (key-value pairs).
//An object is a hash table.

//Object individuation (add or delete properties)
obj.x = 10;
console.log(obj.x); //10
delete obj.x;
console.log(obj.x); //undefined

//built-in properties cannot be deleted
var arr = [];
console.log(arr.length); //0
console.log(delete arr.length);  //false


//create an object with given values of properties
 var obj1 = {
    x : 10,
    y : 20
};
console.log(obj1.x);          //10
console.log(obj1.y);          //20


//in operator 
console.log('x' in obj1);  //true

for(var prop in obj1) {
    console.log(prop);
    console.log(typeof prop);
	console.log(obj1.prop);
}
/* output
x
string
undefined
y
string
undefined
*/


//[] operator
var obj2 = {};
obj2['x'] = 10;
console.log(obj2.x);     //10
console.log(obj['x']);   //10

for(var prop in obj1) {
    console.log(prop + ': ', obj1[prop]);
}
/* output
x:  10
y:  20
*/

//[] operator can also be used when the name of a property contains . or space 
 var obj3 = {
    'openhome.cc': 'OpenHome',
};

//TypeError: Cannot read property 'cc' of undefined
// console.log(obj3.openhome.cc);

console.log(obj3['openhome.cc']);         //OpenHome
console.log(delete obj3['openhome.cc']);  //true
console.log('openhome.cc' in obj3);       //false


//properties
var obj = {};
console.log(obj.x ? 'has x' : 'has no x'); //has no x
obj.x = 10;
console.log(obj.x ? 'has x' : 'has no x'); //'has x'


//
function doSome(option) {    
    return {
        x : option.x || 1,
        y : option.y || 2,
        z : option.z || 3
    };
}
 
function log(obj) {
    for(var p in obj) {
        console.log(p + ': ' + obj[p]);
    }
}
 
var processed = doSome({
    x : 10,
    y : 20
});
 
log(processed);

/* output
x: 10
y: 20
z: 3
*/


//valueOf()
var obj = {
    valueOf : function() {
		return 100;
    }
};

console.log(100 + obj);   //200
console.log(obj > 100);   //false
console.log(obj >= 100);  //true

//toString()
var caterpillar = {
    name : 'Justin Lin',
    url  : 'openhome.cc',
    toString : function() {
        return '[name: ' + this.name + ', url: ' + this.url + ']';
    }
};

console.log('My info: ' + caterpillar);  //My info: [name: Justin Lin, url: openhome.cc]





var man1 = {
...     name : 'Justin Lin',
...     url  : 'openhome.cc',
...     equals : function(other) {
.....         return (this.name === other.name) &&  (this.url === other.url);
.....     }
... };
undefined
> var man2 = {
...     name : 'Justin Lin',
...     url  : 'openhome.cc',
...     equals : function(other) {
.....         return (this.name === other.name) &&  (this.url === other.url);
.....     }
... };
undefined
> man1 === man2;
false
> man1.equals(man2);
true



function equals(other) {
    return (this.name === other.name) &&  (this.url === other.url);
}
 
var man1 = {
    name : 'Justin Lin',
    url  : 'openhome.cc',
    equals : equals
};
 
var man2 = {
    name : 'Justin Lin',
    url  : 'openhome.cc',
    equals : equals
};
 
var man3 = {
    name : 'Justin Lin',
    url  : 'openhome.cc',
    equals : equals
};
 
console.log(man1.equals(man2));  // true
console.log(man1.equals(man3));  // true



function Man(name, url) {
    this.name = name;
    this.url = url;
}
 
Man.prototype.equals = function(other) {
    return (this.name === other.name) &&  (this.url === other.url);
};
 
var man1 = new Man('Justin Lin', 'openhome.cc');
var man2 = new Man('Justin Lin', 'openhome.cc');
var man3 = new Man('Justin Lin', 'openhome.cc');
 
console.log(man1.equals(man2));
console.log(man1.equals(man3));



'use strict';
var obj = {
    x : 10,
    x : 20,
    y : 30
};
EMCAScript 5 之後，在 Obje


