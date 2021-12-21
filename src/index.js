import createHeader from "./header.js"
import createHomePage from "./home.js"
import createMenuPage from "./menu.js"
import createFindUs from "./findus.js"
import './style.css'

const destroyContent = ()=>{
    const content = document.querySelector("#content")
    content.remove()
    const newContent = document.createElement("div")
    newContent.id="content"
    const body=document.body
    body.appendChild(newContent)
}

createHeader()
createHomePage()
const homeButton = document.querySelector(".home")
const menuButton = document.querySelector(".menu")
const contactButton = document.querySelector(".contact")

homeButton.addEventListener("click", ()=>{
    destroyContent()
    createHomePage()
})
menuButton.addEventListener("click", ()=>{
    destroyContent()
    createMenuPage()
})

contactButton.addEventListener("click", ()=>{
    destroyContent()
    createFindUs()
})