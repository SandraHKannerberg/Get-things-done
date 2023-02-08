const todoList = document.querySelector(".todos ul");
const todoInput = document.querySelector(".form input");
const btn = document.querySelector(".form button");

renderTodos();

btn.addEventListener("click", addTodos);

function renderTodos() {
    todoList.innerHTML = "";

    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos) {
        for (const todo of todos) {
            const li = document.createElement("li");
         
            const liText = document.createTextNode(todo);
            li.appendChild(liText);

            const btnContainer = document.createElement("div");
            btnContainer.classList.add("btnContainer");
            li.appendChild(btnContainer);

            const btnCheck = document.createElement("button");
            btnCheck.classList.add("btnCheck");
            btnContainer.appendChild(btnCheck);

            const checkMark = document.createElement("i");
            checkMark.classList.add("fa-solid", "fa-check");
            btnCheck.appendChild(checkMark);

            const btnDelete = document.createElement("button");
            btnDelete.classList.add("btnDelete");
            btnContainer.appendChild(btnDelete);

            const xMark = document.createElement("i");
            xMark.classList.add("fa-solid", "fa-x");
            btnDelete.appendChild(xMark);

            btnCheck.addEventListener("click", () => {
                li.style.backgroundColor = "grey";
                li.style.color = "white";
                li.style.textDecoration = "line-through";
            })

            btnDelete.addEventListener("click", () => {

                const index = todos.indexOf(todo);
                todos.splice(index, 1)
            
                localStorage.setItem("todos", JSON.stringify(todos));
                renderTodos();
            
            });

            todoList.appendChild(li);
        }
    }
};

function addTodos() {

    if (!localStorage.getItem("todos")) {
        localStorage.setItem("todos", JSON.stringify([todoInput.value]));
    } else {
        const todos = JSON.parse(localStorage.getItem("todos"));
        todos.push(todoInput.value);
        localStorage.setItem("todos", JSON.stringify(todos));
    } 
    
    todoInput.value = "";
    renderTodos();
}