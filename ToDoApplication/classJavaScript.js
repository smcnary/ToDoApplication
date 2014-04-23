"use strict";
//must put in global scope so it doesnt get reset 
var inputValue = [];

// Function accepts the input item, pushes it to the array, and then draws the list
function submitItem() {
    "use strict";
    inputValue.push(document.getElementById("todoInput").value);
    drawArray();
}
// Function draws the list
function drawArray() {
    var outputValue = document.getElementById("todoList");
    outputValue.innerHTML = "";
    for (var i = 0; i < inputValue.length; i++) {
        //draws the list starting with the down button
        outputValue.innerHTML += '<button id = "downButton' + i + '"type="button" onclick="moveDown(' + i + ') ; ">Down</button>'
        //up button
        + '<button id="upButton' + i + '"type="button" onclick="moveUp(' + i + ');">Up</button>'
        //hide button
        + '<button id="button' + i + '" type="button" onclick="hideList(' + i + ');">X</button>'
        //list
        + '<li id="item' + i + '" onclick="strikeThrough(\'item' + i + '\');">' + inputValue[i] + '</li>';
    }
}
// Function applies the "line-through" text style
function strikeThrough(listItemId) {
    "use strict";
    document.getElementById(listItemId).setAttribute("class", "strikethrough");
}
// Function applies the "none" display style
function hideList(count) {
    "use strict";
    var tempList = inputValue.splice(count, 1);
    drawArray();
}
// Function moves list item down 1
function moveDown(count) {
    "use strict";
    var tempList = inputValue.splice(count, 1)
    inputValue.splice(count + 1, 0, tempList)
    drawArray();
}
// Function moves list item up 1
function moveUp(count) {
    "use strict";
    var tempList = inputValue.splice(count, 1)
    inputValue.splice(count - 1, 0, tempList)
    drawArray();
}