function updateCard(){

let name = document.getElementById("nameInput").value
let marker = document.getElementById("markerInput").value
let attack = document.getElementById("attackInput").value
let defense = document.getElementById("defenseInput").value
let hp = document.getElementById("hpInput").value
let ability = document.getElementById("abilityInput").value

let color = document.getElementById("colorPicker").value
let bg = document.getElementById("bgInput").value

if(name){
document.getElementById("cardName").innerText = name
}

if(marker){
document.getElementById("cardMarker").innerText = "Marker: " + marker
}

if(ability){
document.getElementById("cardAbility").innerText = "Ability: " + ability
}

document.getElementById("attack").innerText = attack
document.getElementById("defense").innerText = defense
document.getElementById("hp").innerText = hp

let card = document.getElementById("card")

card.style.backgroundColor = color

if(bg){
card.style.backgroundImage = "url("+bg+")"
}

}
