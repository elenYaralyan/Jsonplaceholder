import { rootComp } from "../../index.js";
import { state } from "../../state/index.js";
import { createElement, createStyle } from "../../helper/helper.js"
 
const path="../src/components/userPhoto/style.css"
createStyle(path)

export function userPhotos(type) {
  Array.from(document.getElementsByClassName("photosMain")).forEach(el => el.remove())
  const userCard = createElement("main", "photosMain")
  const userPhoto = createElement("div", "photos")
  state[type].forEach(photo => {
    const userImg = createElement("img", "userImg")
    userImg.src=photo.thumbnailUrl
    userPhoto.append(userImg)
    userCard.append(userPhoto)
  })
  rootComp.append(userCard)
}