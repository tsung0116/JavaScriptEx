function init() {
    function onMouseUp() {
        var s1 = document.getElementById("show1");
        var s2 = document.getElementById("show2");
        var wTA = document.activeElement;
        var selection = wTA.value.substring(wTA.selectionStart, wTA.selectionEnd);
         
        s1.innerHTML = wTA.id;
        s2.innerHTML = selection;
    }
     
    document.getElementById("demo1").addEventListener("mouseup", onMouseUp, false);
    document.getElementById("demo2").addEventListener("mouseup", onMouseUp, false);
}