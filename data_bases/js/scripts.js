// seleção de elementos=============================================
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;

// funções===========================================================
// const saveTodo = (text) => {
//     console.log(text + " oi")
// }

const saveTodo = (text) => {

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);
    // console.log(todo)

    // doneBtn
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn);

    // editBtn
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn);

    //deleteBtn
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn);

    // INSERE O HTML CRIADO PARA A NOVA TAREFA (TEXTO + DIV + BOTÕES)
    todoList.appendChild(todo);
    todoInput.value = "";
    todoInput.focus();
}

const toggleForms = () => {
    // se o formulario estiver em exibição, esconde, e vice-versa
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
};

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3")
        if (todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text
        }
    })
}



// Eventos==============================================================
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;
    if (inputValue) {
        saveTodo(inputValue)
    }
})

//para capturar o botão que foi clicado (finalizar, editar ou remover)
document.addEventListener("click", (e) => {

    // para descobrir o elemento que foi clicado
    const targetE1 = e.target;
    //para selecionar a div mais próxima, tem que ser um botão desta div
    const parentE1 = targetE1.closest("div");

    let todoTitle;
    if (parentE1 && parentE1.querySelector("h3")) {
        todoTitle = parentE1.querySelector("h3").innerText;
    }

    if (targetE1.classList.contains("finish-todo")) {
        //se clicou no botão finalizar, risca a tarefa
        // TOGGLE, ao invés de ADD, para riscar ou desriscar a tarefa
        parentE1.classList.toggle("done");
    }
    if (targetE1.classList.contains("remove-todo")) {
        parentE1.remove();
    }
    if (targetE1.classList.contains("edit-todo")) {
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault()
    toggleForms()
})

editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const editInputValue = editInput.value;

    if (editInputValue) {
        updateTodo(editInputValue)
    }

    toggleForms();

})


