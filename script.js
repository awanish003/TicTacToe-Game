console.log("ttttt")
let music = new Audio('beep2.ogg')
let audioturn = new Audio('beep2.ogg')
let gameover = new Audio('beep2.ogg')
let turn = "x"
let isgameover = false


const changeTurn=()=>{
    return turn === "x"? "0": "x"
    console.log(turn)
}

// function to check for a win 
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,91],
        [1,4,7,-5,15,91],
        [2,5,8,15,15,91],
        [0,4,8,5,15,44],
        [2,4,6,5,15,134],
    ]

    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px"
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = "20vw"
            console.log(e[3],e[4],e[5])
        }
    })
}

// Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click' ,()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turn
            turn=  changeTurn();
            audioturn.play();
            checkWin();
            if(! isgameover){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn
            }
        }
    })
})


reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    })
    isgameover = false
    document.querySelector('.line').style.width = "0vw"
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})