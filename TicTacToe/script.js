let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let winner=document.querySelector("#winner");

let turnO=true;
let clickCount=0;

let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText="O";
            box.style.color="#525050ff";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="#eada88ff";
            turnO=true;
        }
        box.disabled=true;
        clickCount++;
        checkWinner();
    });
});

const checkWinner=() =>{
    let won=false;
    winPatterns.forEach((pattern) =>{
        let box1=boxes[pattern[0]].innerText;
        let box2=boxes[pattern[1]].innerText;
        let box3=boxes[pattern[2]].innerText;
        if(box1!="" && box2!="" && box3!=""){
            if(box1===box2 && box2===box3){
                won=true;
                disableBoxes();
                winner.style.marginBottom="4vmin";
                winner.innerText=(box1==="O"? "Player 1 wins!": "Player 2 wins!");
                resetBtn.innerText="New Game";
            }
        }
    });
    if(!won && clickCount===9){
        winner.style.marginBottom="4vmin";
        winner.innerText="It's a Draw!";
        resetBtn.innerText="New Game";
    }
}

const disableBoxes=() =>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
}


resetBtn.addEventListener("click",() =>{
    boxes.forEach((box) =>{
        box.disabled=false;
        box.innerText="";
        winner.innerText="";
        winner.style.marginBottom="0vmin";
        resetBtn.innerText="Reset";
        turnO=true;
        clickCount=0;
    })
});