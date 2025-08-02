

// let name = "Godwin Promise "
// let greeting = "Hi! my name is "
// let emoji = "👋"
// let mygreeting = greeting + name + emoji
// let welcomeEl = document.getElementById("welcome-el")

// welcomeEl.innerText = mygreeting
// console.log(mygreeting)

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")



function increment(){

  count += 1
  countEl.textContent = count
}

function save(){

let countStr = count + " - "
saveEl.textContent += countStr

countEl.textContent = 0
count = 0
}
