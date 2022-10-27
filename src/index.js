import { TODO_API } from "./api/API_URL.js"
import { getServer } from "./api/index.js"
import { createHeader } from "./components/header/index.js"
import { mainComponent } from "./components/mainComponent/index.js"
import { state } from "./state/index.js"

export const rootComp = document.getElementById("root")

getServer(TODO_API)
  .then(todos => {
    state.todos = todos
    mainComponent("todos")
    createHeader('todos')
  },err => {
    document.write(err.message)
  })









