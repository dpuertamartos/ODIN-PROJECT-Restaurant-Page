const createFindUs = () => {
    const content = document.querySelector("#content")
    const container = document.createElement("div")
    container.className = "container-fluid"
    
    const row1 = document.createElement("div")
    row1.className = "row"

    const row2 = document.createElement("div")
    row2.className = "row"

    const row3 = document.createElement("div")
    row3.className = "row"

    const title = document.createElement("h1")
    title.textContent = "Find us!!"
    title.className = "contactTitle"

    const address = document.createElement("p")
    address.textContent= "Fake street number"
    address.className = "contactText"

    const address2 = document.createElement("p")
    address2.textContent= "Fakington City, Fake Country"
    address2.className = "contactText"

    const email = document.createElement("p")
    email.textContent= "fakemail@fake.com"
    email.className = "contactText"

    row1.append(title)
    row2.append(address, address2)
    row3.append(email)
    container.append(row1,row2,row3)
    content.append(container)
}

export default createFindUs;