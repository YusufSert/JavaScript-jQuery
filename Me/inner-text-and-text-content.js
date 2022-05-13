var firstItem = document.nodeValue.getElementById("one");
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.textContent;

// Show the content of these two properties at the end of the list

var msg = "<p>textConten: " + showTextContent + "</p>";
msg += "<p>innerText: " + showInnerText + "</p>";
var el = document.getElementById("scriptResult");
el.innerHTML = msg;

firstItem.textContent = "sourdough bread";
