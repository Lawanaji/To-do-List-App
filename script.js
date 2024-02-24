let addBtn = document.getElementById('addBtn')
let toast = document.querySelector('toast')

addTodo = ()=>{
let inputTodo = document.querySelector('#input-todo').value;

if(!inputTodo.trim()){
    toast.innerHTML = "input field is required";
    toast.classList.add("show")
    return setTimeout(()=>{
        toast.classList.remove("show")
    },3000)
}

let todosList = document.getElementById('todos-list')
const textNode = document.createTextNode(inputTodo)
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
    if(spanEl.backgroundColor = '#EB4764'){
        spanEl.backgroundColor = 'white'
    }
} )
}

addBtn.addEventListener('click', addTodo)