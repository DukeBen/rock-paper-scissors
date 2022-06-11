let pwin = 0;
let cwin = 0;

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
    for(let i = 0; i<5; i++)
    {
        let response = prompt("Rock, Paper, or Scissors?");
        console.log(playRound(response, computerPlay()));
    }
    if(pwin>cwin)
        console.log(`Wow!  You beat the computer with a score of ${pwin} - ${cwin}`);
    else if(cwin > pwin)
        console.log(`Aw man.  You lost to the computer.  The score was ${cwin} - ${pwin}`);
    else
        console.log(`You and the computer tied!  It was ${pwin} - ${cwin}`);
}

game();