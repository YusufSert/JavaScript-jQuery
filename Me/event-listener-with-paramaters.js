var elUserName = document.getElementById("username");
var elMsg = document.getElementById("feedback");

function checkUserName(minLength) {
  if (elUserName.value.length < minLength) {
    // Set the error message
    elMsg.textContent = "Username must be" + minLength + "characters or more";
  } else {
    elMsg.innerHTML = "";
  }
}

elUserName.addEventListener(
  "blur",
  function () {
    checkUserName(5);
  },
  false
);
