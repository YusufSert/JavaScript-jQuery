var score = 75;
var msg = "";

function congralutale() {
  msg += "Congratulations! ";
}

if (score >= 50) {
  congralutale(), (msg += "Proceed to the next round.");
}

var el = document.getElementsById("answer");
el.innerHTML = msg;
