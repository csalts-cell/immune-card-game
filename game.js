function updateCard(){

let name = document.getElementById("nameInput").value
let hp = document.getElementById("hpInput").value
let def = document.getElementById("defInput").value
let color = document.getElementById("colorPicker").value
let bg = document.getElementById("bgInput").value

if(name){
document.getElementById("cardName").innerText = name
}

document.getElementById("hp").innerText = hp
document.getElementById("def").innerText = def

let card = document.getElementById("card")

card.style.backgroundColor = color

if(bg){
card.style.backgroundImage = "url("+bg+")"
}

}
