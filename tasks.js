function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value;

    if (text === "") return;

    let li = document.createElement("li");
    li.innerText = text;

    li.onclick = function () {
        li.classList.toggle("done");
    };

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
