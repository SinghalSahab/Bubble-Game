var timer = 60;
var score = 0;
var rn = 0;
var gameOver = false;
function increaseScore(){
    score += 10; 
    document.querySelector("#scoreval").textContent = score;
}
function makeEasyVal(){
    rn = Math.floor(Math.random()*9+1);
    document.querySelector("#hit").textContent = rn;
}
function getNewVal(){
    rn = Math.floor(Math.random()*136+1);
    document.querySelector("#hit").textContent = rn;
}
function makeEasyBubble(){
    makeEasyVal();
    let cl = "";
    for(let i=1;i<=136;i++){
        var a = Math.floor(Math.random()*9+1);
        cl += `<div class="bubble">${a}</div>`;
    }
    document.querySelector("#panel-bottom").innerHTML = cl;
}
function makeHardBubble()
{
    getNewVal();
    let array = Array.from({ length: 136 }, (_, i) => i + 1);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }


let clutter = '';
for (let i = 0; i < array.length; i++) {
    let a = array[i];
    clutter += `<div class="bubble">${a}</div>`;
}
    document.querySelector("#panel-bottom").innerHTML = clutter;

}

function runTimer(){
 var setter = setInterval(function (){
      if(timer>0)
        {
        timer--;
        document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(setter);
            document.querySelector("#panel-bottom").innerHTML = `<h1>Game Over</h1>`
            document.querySelector("#new-game").style.display = "block";
            gameOver = true;
        }
    },1000);
    
}

document.querySelector("#panel-bottom").addEventListener("click",(dets)=>{
    if (gameOver) return;
   var clickednum = Number(dets.target.textContent);
   if(rn == clickednum)
    {
        increaseScore();
        makeEasyBubble();
        makeEasyVal();
    }
})

document.querySelector("#new-game").addEventListener("click", ()=>{
    if (gameOver) {
        resetGame();
    }
});
function resetGame() {
    timer = 60;
    score = 0;
    rn = 0;
    gameOver = false;
    document.querySelector("#scoreval").textContent = score;
    document.querySelector("#timer").textContent = timer;
    document.querySelector("#new-game").style.display = "none";
    runTimer();
    makeEasyBubble();
}
runTimer();    
makeEasyBubble();