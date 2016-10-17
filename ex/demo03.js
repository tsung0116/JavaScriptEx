function init() {
    var t = document.getElementById("title");
    var i, li, newA;
    for (i = 0; i < document.anchors.length; i++) {
        li = document.createElement("li");
        newA = document.createElement('a');
        newA.href = "#" + document.anchors[i].name;
        newA.innerHTML = document.anchors[i].text;
        li.appendChild(newA);
        t.appendChild(li);
    }
}