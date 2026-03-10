let fg = document.getElementById("foreground")

let isDragging = false
let offsetX, offsetY

fg.addEventListener("mousedown", function(e){

isDragging = true

offsetX = e.offsetX
offsetY = e.offsetY

})

document.addEventListener("mousemove", function(e){

if(!isDragging) return

let card = document.getElementById("card")
let rect = card.getBoundingClientRect()

fg.style.left = (e.clientX - rect.left - offsetX) + "px"
fg.style.top = (e.clientY - rect.top - offsetY) + "px"

})

document.addEventListener("mouseup", function(){

isDragging = false

})
let handle = document.getElementById("resizeHandle")

let resizing = false

handle.addEventListener("mousedown", ()=> resizing=true)

document.addEventListener("mouseup", ()=> resizing=false)

document.addEventListener("mousemove", function(e){

if(!resizing) return

let card = document.getElementById("card")
let rect = card.getBoundingClientRect()

fg.style.width = (e.clientX - rect.left - fg.offsetLeft) + "px"
fg.style.height = (e.clientY - rect.top - fg.offsetTop) + "px"

})
function downloadCard(){

html2canvas(document.getElementById("card")).then(canvas=>{

let link = document.createElement("a")

link.href = canvas.toDataURL("image/png")

link.download = "immune_card.png"

document.body.appendChild(link)

link.click()

document.body.removeChild(link)

})

}