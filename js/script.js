var id = null;
var downLimit = document.getElementById("myContainer").offsetHeight - document.getElementById("myAnimation").offsetHeight;

function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 0;
  var mv = "down"
  clearInterval(id);
  id = setInterval(frame, 20);
  function frame() {
    if (pos > downLimit) {
        mv = "up";
    }
    if (pos < 0) {
        mv = "down";
    }

    if (mv == "up") {
      pos--;
      elem.style.top = pos + "px";
    } else {
      pos++;
      elem.style.top = pos + 'px';
    }
  }
}
myMove();