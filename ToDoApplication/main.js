//document.getElementById("todoInput").value;
//document.getElementById("todoList").innerHTML = x;

function submitItem() {
    document.getElementById("todoList").innerHTML += "<li id='lists' onclick='strikeThrough();'>" + document.getElementById("todoInput").value + "</li>";
}
function strikeThrough() {
    document.getElementById("lists").style.textDecoration = "line-through";
}