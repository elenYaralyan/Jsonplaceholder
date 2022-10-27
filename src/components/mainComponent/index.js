import { rootComp } from "../../index.js"
import { state } from "../../state/index.js"
import { addNewComp } from "../addNewComp/index.js"
import { createElement, createStyle } from "../../helper/helper.js"

const path = "../src/components/mainComponent/style.css"
createStyle(path)

export function mainComponent(type) {
   Array.from(document.getElementsByClassName("mainComp")).forEach(el => el.remove())
   const btnDel = document.querySelector(".deleteALL")
   const changBtn = document.querySelector(".changeBtn")
   btnDel && btnDel.remove()
   changBtn && changBtn.remove()
   const main = createElement("main", "mainComp")
   state[type].forEach(el => {
      const itemWrapper = createElement("div", "itemWrapper")
      const itemCheckBox = createElement("input")
      const itemSpan = createElement("span")
      itemCheckBox.type = "checkbox"
      itemCheckBox.checked = el.completed
      itemCheckBox.onchange = (e) => changeChecked(type, el.id, e.target.checked)
      itemSpan.innerText = el.title
      itemWrapper.append(itemCheckBox)
      itemWrapper.append(itemSpan)
      main.append(itemWrapper)
   });
   const deleteAllComp = createElement("button", "deleteALL", "Delete All Completed ")
   const changeBtn = createElement("button", "changeBtn")
   const changeImg = createElement("img", "changeImg")
   changeImg.src = "https://api.iconify.design/fluent:checkbox-checked-sync-16-filled.svg?color=%23356b35"
   changeBtn.append(changeImg)
   deleteAllComp.onclick = () => filterData(type)
   changeBtn.onclick = () => changeCheck(type)
   rootComp.append(deleteAllComp)
   rootComp.append(changeBtn)
   rootComp.append(main)
   addNewComp(type)

}
function filterData(type) {
   let newData = state[type].filter(item => !item.completed)
   state[type] = newData
   mainComponent(type)
}
function changeChecked(type, id, checked) {
   let newData = state[type].map(item => {
      item.id === id && (item.completed = checked)
      return item
   })
   state[type] = newData
   mainComponent(type)
}

function changeCheck(type) {
 state[type].forEach(el => {
      el && (el.completed = !el.completed)
      return el
   })
   console.log(state);
   mainComponent(type)

}
