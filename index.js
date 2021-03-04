const p1={
    score:0,
    button: document.querySelector('#inc1'),
    display: document.querySelector('#p1')
}

const p2={
    score:0,
    button: document.querySelector('#inc2'),
    display: document.querySelector('#p2')
}

console.log('connected')
let head=document.querySelector('h1');
let reset=document.querySelector('#reset');
let upto=document.querySelector('#upto');
let over=false;
let limit;

// Adding options in "upto"

for(let i=0;i<10;i++){
    let opt=document.createElement('option');
    opt.innerHTML=`<h1>${i}</h1>`;
    upto.appendChild(opt);
}

// select limiting score

upto.addEventListener('change',function(){
    limit=parseInt(this.value);
    console.log("limit= ",limit);
});

function updateScores(player, opponent){
    if(!over){
        player.button.disabled=true;
        opponent.button.disabled=false;
        player.score+=Math.floor(Math.random()*6)+1;
        if(player.score >= limit){
            over=true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
        }
        player.display.textContent= player.score;
    }
}

p1.button.addEventListener('click',function(){
    // console.log("clicked!!");
    updateScores(p1,p2);
});
p2.button.addEventListener('click',function(){
    updateScores(p2,p1);
})

reset.addEventListener('click',function(){
    rst();
})

function rst(){
    over=false;
    p1.score=0;
    p2.score=0;
    p1.display.textContent=0;
    p2.display.textContent=0;
    p1.display.classList.remove('has-text-danger','has-text-success');
    p2.display.classList.remove('has-text-danger','has-text-success');
    upto.value=0;
}
