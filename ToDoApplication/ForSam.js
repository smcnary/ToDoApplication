//document.getElementById("todoInput").value;
//document.getElementById("todoList").innerHTML;

"use strict";
var toDoCounter = 0; //must put in global scope so it doesnt get reset

function submitItem() {
    "use strict";
    toDoCounter++;
    var inputValue = document.getElementById("todoInput");
    var outputValue = document.getElementById("todoList");

    outputValue.innerHTML += '<li id="item' + toDoCounter + '" onclick="strikeThrough(\'item' + toDoCounter + '\');">'
        + inputValue.value + '</li>';
}
function strikeThrough(listItemId) {
    "use strict";
    document.getElementById(listItemId).setAttribute("class", "strikethrough");
}