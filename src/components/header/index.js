import { ALBUMS_API, COMMENTS_API, PHOTOS_API, POSTS_API, TODO_API, USERS_API } from "../../api/API_URL.js"
import { getServer } from "../../api/index.js"
import { createElement, createStyle } from "../../helper/helper.js"
import { rootComp } from "../../index.js"
import { state } from "../../state/index.js"
import { mainComponent } from "../mainComponent/index.js"
import { usersAlbum } from "../userAlbum/index.js"
import { usersComment } from "../userComments/index.js"
import { userPhotos } from "../userPhoto/index.js"
import { userPosts } from "../userPosts/index.js"
import { usersData } from "../usersComp/index.js"

const path = "../src/components/header/style.css"
createStyle(path)


 
export function createHeader(type) {
  const exHeader = document.querySelector(".mainHeader")
  exHeader && exHeader.remove()
  const header = createElement("header", "mainHeader")
  const spanTodos = createElement("span", "headerSpan", "TODOS")
  const spanUsers = createElement("span", "headerSpan", "USERS")
  const spanPosts = createElement("span", "headerSpan", "POSTS")
  const spanPhotos = createElement("span", "headerSpan", "PHOTOS")
  const spanAlbums = createElement("span", "headerSpan", "ALBUMS",)
  const spanComment = createElement("span", "headerSpan", "COMMENTS")
  spanTodos.onclick = todoHandleClick
  spanUsers.onclick = userHandleClick
  spanPosts.onclick = postsHandleClick
  spanPhotos.onclick = photosHandleClick
  spanAlbums.onclick = albumHandleClick
  spanComment.onclick= commentHandleClick
  switch (type) {
    case 'todos':
      spanTodos.style.color = "rgb(53, 107, 53)"
      break;
    case 'users':
      spanUsers.style.color = "rgb(53, 107, 53)"
      break;
    case 'posts':
      spanPosts.style.color = "rgb(53, 107, 53)"
      break;
    case 'photos':
      spanPhotos.style.color = "rgb(53, 107, 53)"
      break;
    case 'albums':
      spanAlbums.style.color = "rgb(53, 107, 53)"
      break;
    case 'comments':
      spanComment.style.color = "rgb(53, 107, 53)"
      break;
  }
  header.append(spanTodos, spanUsers, spanPosts, spanPhotos, spanAlbums, spanComment)
  rootComp.prepend(header)
}

function todoHandleClick(e) {
  rootComp.innerHTML = ""
  if(!state.todos.length){
    getServer(TODO_API)
    .then(todos => {
      state.todos = todos
      mainComponent("todos")
      createHeader("todos")
    },err => {
      document.write(err.message)
    })
  }else{
    mainComponent("todos")
    createHeader("todos")
  }
} 

function userHandleClick() {
  rootComp.innerHTML = ""
  if(!state.users.length){
    getServer(USERS_API)
    .then(users => {
      state.users = users
      usersData("users")
      createHeader("users")
    },err => {
      document.write(err.message)
    })
  }else{
      usersData("users")
      createHeader("users")
  }
}

function postsHandleClick() {
  rootComp.innerHTML = ""
  if(!state.posts.length){
    getServer(POSTS_API)
    .then(posts => {
      state.posts = posts
      userPosts("posts")
      createHeader("posts")
    },err => {
      document.write(err.message)
    })
  }else{
      userPosts("posts")
      createHeader("posts")
  }
} 

function photosHandleClick() {
  rootComp.innerHTML = ""
  if(!state.photos.length){
    getServer(PHOTOS_API)
    .then(photos => {
      photos.length = 50
      state.photos = photos
      userPhotos("photos")
      createHeader("photos")
    },err => {
      document.write(err.message)
    })
  }else{
    userPhotos("photos")
    createHeader("photos")
  }
} 

function albumHandleClick(){
  rootComp.innerHTML = ""
  if(!state.albums.length){
    getServer(ALBUMS_API)
    .then(albums => {
      state.albums = albums
      usersAlbum("albums")
      createHeader("albums")
    },err => {
      document.write(err.message)
    })
  }else{
    usersAlbum("albums")
    createHeader("albums")
  }
}

function commentHandleClick(){
  rootComp.innerHTML = ""
  if(!state.comments.length){
    getServer(COMMENTS_API)
    .then(comments => {
      state.comments = comments
      usersComment("comments")
      createHeader("comments")
    },err => {
      document.write(err.message)
    })
  }else{
    usersComment("comments")
    createHeader("comments")
  }
}