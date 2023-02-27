console.log('hello')
const a = 10
const b = 11

if (a == b) {
    console.log("a sama dengan b")
} else if (a < b) {
    console.log("a kurang dari b")
} else if (a > b) {
    console.log("a lebih dari b")
} else {
    console.log("tipe datanya beda")
}



for (let i = 0; i < 10; i++) {

    const numberItem = document.getElementById("number-item")
    console.log(numberItem)

    const numberDiv = document.createElement("div")
    numberDiv.appendChild(document.createTextNode(i))

    numberItem.appendChild(numberDiv)
}


const peopleItem = document.getElementById("people-item")
const names = ["abdhy", "samoedra", "mika"]

names.forEach(name => {
    console.log(name)
    // peopleItem.innerHTML += "<div>" +  name + "</div>"
    const spaceIndex = name.indexOf(' ')
    if (spaceIndex != -1) {
        name = name.substring(0, spaceIndex)
    }
    peopleItem.innerHTML += `<div> ${name} </div>`
})

// event handler

const dateValue = document.getElementById("date-value")

let count = 0
dateValue.addEventListener("click", _ => {
    count++;
    console.log("click count" + count);
})

const date = new Date()

dateValue.textContent = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`