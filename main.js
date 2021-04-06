const formElement = document.querySelector(".todo-list-form")
const inputElement = document.querySelector(".todo-list-input")
const addElement = document.querySelector(".todo-list-btn")
const listElement = document.querySelector(".todo-list")

let todo = []

formElement.addEventListener("submit", evt => {
   evt.preventDefault()
   let newLiElement = document.createElement("li")
   newLiElement.classList.add("todo-items")
   let newPElement = document.createElement("p")
   newPElement.classList.add("todo-text")
   let newbtnElement = document.createElement("button")
   newbtnElement.classList.add("remove-btn")
   newbtnElement.textContent = "x"

   if (inputElement.value == "") {
      newLiElement.textContent = undefined
      newbtnElement.style.display = "none"
      newLiElement.style.borderBottom = "none"
      newLiElement.style.padding = 0
      newLiElement.style.margin = 0
      newPElement.style.margin = 0
      newPElement.style.padding = 0
      alert("please write smth")
   } else {
      newPElement.textContent = inputElement.value
   }
   newLiElement.appendChild(newPElement)
   newLiElement.appendChild(newbtnElement)
   listElement.appendChild(newLiElement)

   newbtnElement.addEventListener("click", e => {
      newLiElement.textContent = undefined
      newLiElement.style.textDecoration = "none"
      newLiElement.style.padding = 0
      newLiElement.style.margin = 0
   })

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


   newLiElement.addEventListener("copy", e => {
      alert("copied")
   })

   formElement.reset()
   formElement.focus()
})