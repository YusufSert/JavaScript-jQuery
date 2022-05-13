// Store the first list item in a variable

var firstItem = document.getElementById("one");
var itemContent = firstItem.innerHTML;

firstItem.innerHTML =
  '<a href="https://www.youtube.com/watch?v=U31QKdXGjGU">' +
  itemContent +
  "</a>";
