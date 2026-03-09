let currentEnemy;

function newEnemy(){

currentEnemy = pathogens[Math.floor(Math.random()*pathogens.length)];

document.getElementById("enemy-card").innerHTML =
"<h3>"+currentEnemy.name+"</h3>" +
"<p>Power: "+currentEnemy.power+"</p>";

}

function drawHand(){

let hand = document.getElementById("hand");
hand.innerHTML="";

for(let i=0;i<4;i++){

let card = immuneCards[Math.floor(Math.random()*immuneCards.length)];

let div = document.createElement("div");
div.className="card";

div.innerHTML=
"<div class='card-name'>"+card.name+"</div>" +
"<div>"+card.ability+"</div>" +
"<div class='card-power'>Power: "+card.power+"</div>";

div.onclick=function(){
playCard(card);
};

hand.appendChild(div);

}

}

function playCard(card){

if(card.power >= currentEnemy.power){

document.getElementById("result").innerHTML =
card.name+" defeated the "+currentEnemy.name+"!";

}else{

document.getElementById("result").innerHTML =
card.name+" failed to defeat the "+currentEnemy.name+".";

}

newEnemy();
drawHand();

}

newEnemy();
drawHand();