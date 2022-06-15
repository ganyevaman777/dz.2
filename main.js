const small = document.querySelector(".small")
const move = document.querySelector(".move")

let position = 0;
let topPosition = 0;

const blockMove = () => {
    if (position < 440 && topPosition < 1) {
        position += 15;
        small.style.left = `${position}px`;
        setTimeout(blockMove, 50)
    }else if (position > 440 && topPosition < 440){
        topPosition += 15;
        small.style.top = `${topPosition}px`;
        setTimeout(blockMove, 50)
    }else if (position > 0 && topPosition > 440){
        position -= 15;
        small.style.left = `${position}px`;
        setTimeout(blockMove, 50)
    }else if (position < 1 && topPosition > 0){
        topPosition -= 15;
        small.style.top = `${topPosition}px`;
        setTimeout(blockMove, 50)
    }
};

move.addEventListener("click", () => {blockMove();
timer();
});


const h1 = document.querySelector("h1")
let time = -1;

const timer = () => {
    if (position < 500 && topPosition < 500){
        time += 1;
        h1.innerText = `${time}`
        setTimeout(timer, 1000)
    }
    console.log(time)
};

