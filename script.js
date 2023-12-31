const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === "") {
        alert("Can't add empty task.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener(("click"), (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
});

// function to save the data in browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// function to copy the data from local Storage to listContainer
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();
