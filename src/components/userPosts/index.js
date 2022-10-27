import { rootComp } from "../../index.js";
import { state } from "../../state/index.js";
import { createElement, createStyle } from "../../helper/helper.js"

const path="../src/components/userPosts/style.css"
createStyle(path)

export function userPosts(type) {
  Array.from(document.getElementsByClassName("postsMain")).forEach(el => el.remove())
  const userCard = createElement("main", "postsMain")
  state[type].forEach(post => {
    const userBox = createElement("div", "posts")
    const spanId = createElement("span", "spanIdP", `ID ${post.id}`)
    const spanUserId = createElement("span", "",`User_ID ${post.userId}` )
    const spanTitle = createElement("span", "spanTitle", post.title)
    const spanBody = createElement("span", "spanBody", post.body)
    const spanTitleN = createElement("span", "spanTitleN", "Title")
    userBox.append( spanId, spanUserId,spanTitleN,spanTitle,spanBody)
    userCard.append(userBox)
  })
  rootComp.append(userCard)
}