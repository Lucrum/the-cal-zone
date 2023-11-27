import './style.css'
import buildIndex from './scripts/buildIndex'
import buildMenu from './scripts/buildMenu'

let contentDiv = document.querySelector('div#content')

let homeButton = document.querySelector('button#home')
let menuButton = document.querySelector('button#menu')
let contactButton = document.querySelector('button#contact')

homeButton.addEventListener("click", () => {
  buildIndex(contentDiv)
})

menuButton.addEventListener("click", () => {
  buildMenu(contentDiv)
})

// contactButton.addEventListener("click", () => {
//   buildContact(contentDiv)
// })


buildIndex(contentDiv)