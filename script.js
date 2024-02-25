let addBtn = document.getElementById('addBtn')
let toast = document.querySelector('.toast')
let inputTodo = document.querySelector('#input-todo');

addTodo = ()=>{
    let todo = inputTodo.value;
    if(!todo.trim()){
        toast.innerHTML = "input field is requred";
        toast.classList.add("show");
        return setTimeout(()=>{
            toast.classList.remove("show")
        },3000)
    }
let todosList = document.getElementById('todos-list')
const textNode = document.createTextNode(todo)
const devEl = document.createElement('div')
const spanEl = document.createElement('span')
spanEl.setAttribute("class", "delete")
devEl.setAttribute("class", "todo")

devEl.appendChild(textNode)
devEl.appendChild(spanEl)
todosList.appendChild(devEl)
inputTodo.value = "";

spanEl.addEventListener("click", ()=>{
    todosList.removeChild(spanEl.parentElement)
} )
}

addBtn.addEventListener('click', addTodo)