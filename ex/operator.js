
> 1 + 2 + '3';
'33'
> '1' + 2 + 3;
'123'
> '1' + (2 + 3);
'15'



> var date = new Date();
undefined
> date.valueOf();
1397699040389
> date > 1397699040389;
false
> date > 1397699040388;
true
> date > new Date();
false
> new Date() > date;
true
> var obj = {
...     valueOf : function() {
.....       return 100;
.....   }
... };
undefined
> 1 + obj;
101
> 1 > obj;
false


> var o1 = {};
undefined
> var o2 = {};
undefined
> o1.valueOf();
{}
> o2;
{}
> o1 >= o2;
true
> o1 > o2;
false
> o1 === o2;
false


//in

console.log('x' in {x : 10});  //true



> [] instanceof Array;     //true
> [] instanceof Object;    //true
> [] instanceof Date;      //false

> typeof 1;
'number'
> typeof '';
'string'
> typeof true;
'boolean'
> typeof function() {};
'function'
> typeof undefined;
'undefined'
> typeof {};
'object'
> typeof null;
'object'


//Short-Circuit Evaluation

> 'left' && 'right';
'right'
> 0 && 'right';
0
> 'left' && 0;
0


> 'right' || 'left';
'right'
> 0 || 'left';
'left'
> 'right' || 0;
'right'


function doSome(arg) {
    var option = arg ? arg : 'default';
    return option;
}
 
console.log(doSome());              // default
console.log(doSome('caterpillar')); // caterpillar


//void
 void 0;
undefined
> typeof void 0;
'undefined'





