//document.getElementById("todoInput").value;
//document.getElementById("todoList").innerHTML = x;

function submitItem() {
    document.getElementById("todoList").innerHTML += "<li onclick='strikeThrough();'>" + document.getElementById("todoInput").value + "</li>";
}
function strikeThrough() {
    event.target.style.textDecoration = "line-through";
}