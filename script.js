console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let Audiogameover = new Audio("gameover.mp3")
let turn ="X"
let gameover = false;

const changeTurn =() =>{
    return turn ==="X"? "0" : "X";
}

//function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2 ,1 ,5 ,0],
        [3,4,5 , 1 , 15 ,0],
        [6,7,8 , 1 ,25 ,0],
        [0,3,6 , -9 , 15 ,90],
        [1,4,7 , 1, 15 , 90],
        [2,5,8 , 11 ,15 ,90],
        [0,4,8 , 1 ,15 , 45],
        [2,4,6 , 1, 15 ,-45]
    ]
    wins.forEach(element => {
        if(
            (boxtext[element[0]].innerText === boxtext[element[1]].innerText) && (boxtext[element[1]].innerText === boxtext[element[2]].innerText) && (boxtext[element[0]].innerText !=="")
            )
            {
            document.querySelector('.info').innerText = boxtext[element[0]].innerText + " Won";
            gameover = true;
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = '196px';
            document.querySelector('.line').style.width= "28vw";
            document.querySelector('.line').style.transform = `translate(${element[3]}vw ,${element[4]}vw)   rotate(${element[5]}deg)`;
           
       }
    });
};

//GAME LOGIC
//music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtexts =element.querySelector('.boxtext');
    element.addEventListener('click' , ()=>{
        if(boxtexts.innerText ===''){
            boxtexts.innerText=turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin(); 
            if(!gameover){
                document.getElementsByClassName('info')[0].innerText = "Turn for "+ turn;
            }
        }
    });
});


// adding onclick listener to reset button
reset.addEventListener('click' , ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText= "";
    });
    turn = "X";
    gameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = '0px';
    document.querySelector('.line').style.width= "0vw";
    document.querySelector('.line').style.transition ="step-end ";
})