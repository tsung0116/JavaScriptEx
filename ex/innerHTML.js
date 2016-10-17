function run() {
    var s = ["Choice. The problem is choice.",
             "There is no spoon.",
             "Because I choose to."];
    var c = [];
    var i;
    for (i = 0; i < 3; i++) {
        c[i] = document.getElementById("child" + (i + 1));        
    }
    for (i = 0; i < 3; i++) {
        c[i].innerHTML = s[i];
    }
}