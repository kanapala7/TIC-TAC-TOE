console.log("Welcome to Tic Tac Toe")
let music = new Audio("back.mp3")
let onclick = new Audio("onclick.mp3")
let gameover = new Audio("gameover.mp3")
let turn ="X";
let game=false;
// function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}
// function to check for a win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
     if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
        document.querySelector('.info').innerText=boxtext[e[0]].innerText+"  WON"
        game = true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
     }
    })
}
// game Logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText=turn;
            turn = changeTurn();
            onclick.play();
            checkWin();
            if(!game){
            document.getElementsByClassName("info")[0].innerText="Turn for"+ turn;
            }
        }
    })
})
// add on click listener to reset
reset.addEventListener('click',()=>{
    let boxtexts = element.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    })
})
