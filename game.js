function updateCard(){

let name = document.getElementById("nameInput").value
let marker = document.getElementById("markerInput").value
let attack = document.getElementById("attackInput").value
let defense = document.getElementById("defenseInput").value
let hp = document.getElementById("hpInput").value
let ability = document.getElementById("abilityInput").value
let rarity = document.getElementById("raritySelect").value
let color = document.getElementById("colorPicker").value

let card = document.getElementById("card")

card.className = rarity
card.style.backgroundColor = color

if(name) document.getElementById("cardName").innerText = name
if(marker) document.getElementById("cardMarker").innerText = "Marker: "+marker
if(ability) document.getElementById("cardAbility").innerText = "Ability: "+ability

document.getElementById("attack").innerText = attack
document.getElementById("defense").innerText = defense
document.getElementById("hp").innerText = hp

}

/* IMAGE UPLOADS */

document.getElementById("bgUpload").addEventListener("change", function(e){

let reader = new FileReader()

reader.onload = function(event){

document.getElementById("card").style.backgroundImage =
"url("+event.target.result+")"

}

reader.readAsDataURL(e.target.files[0])

})

document.getElementById("fgUpload").addEventListener("change", function(e){

let reader = new FileReader()

reader.onload = function(event){

document.getElementById("foreground").style.backgroundImage =
"url("+event.target.result+")"

}

reader.readAsDataURL(e.target.files[0])

})

/* DRAG FOREGROUND */

let fg = document.getElementById("foreground")

let dragging = false

fg.addEventListener("mousedown", ()=> dragging=true)

document.addEventListener("mouseup", ()=> dragging=false)

document.addEventListener("mousemove",(e)=>{

if(dragging){

fg.style.left = e.pageX - fg.offsetWidth/2 + "px"
fg.style.top = e.pageY - fg.offsetHeight/2 + "px"

}

})

/* RESIZE */

let handle = document.getElementById("resizeHandle")

let resizing=false

handle.addEventListener("mousedown",()=>resizing=true)

document.addEventListener("mouseup",()=>resizing=false)

document.addEventListener("mousemove",(e)=>{

if(resizing){

fg.style.width = e.pageX - fg.offsetLeft + "px"
fg.style.height = e.pageY - fg.offsetTop + "px"

}

})

/* DOWNLOAD PNG */

function downloadCard(){

html2canvas(document.getElementById("card")).then(canvas=>{

let link = document.createElement("a")

link.download="immune_card.png"

link.href=canvas.toDataURL()

link.click()

})

}