import { rootComp } from "../../index.js";
import { state } from "../../state/index.js";
import { createElement, createStyle } from "../../helper/helper.js"

const path = "../src/components/userComments/style.css"
createStyle(path)

export function usersComment(type) {
  Array.from(document.getElementsByClassName("userComment")).forEach(el => el.remove())
  const commentCard = createElement("main", "userComment")
  state[type].forEach(comment => {
    const commentBox = createElement("div", "commentBoxes")
    const spanComId = createElement("span", "spanComId", `ID: ${comment.id}`)
    const spanComName = createElement("span", "spanComName", `Name: ${comment.name}`)
    const spanComPostId = createElement("span", "spanComPostId", `Post_Id: ${comment.postId}`)
    const spanComEmail = createElement("span", "spanComEmail", `Email: ${comment.email}`)
    const spanComBody = createElement("span", "spanComBody", `${comment.body}`)
    commentBox.append(spanComId, spanComName, spanComPostId, spanComEmail, spanComBody)
    commentCard.append(commentBox)
  })
  rootComp.append(commentCard)
}