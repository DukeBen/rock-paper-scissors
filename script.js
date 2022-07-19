let pwin = 0;
let cwin = 0;
let finished = false;
const container = document.querySelector('div.container'); 

function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    let x = Math.floor(Math.random() * 3);
    return choices[x];
}

function playRound(p1, p2)
{
    let response1 = p1.toUpperCase();
    let comp = p2.toUpperCase();
    if(response1 === comp)
        return "You tied!  Nice try though"
    else if(response1 === "ROCK" && comp === "PAPER"){
        cwin++;
        return `You lose!  You picked ${p1} but the computer picked ${p2}.`;
    }
    else if(response1 === "ROCK" && comp === "SCISSORS"){
        pwin++;
        return `You win!  You picked ${p1} and the computer picked ${p2}.`;
    }
    else if(response1 === "PAPER" && comp === "ROCK"){
        pwin++;
        return `You win!  You picked ${p1} and the computer picked ${p2}.`;
    }
    else if(response1 === "PAPER" && comp === "SCISSORS"){
        cwin++;
        return `You lose!  You picked ${p1} but the computer picked ${p2}.`;
    }
    else if(response1 === "SCISSORS" && comp === "PAPER"){
        pwin++;
        return `You win!  You picked ${p1} and the computer picked ${p2}.`;
    }
    else if(response1 === "SCISSORS" && comp === "ROCK"){
        cwin++;
        return `You lose!  You picked ${p1} but the computer picked ${p2}.`;
    }
}   

function game(){
    
    const result = document.createElement('div');
    if(pwin>cwin)
    result.textContent = `Wow!  You beat the computer with a score of ${pwin} - ${cwin}`;
    else if(cwin > pwin)
    result.textContent = `Aw man.  You lost to the computer.  The score was ${cwin} - ${pwin}`;
    else
    result.textContent = `You and the computer tied!  It was ${pwin} - ${cwin}`;
    container.appendChild(result);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            if(pwin === 5 || cwin === 5 && finished === false)
            {
                game();
                finished = true;
            }
            else if(finished == true)
            {
                btn.disabled = true;
            }
            else{
                const div = document.createElement('div');
                div.textContent = playRound(e.target.id, computerPlay());
                container.appendChild(div);
            }
        });
})




