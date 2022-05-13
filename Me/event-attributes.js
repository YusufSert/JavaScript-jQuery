function checkUserName() {
  var el = document.getElementById("feedback");
  var el1 = document.getElementById("username");
  if (el1.value.length < 5) {
    var msg = "Username must be 5 characters or more";
  } else {
    var msg = "";
  }
  el.textContent = msg;
}
