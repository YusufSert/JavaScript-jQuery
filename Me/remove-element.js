// The element to remove
var removeEl = document.getElementsByTagName("li")[3];

// Its containing element

var containerEl = removeEl.parentNode;

// Removing the element

containerEl.removeChild(removeEl);
