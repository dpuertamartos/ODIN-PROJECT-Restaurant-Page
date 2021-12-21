import lasagna from "./lasaña.jpg"
import pasta from "./pasta.jpg"
import hamburguesa from "./hamburguesa.jpg"

/* const container = document.createElement("div")
container.className = "container-fluid"
const row = document.createElement("div")
row.className = "row"
const col = document.createElement("div")
col.className = "col" */

const createMenu = () => {
    const content = document.querySelector("#content")
    const container = document.createElement("div")
    container.className = "container-fluid"
    const row1 = document.createElement("div")
    row1.className = "row food"
    const col11 = document.createElement("div")
    col11.className = "col w"
    const col12 = document.createElement("div")
    col12.className = "col w"
    const row2 = document.createElement("div")
    row2.className = "row food"
    const col21 = document.createElement("div")
    col21.className = "col w"
    const col22 = document.createElement("div")
    col22.className = "col w"
    const row3 = document.createElement("div")
    row3.className = "row food"
    const col31 = document.createElement("div")
    col31.className = "col w"
    const col32 = document.createElement("div")
    col32.className = "col w"

    const lasagnaI = new Image()
    lasagnaI.src = lasagna
    lasagnaI.className = "img-fluid"

    const lasagnaText = document.createElement("p")
    lasagnaText.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    lasagnaText.className = "foodText"

    const pastaI = new Image()
    pastaI.src = pasta
    pastaI.className = "img-fluid"

    const pastaText = document.createElement("p")
    pastaText.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    pastaText.className = "foodText"

    const hamburguesaI = new Image()
    hamburguesaI.src = hamburguesa
    hamburguesaI.className = "img-fluid"

    const hamburguesaText = document.createElement("p")
    hamburguesaText.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    hamburguesaText.className = "foodText"

    col11.append(lasagnaI)
    col12.append(lasagnaText)
    col21.append(pastaText)
    col22.append(pastaI)
    col31.append(hamburguesaI)
    col32.append(hamburguesaText)
    row1.append(col11,col12)
    row2.append(col21,col22)
    row3.append(col31,col32)
    container.append(row1,row2,row3)
    content.append(container)
}

export default createMenu;