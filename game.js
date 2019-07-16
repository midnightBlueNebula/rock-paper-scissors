var playerWin = 0;
var cpuWin = 0;
var drawCount = 0;
function computerPlay(event){
    var optionsArr = ['Rock','Paper','Scissors'];
    var index = Math.floor(Math.random()*3);
    var cpuSel = optionsArr[index];
    var playerSel = event.target.value;
    switch(playerSel.toLowerCase()){
        case 'rock':
            if(cpuSel.toLowerCase()=='rock') document.querySelector('#message').innerText = 'draw';
            else if(cpuSel.toLowerCase()=='paper') document.querySelector('#message').innerText = 'thou lost, paper wraps rock.';
            else document.querySelector('#message').innerText = 'You won! Rock beats scissors.';break;
        case 'paper':
            if(cpuSel.toLowerCase()=='paper') document.querySelector('#message').innerText = 'draw';
            else if(cpuSel.toLowerCase()=='scissors') document.querySelector('#message').innerText = 'thou lost, scissors clips paper.';
            else document.querySelector('#message').innerText = 'You won! Paper wraps rock.';break;
        case 'scissors':
            if(cpuSel.toLowerCase()=='scissors') document.querySelector('#message').innerText = 'draw';
            else if(cpuSel.toLowerCase()=='rock') document.querySelector('#message').innerText = 'thou lost, rock beats scissors.';
            else document.querySelector('#message').innerText = 'You won! Scissors clips paper.';break;         
    }
    var resultText = document.querySelector('#message').innerText;
    if(resultText =='You won! Rock beats scissors.' || 
    resultText =='thou lost, rock beats scissors.')
        document.querySelector('#res-img').src='http://suptg.thisisnotatrueending.com/archive/18199837/images/1330873000683.jpg';
    else if(resultText =='You won! Scissors clips paper.' || 
    resultText =='thou lost, scissors clips paper.')
        document.querySelector('#res-img').src='https://www.pinclipart.com/picdir/middle/0-3033_png-scissors-cutting-paper-scissors-clip-art-transparent.png';
    else if(resultText == 'thou lost, paper wraps rock.' || 
    resultText == 'You won! Paper wraps rock.')
        document.querySelector('#res-img').src='https://3.bp.blogspot.com/-f3G8zOG39ZE/Wpty9YqqKkI/AAAAAAACg8I/8f813mebXQoCNKgedhU8sbxZLuoTykXiwCLcBGAs/s1600/e682b228b8ad1e1e8641de094f60e759.jpg';
    else if(resultText=='')  document.querySelector('#res-img').src='';
    else 
        document.querySelector('#res-img').src='https://s3.amazonaws.com/tjn-blog-images/wp-content/uploads/2015/12/19235447/what-does-your-handshake-say-about-you-810x540.jpg';
    if(resultText.match(/won/)) ++playerWin;
    else if(resultText.match(/lost/)) ++cpuWin;
    else ++drawCount;
    document.querySelector('#p-win').innerText = 'Player : ' + playerWin;
    document.querySelector('#c-win').innerText = 'CPU : ' + cpuWin;
    document.querySelector('#draw').innerText = 'Draw : ' + drawCount; 
    if(playerWin==5){
        document.querySelector('#res-img').src='';
        document.querySelector('#message').innerText = 'YOU WON!';
        playerWin = 0;
        cpuWin = 0;
        drawCount = 0;
    }
    else if(cpuWin==5){
        document.querySelector('#res-img').src='';
        document.querySelector('#message').innerText = 'YOU LOST!';
        playerWin = 0;
        cpuWin = 0;
        drawCount = 0;
    }
}


