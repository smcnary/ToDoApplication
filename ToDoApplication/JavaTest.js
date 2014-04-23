//document.getElementById("todoInput").value;
//document.getElementById("todoList").innerHTML;

"use strict";
//must put in global scope so it doesnt get reset
var toDoCounter = 0; 
var inputValue = [];

function submitItem() {
    "use strict";
    inputValue.push(document.getElementById("todoInput"));
    //var inputValue = document.getElementById("todoInput");
    var outputValue = document.getElementById("todoList");

    outputValue.innerHTML += '<span id="button' + toDoCounter + '" onclick="hideList(\'item' + toDoCounter + '\', \'button' + toDoCounter + '\');">X</span>'
        + '<li id="item' + toDoCounter + '" onclick="strikeThrough(\'item' + toDoCounter + '\');">'
        + inputValue[toDoCounter].value + '</li>';
    toDoCounter++;
}
function strikeThrough(listItemId) {
    "use strict";
    document.getElementById(listItemId).setAttribute("class", "strikethrough");
}
function hideList(listItemId, buttonItemId) {
    "use strict";
    document.getElementById(listItemId).setAttribute("class", "hideList");
    document.getElementById(buttonItemId).setAttribute("class", "hideList");
}