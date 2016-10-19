//Number wraps up number

var number = 10;
console.log(typeof number);       //number

console.log(number.toString(2)); //1010
console.log((10).toString(2));   //1010

console.log(typeof new Number(10)); //object


//String wraps up string

console.log(typeof 'caterpillar');                //string

'caterpillar'.toUpperCase();                      //CATERPILLAR

console.log(typeof  new String('caterpillar'));   //object



//Parse

console.log(parseInt('10 years old...XD'));    //10
console.log(parseFloat('3.14159......'));      //3.14159
console.log(parseInt('0x10'));                 //16
console.log(parseInt('010'));                  //10
console.log(parseInt('010', 10));              //10
console.log(parseInt('010', 8));               //8



console.log('6' + '2');         //62
console.log('6' - '2');         //4
console.log('6' * '2');         //12
console.log('6' / '2');         //3

console.log(1 + true);           //2
console.log(1 + false);          //1
console.log(1 + undefined);      //NaN
console.log(1 + NaN);            //NaN
console.log(1 + "");             //1
console.log(1 + null);           //1


var o = {};
console.log(o.x ? 'has x' : 'has no x');   //has no x
o.x = 10;
console.log(o.x ? 'has x' : 'has no x');   //has x


function hasX(obj) {
    return typeof(obj.x) !== 'undefined';
}
 
console.log('has x? ' + hasX({}));        // has x? false
console.log('has x? ' + hasX({x : 10}));  // has x? true


console.log('' == 0);                  //true
console.log('' === 0);                 //false
console.log(null == undefined);        //true
console.log(null === undefined);       //false
console.log(1 == true);                //true
console.log(1 === true);               //false

/*
> [] + [];
''
> [] + {};
'[object Object]'
> {} + [];
0
> {} + {};
NaN
>
*/


