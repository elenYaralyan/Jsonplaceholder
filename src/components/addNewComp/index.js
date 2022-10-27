import { rootComp } from "../../index.js"
import { state } from "../../state/index.js"
import { mainComponent } from "../mainComponent/index.js"
import { createElement, createStyle } from "../../helper/helper.js"

const path="../src/components/addNewComp/style.css"
createStyle(path)



export function addNewComp(type) {
  const btnAdd = document.querySelector(".addDiv")
  btnAdd && btnAdd.remove()

  const addDiv = createElement("div", "addDiv")
  const span1 = createElement("span", "span1")
  const span2 = createElement("span", "span2")
  const span3 = createElement("span", "span3")

  addDiv.append(span1, span2, span3)
  addDiv.onclick = () => openNewRegister(type)
  rootComp.append(addDiv)
}

function openNewRegister(type) {
  const form = document.getElementsByClassName("openedDiv")[0]
  form && form.remove()

  const newUser = {
    id: '',
    title: "",
    completed: false,
    userId: 10
  }

  const openedDiv = createElement("div", "openedDiv")
  const openedHeader = createElement("header", "openedHeader")
  const closeBtn = createElement("button", "closeBtn")
  closeBtn.innerHTML = "&times;"
  closeBtn.onclick = () => openedDiv.remove()

  openedHeader.append(closeBtn)
  openedDiv.append(openedHeader)

  const spanId = createElement("span", "add1", "ID")
  const spanTitle = createElement("span", "add2", "TITLE")
  const spanCompleted = createElement("span", "add3", "COMPLETED")
  const spanUserID = createElement("span", "add4", "USER_ID")

  const inputId = createElement("input", "inp1")
  const inputTitle = createElement("input", "inp2")
  const inputCompleted = createElement("input", "inp3")
  const inputUserID = createElement("input", "inp4")

  inputId.setAttribute('minlength', 19)
  inputId.setAttribute('maxlength', 19)
  inputId.setAttribute('placeholder', "ID-16 Random Numbers");
  inputCompleted.setAttribute("type", "checkbox")

  const buttonRand = createElement("button", "btn1", "RANDOM")
  const buttonAdd = createElement("button", "btn2", "ADD")

  buttonRand.addEventListener("click", () => {
    const id = `ID-${Math.random().toFixed(16).split('.')[1]}`
    inputId.value = (id)
    newUser.id = id
  })

  inputId.addEventListener("input", (e) => {
    newUser.id = `ID-${e.target.value}`
  })

  inputTitle.addEventListener("input", (e) => {
    newUser.title = e.target.value
  })

  inputCompleted.addEventListener("input", (e) => {
    newUser.completed = e.target.checked
  })

  inputUserID.value = 10
  inputUserID.readOnly = true;

  buttonAdd.onclick = () => {
    if (newUser.id && newUser.title) {
      state[type].unshift(newUser)
    }
    mainComponent(type)
    openedDiv.remove()
  }
  openedDiv.append(spanId, inputId, buttonRand, spanTitle, inputTitle, spanCompleted, inputCompleted, spanUserID, inputUserID, buttonAdd)
  rootComp.append(openedDiv)
}

