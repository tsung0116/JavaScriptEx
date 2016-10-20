//immediate function

var a = 10;
if (a<100){
    var b = 20;
}
console.log(b);    // 20 //not undefined

var a = 10;
(function() {
    var a = 20;
})();
console.log(a);    // 10


(function() {
    var param1 = 3;
    var param2 = 'endpoint';
    var param3 = {x : 88, y : 88};

    function _f2() {
        console.log('I am here!');
    };
})();

console.log(param1);   // undefined

_f2();   // undefined


var module;
(function() {
    var result = {
        a : 10,
    f : function() {
        console.log(this.a);
    }
    }
  
  module = result;
})();


var module;
(function(export) { // export定義函式接收的參數

    var result = {
        a : 10,
    f : function() {
        console.log(this.a);
    }
    }
  
  export.module = result;
})(window);   // 在這裡傳入的值會成為函式的參數


var module = (function() {
    var result = {
        a : 10;
    f : function() {
        console.log(this.a);
    }
    }
  
  return result;
})();


Presenter.SnapPoint = (function() {
    var param1 = 3;
    var param2 = 'endpoint';
    var param3 = {x : 88, y : 88}; // param3未被揭露，無法由模組以外取得，是真正的私有屬性

    function f1() { // f1呼叫內部的_f2方法

        _f2();
    };
    
    function _f2() { // 因為沒有在return中回傳，所以_f2成為真正的私有方法

        console.log('_f2 is called'); // ...

    };

    return {
        param1 : param1, // 揭露param1成為公開屬性

        f1 : f1, // 揭露f1成為公開方法

        getParam2 : function() { // 也可以設定getter，讓屬性param2成為唯讀

              return param2;
        }
    };
})();