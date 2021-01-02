console.log('connected')
let head=document.querySelector('h1');
let pl1=document.querySelector('#p1');
let pl2=document.querySelector('#p2');
let inc1=document.querySelector('#inc1');
let inc2=document.querySelector('#inc2');
let reset=document.querySelector('#reset');
let upto=document.querySelector('#upto')

let over=false;

for(let i=0;i<51;i++){
    let opt=document.createElement('option');
    opt.value=i;
    opt.innerHTML=`${i}`;
    upto.appendChild(opt);
}
//input winning score
let winScr;
upto.addEventListener('change',function(){
    winScr=parseInt(upto.value);
    console.log(winScr);
    rst();
    over=false;
});

//input winning score

//updating score
let scr1=0;
let scr2=0;

inc1.addEventListener('click',function(){
    if(!over){
        if(scr1<winScr){
            scr1+=Math.floor(Math.random()*6+1);
            pl1.textContent=`${scr1}`;
        }
        if(scr1>=winScr){
            console.log('player1 wins!!!!');
            p1.classList.add('winner');
            p2.classList.add('loser');
            over=true;
        }
    }
});
inc2.addEventListener('click',function(){
    if(!over){
        if(scr2<winScr){
            scr2+=Math.floor(Math.random()*6+1);
            pl2.textContent=`${scr2}`;
        }
        if(scr2>=winScr){
            console.log('player2 wins!!!!');
            p2.classList.add('winner');
            p1.classList.add('loser');
            over=true;
        }
    }
});

reset.addEventListener('click',function(){
    rst();
    upto.value=0;
});

function rst(){
    p1.classList.remove('winner');
    p2.classList.remove('loser');
    p1.classList.remove('loser');
    p2.classList.remove('winner');
    scr1=0,scr2=0;
    pl1.textContent=`0`;
    pl2.textContent=`0`;
}

