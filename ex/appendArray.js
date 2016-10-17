//

var arr = [1, 2, 3, 4, 5];
var arr2 = [];

arr.push(6);                // average
arr[arr.length] = 6;        // best
arr2 = arr.concat([6]);     // worst


arr.unshift(0);             // slow 
[0].concat(arr);            // fast


var items = ['one', 'two', 'three', 'four'];
items.splice(items.length / 2, 0, 'hello');