import { rootComp } from "../../index.js";
import { state } from "../../state/index.js";
import { createElement, createStyle } from "../../helper/helper.js"



const path = "../src/components/userAlbum/style.css"
createStyle(path)

export function usersAlbum(type) {
  Array.from(document.getElementsByClassName("albumMain")).forEach(el => el.remove())
  const userAlbum = createElement("main", "albumMain")
  state[type].forEach(album => {
    const userCard = createElement("div", "albumCard")
    const spanAlbId = createElement("span", "albId", `ID: ${album.id}`)
    const spanAlbUsId = createElement("span", "albUsId", `User_ID: ${album.userId}`)
    const spanAlbTitle = createElement("span", "albTitle", album.title)
    const spanAlbTitleN = createElement("span", "albTitleN", "Title:")
    userCard.append(spanAlbId, spanAlbUsId, spanAlbTitleN, spanAlbTitle)
    userAlbum.append(userCard)
  })
  rootComp.append(userAlbum)
}