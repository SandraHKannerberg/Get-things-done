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

            const icon = document.createElement("i");
            icon.classList.add("fa-solid", "fa-trash");
            li.appendChild(icon);
            icon.addEventListener("click", () => {

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