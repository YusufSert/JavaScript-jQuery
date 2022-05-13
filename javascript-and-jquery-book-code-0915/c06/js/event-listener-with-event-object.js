function checkLength(e, minLength) {
  var el, elMsg;
  // If event object doesn't exist
  if (!e) {
    e = window.event;
  }
  // Get the target of event
  el = e.target || e.srcElement;
  // Get its next sibling
  elMsg = el.nextSibling;

  //If length is too short set msg
  if (el.value.length < minLength) {
    elMsg.innerHTML = "Username must be " + minLength + "characters or more";
  } else {
    elMsg.innerHTML = "";
  }
}

var elUserName = document.getElementById("username");
// If event listener supported
if (elUserName.addEventListener) {
  elUserName.addEventListener(
    "blur",
    function (e) {
      checkLength(e, 5);
    },
    false
  );
} else {
  elUserName.attachEvent("onblur", function (e) {
    checkLength(e, 5);
  });
}
