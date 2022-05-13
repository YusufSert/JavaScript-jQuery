var list = document.getElementsByTagName("ul")[0];
console.log(list);

// Add new item to end of the list

var newItemLast = document.createElement("li");
console.log(newItemLast);

var newTextLast = document.createTextNode("cream");
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

var newItemFirst = document.createElement("li");
var newTextFirst = document.createTextNode("kale");
newItemFirst.appendChild(newTextFirst);
// add element start of the list =  add before first child
list.insertBefore(newItemFirst, list.firstChild);

// ALl <li> elements
var listItems = document.querySelectorAll("li");

// add a class of cool to all list items

var i;

for (i = 0; i < listItems.length; i++) {
  listItems[i].className = "cool";
}

// add number of items in the list to the heading

var heading = document.querySelector("h2"); // h2 element
console.log(heading);
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + "<span>" + totalItems + "</span>";
heading.innerHTML = newHeading;
