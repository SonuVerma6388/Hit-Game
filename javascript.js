var timer = 30;
var score = 0;
var rn;


function makebubble(){
    var con = ""
    
    for(i =0;i<=167; i++){
        let b = Math.floor(Math.random()*10);
        con += `<div class="bubble" onclick="ManageScore(${b})">${b}</div>`;
    }
    document.querySelector(".plbtm").innerHTML = con;
}


function runtime(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }

        else{
            clearInterval(timerint);
            document.querySelector(".plbtm").innerHTML = `<h1>Game Over<h1/>`;
        }
       
    },1000)
}


function getNewhit(){
    window.rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}

function increaseScore(){
    window.score += 10;
    document.querySelector("#newscore").textContent = score;
}

function ManageScore(val){
    let a = Number(val);
    if(a == rn){
        increaseScore();
        makebubble();
        getNewhit();
    }
}

makebubble();
getNewhit();
runtime();

