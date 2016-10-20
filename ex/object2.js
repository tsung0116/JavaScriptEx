var Presenter = {};

Presenter.SnapPoint = {
    param1 : 3,
    param2 : 'endpoint',
    param3 : {x : 88, y : 88},
    f1 : function() {
        // 呼叫私有方法
        this._f2();
    },
    // 你也許會使用底線來暗示這是個私有方法
    _f2 : function() {
        // ...
		console.log('_f2 is called');
    }
};

//Encaplution by immediate function
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