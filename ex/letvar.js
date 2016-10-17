"use strict";

for (var i = 0; i < 5; ++i) {
  setTimeout(function () {
    console.log(i); // 輸出 '5' 五次
  }, 100);  
}

for (let i = 0; i < 5; ++i) {
  setTimeout(function () {
    console.log(i); // 輸出 0, 1, 2, 3, 4
  }, 100);  
}