var optionsArr = ['Rock','Paper','Scissors'];
var index = Math.floor(Math.random()*3);
var cpuSelected = optionsArr[index];
var playerSelected = 'Rock'

function computerPlay(playerSel,cpuSel){
    switch(playerSel.toLowerCase()){
        case 'rock':
            if(cpuSel.toLowerCase()=='rock') return 'draw';
            else if(cpuSel.toLowerCase()=='paper') return 'thou lost, paper wraps rock.';
            else return 'You won! Rock beats scissors';break;
        case 'paper':
            if(cpuSel.toLowerCase()=='paper') return 'draw';
            else if(cpuSel.toLowerCase()=='scissors') return 'thou lost, scissors clips paper.';
            else return 'You won! Paper wraps rock.';break;
        case 'scissors':
            if(cpuSel.toLowerCase()=='scissors') return 'draw';
            else if(cpuSel.toLowerCase()=='rock') return 'thou lost, rock beats scissors.';
            else return 'You won! Scissors clips paper.';break;         
    }
}

console.log(computerPlay(playerSelected,cpuSelected));