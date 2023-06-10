function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    var data = ev.dataTransfer.getData("text");
    document.getElementById(data).style.background = "red";
    document.getElementById("message").textContent = ""
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    document.getElementById("message").textContent = "Item is dragged and dropped successfully!"
    document.getElementById(data).style.background = "green";
    document.getElementById(data).style.color = "white";
}