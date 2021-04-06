const formElement = document.querySelector(".todo-list-form")
const inputElement = document.querySelector(".todo-list-input")
const addElement = document.querySelector(".todo-list-btn")
const listElement = document.querySelector(".todo-list")

let todo = []

if (!localStorage.getItem('todos')) {
   localStorage.setItem('todos', JSON.stringify([]))
} else {
   todo = JSON.parse(localStorage.getItem('todos'));
   renderItems(todo)
}

formElement.addEventListener("submit", evt => {
   evt.preventDefault()
   if (!inputElement.value) return alert("Please wrtie smth")
   let newTodoObject = {
      name: inputElement.value
   }
   todo.push(newTodoObject)
   renderItems(todo)
   localStorage.setItem('todos', JSON.stringify(todo))

   evt.target.reset()
   formElement.focus()
})

function renderItems(array) {
   listElement.textContent = ''
   array.forEach((e, i) => {
      // let idElement = document.createElement("p")
      // idElement.textContent = 1 + i
      let newLiElement = document.createElement("li")
      newLiElement.classList.add("todo-items")
      let newPElement = document.createElement("p")
      newPElement.classList.add("todo-text")
      newPElement.textContent = e.name
      let newbtnElement = document.createElement("button")
      newbtnElement.classList.add("remove-btn")
      newbtnElement.textContent = "x"

      let toggle = true
      newPElement.addEventListener("click", evt => {
         if (toggle) {
            newPElement.style.textDecoration = "line-through"
            toggle = false
         } else {
            newPElement.style.textDecoration = "none"
            toggle = true
         }
      })

      newbtnElement.addEventListener('click', evt => {
         todo.splice(i, 1)
         localStorage.setItem('todos', JSON.stringify(todo))
         renderItems(todo)
      })

      newLiElement.addEventListener("copy", e => {
         alert("copied")
      })

      newLiElement.appendChild(newPElement)
      // newLiElement.appendChild(idElement)
      newLiElement.appendChild(newbtnElement)
      listElement.appendChild(newLiElement)
   })
}