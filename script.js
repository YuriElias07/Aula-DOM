const caixinha_tarefa = document.querySelector("#task")
const botao = document.querySelector(".botao")
const div_task = document.querySelector("#div_task")
const formulario = document.querySelector("#formulario")

function addTask(event) {
    event.preventDefault()
    const newTask = document.createElement("p")
    newTask.textContent = caixinha_tarefa.value
    div_task.appendChild(newTask)
    caixinha_tarefa.value = ""
    caixinha_tarefa.focus()
}

formulario.addEventListener("submit", addTask)