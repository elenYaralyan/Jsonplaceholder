import { rootComp } from "../../index.js";
import { state } from "../../state/index.js";
import { createElement, createStyle } from "../../helper/helper.js"

const path="../src/components/usersComp/style.css"
createStyle(path)

export function usersData(type) {
  Array.from(document.getElementsByClassName("userMain")).forEach(el => el.remove())
  const userCard = createElement("main", "userMain")
  state[type].forEach(user => {
    const userBox = createElement("div", "boxes")
    const spanId = createElement("span", "spanId", user.id)
    const spanName = createElement("span", "spanName", user.name)
    const spanPhone = createElement("span", "spanPhone", user.phone)
    const spanUsername = createElement("span", "spanUserName", user.username)
    const spanWebsite = createElement("span", "spanWebsite", user.website)
    const spanIdN = createElement("span", "spanId", "Id")
    const spanNameN = createElement("span", "spanName", "Name")
    const spanPhoneN = createElement("span", "spanPhone", "Phone")
    const spanUsernameN = createElement("span", "spanUserName", "Username")
    const spanWebsiteN = createElement("span", "spanWebsite", "Website")
    userBox.append(spanIdN,spanId,spanNameN, spanName,spanPhoneN , spanPhone, spanUsernameN, spanUsername,  spanWebsiteN, spanWebsite)
    userCard.append(userBox)
  })
  rootComp.append(userCard)
}