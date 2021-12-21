import background from './img/newbackground.png'

/* const container = document.createElement("div")
container.className = "container-fluid"
const row = document.createElement("div")
row.className = "row"
const col = document.createElement("div")
col.className = "col" */

const createHomePage = () => {
    const content = document.querySelector("#content")
    const container = document.createElement("div")
    container.className = "container-fluid"
    const row1 = document.createElement("div")
    row1.className = "row justify-content-center"
    const row2 = document.createElement("div")
    row2.className = "row justify-content-center"
    const row3 = document.createElement("div")
    row3.className = "row justify-content-center"
    

    const myBackground = new Image()
    myBackground.src = background
    myBackground.className = "img-fluid background"

    const restaurantTitle = document.createElement("h1")
    restaurantTitle.textContent = "My Restaurant Title"
    restaurantTitle.className = "restaurantTitle"

    const restaurantText = document.createElement("p")
    restaurantText.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    restaurantText.className = "restaurantText"

    row1.append(myBackground)
    row2.append(restaurantTitle)
    row3.append(restaurantText)
    
    container.append(row1)
    container.append(row2)
    container.append(row3)
    content.append(container)
}

export default createHomePage;






