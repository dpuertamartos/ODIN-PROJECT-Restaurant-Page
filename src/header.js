const createHeader = () =>{
    const header = document.querySelector("#header")
    const container = document.createElement("div")
    container.className = "container"
    const row = document.createElement("row")
    row.className = "row align-items-start justify-content-center navigation"
    const col1 = document.createElement("col")
    col1.className = "col justify-content-center"
    const col2 = document.createElement("col")
    col2.className = "col justify-content-center"
    const col3 = document.createElement("col")
    col3.className = "col justify-content-center"

    const button1 = document.createElement("button")
    button1.className = "btn btn-dark home"
    button1.textContent = "Home"
    const button2 = document.createElement("button")
    button2.className = "btn btn-dark menu"
    button2.textContent = "Menu"
    const button3 = document.createElement("button")
    button3.className = "btn btn-dark contact"
    button3.textContent = "Contact"

    col1.append(button1)
    col2.append(button2)
    col3.append(button3)
    row.append(col1,col2,col3)
    container.append(row)
    header.append(container)
}

export default createHeader;