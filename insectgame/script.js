text=`<table align="center">`
let memory=[]
let x=0
let trophy=0;
let timer=60;
for(let i=0;i<30;i++){
    text+=`<tr  class="gamegrid" id="row${i}">`;
    for(let j=0;j<50;j++){
        text+=`<td value="0" class="block" id="cell${i}${j}"></td>`
        memory[x]=0
        x++;
    }
    text+=`</tr>`
}
document.getElementById("game").innerHTML=text
let points=0;
let a,b;
let xpos=Math.floor(Math.random()*50) ;
let ypos=Math.floor(Math.random()*30) ;

let present=`cell${ypos}${xpos}`

const updateA=(e)=>{
    points++;
    let m=e.target.id;
    document.getElementById(m).onclick=null;
}
function hideimg(){
    var remove=document.getElementById(`cell${ypos}${xpos}`);
    remove.removeChild(remove.childNodes[0])
}
function showimg(){
    var add =document.createElement('img');
    add.src='insect.png width="20" height="20"';
    document.getElementById(`cell${ypos}${xpos}`).appendChild(add);
}

function switchoff(a,b){
    document.getElementById(`cell${a}${b}`).style.backgroundColor='aquamarine'
    hideimg();
    //document.getElementById(`cell${ypos}${xpos}`).innerHTML=``
    document.getElementById(`cell${a}${b}`).onclick=null

}


function insecmove(){
    timer--;
    document.getElementById("score").innerText=`SCORE=${points}`
    document.getElementById("timer").innerText=`TIMER=${timer}`
    xpos=Math.floor(Math.random()*50) ;
    ypos=Math.floor(Math.random()*30) ;
    showimg();
    //document.getElementById(`cell${ypos}${xpos}`).style.backgroundColor='black'
    //document.getElementById(`cell${ypos}${xpos}`).innerHTML=`<img id="cell${ypos}${xpos}" src="insect.png" width="20" height="20"> `
    elem=document.getElementById(`cell${ypos}${xpos}`)
    elem.addEventListener('click',updateA);
    mytimer2=setTimeout(switchoff,1000,ypos,xpos)
}

function start(){
    mytimer=setInterval(insecmove,1000);
}

