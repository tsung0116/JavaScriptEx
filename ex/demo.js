function run1() {
    var s = document.getElementById("content");
    s.innerHTML = document + "<br / >" + 
                  Node + "<br / >" + 
                  Element + "<br / >" + 
                  Event + "<br / >" + 
                  window + "<br / >" + 
                  screen + "<br / >" + 
                  navigator + "<br / >" + 
                  history + "<br / >" + 
                  location + "<br / >" + 
                  console + "<br / >" +
                  document.getElementById("content");    
}

function run2() {
    var c = randomColor();
    document.bgColor = c;
}
 
function randomColor() {
    var c1 = (Math.random() * 1000) % 256;
    var c2 = (Math.random() * 1000) % 256;
    var c3 = (Math.random() * 1000) % 256;
    c1 = hex(Math.floor(c1));
    c2 = hex(Math.floor(c2));
    c3 = hex(Math.floor(c3));
    return "#" + c1 + c2 + c3;
}
 
function hex(n) {
    var result = "";
    var temp, count;
    while (n > 16) {
        count = 1;
        /* while (n > exp(16, count)) {
            count += 1;
        }
        count -= 1; */
        temp = n / exp(16, count);
        temp = Math.floor(temp);
        result += hexLetter(temp);
        n -= exp(16, count) * temp;
    }
    if (n == 16) {
        result += "1";
        n -= 16;
    }
    result += hexLetter(n);
     
    return result;
}
 
function hexLetter(n) {
    if (n >= 16 || n < 0) {
        return "";
    }
    else {
        switch (n) {
            case 10:
                return "A";
            case 11:
                return "B";
            case 12:
                return "C";
            case 13:
                return "D";
            case 14:
                return "E";
            case 15:
                return "F";
            default:
                return "" + n;
        }
    }
}
 
function exp(x, y) {
    var result = 1;
    while (y > 0) {
        result *= x;
        y -= 1;
    }
     
    return result;
}