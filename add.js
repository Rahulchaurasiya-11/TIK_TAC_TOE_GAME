let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgconatiner=document.querySelector(".win-msg-container");
let msg=document.querySelector("#msg");

let turno=true;//playerX,PLyerY


const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetgame =() =>{
    turno=true;
    enableboxes();
    msgconatiner.classList.add("hide");
    
}





boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box was click:");
        if(turno){       //player o ki tern..
            box.innerText="O";
            turno=false;
        }else{             // player x ki turn hai,....
            box.innerText="X";
            turno=true;
        }
        box.disabled="true";

        checkwinner();

    }
    )
    
});

const disableboxes =() =>{
    for(let box of boxes){
        box.disabled ="true";
    }
}

const enableboxes =() =>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
}



const showinner=(winner)=>{
    msg.innerText=`CONGRACULATION, WINNER IS :${winner}`;
    msgconatiner.classList.remove("hide");
    disableboxes();
}
const checkwinner =()=>{
    for (pattern of winpattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        // console.log(
        let pvalue1=boxes[pattern[0]].innerText;
        let pvalue2=boxes[pattern[1]].innerText;
        let pvalue3=boxes[pattern[2]].innerText;
    // );
        if (pvalue1 !="" && pvalue2 !="" && pvalue3!=""){
            if(pvalue1===pvalue2 && pvalue2===pvalue3){
                console.log("WINNER",pvalue1);

                showinner(pvalue1);
            }
        }

    }
}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);