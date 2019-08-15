//Rock paper scissors game

const compChoice = ['rock', 'paper', 'scissors'];
let player;
let playerScore = 0;
let compScore = 0;
//create button elements and append to DOM & create results div
const main = document.getElementById('main')//.querySelector('.rock');//.getElementsByTagName('div')[0];
let results = document.createElement('div');//let scores = document.getElementById('results');
results.id = 'results';

main.appendChild(results);


//create  paragraph to display player and comp choices and who won that round
const p = document.createElement('p');

main.appendChild(p);
//p.textContent= 'results here';




let newDiv = document.createElement('div');
let newDiv1 = document.createElement('div');
newDiv1.classList.add('comp-results');
newDiv.classList.add('player-results');
results.appendChild(newDiv);
results.appendChild(newDiv1);
newDiv.innerHTML =  playerScore;
newDiv1.innerHTML  = compScore;

let newdiv5 = document.createElement('div');
const newDiv6 = document.createElement('div');

results.appendChild(newdiv5);
results.appendChild(newDiv6);

//newdiv5.classList.add('player-badge');
newdiv5.id= 'player-label';
newdiv5.textContent = 'player';
//newDiv6.classList.add('comp-badge');
newDiv6.id = 'comp-label';
newDiv6.textContent = 'computer';

//create text node for player and computer scores
let newDiv3 = document.createElement('div');
//newDiv3.classList.add('score-player');
//newDiv3.textContent="player";
results.appendChild(newDiv3);

let main3 = document.getElementById('main').querySelector('.rock')
let btnR = document.createElement('button');
btnR.id = "button";
main3.appendChild(btnR);
btnR.innerHTML = '<img id="picR" src="/home/dom/functions/rock (1).png">';



let main1 = document.getElementById('main').querySelector('.paper');//.getElementsByTagName('div')[1];

let btnP = document.createElement('button');
btnP.id = "button";
main1.appendChild(btnP);
btnP.innerHTML = '<img id="picP" src="/home/dom/functions/paper.png">';

let main2 = document.getElementById('main').querySelector('.scissors');//.getElementsByTagName('div')[2];
let btnS = document.createElement('button');
btnS.id = "button";
main2.appendChild(btnS);
btnS.innerHTML = '<img id="picS" src="file:///home/dom/functions/scissors(3).png">';


// add event listeners
btnR.addEventListener('click', rock);
btnP.addEventListener('click', paper);
btnS.addEventListener('click', scissors);

//add background color and style when mouse is over element
let picS = document.getElementById('picS');
btnS.addEventListener('mouseover', function(){

    picS.style.boxShadow = "0px -3px 40px 20px yellow";
    
})

btnS.addEventListener('mouseout', function(){

    picS.style.boxShadow = "0px -3px 40px 20px whitesmoke";
    
})

let picR = document.getElementById('picR');
btnR.addEventListener('mouseover', function(){

    picR.style.boxShadow = "0px -3px 40px 20px yellow";
    
})

btnR.addEventListener('mouseout', function(){

    picR.style.boxShadow = "0px -3px 40px 20px whitesmoke";
    
})

let picP = document.getElementById('picP');
btnP.addEventListener('mouseover',function(){

    picP.style.boxShadow = "0px -3px 40px 20px yellow";

      
})

btnP.addEventListener('mouseout', function(){

    picP.style.boxShadow = "0px -3px 40px 20px whitesmoke";
})

//functions to run if won, lost or drawn 
let win = ()=>{
    playerScore++;
    p.innerHTML = 'Yay! you win!  player chose ' + player + ', computer chose ' + comphand;
    gameWinner();
    return;
}

let lose = ()=>{
    compScore++;
    p.innerHTML =  "You lose. "  + ' player chose ' + player + ', computer chose ' + comphand;
    gameWinner();
    return;
}

let draw = ()=>{
    p.innerHTML = "Tie - " + ' player chose ' + player + ', computer chose ' + comphand;
    gameWinner();
    return;
}

//main functions 
function rock(){

      player ='rock';
      comphand = compChoice[Math.floor(Math.random() * compChoice.length)];
      
        if (comphand === 'scissors'){
            
            win();
             
        }else if(comphand === 'paper'){
            
            lose();
                
        }else {comphand === 'rock'
        
            draw();
                
        }
            
            newDiv.innerHTML =  playerScore;
            newDiv1.innerHTML  =  compScore;
            
    } 


  function paper(){
      
    player = 'paper';
    comphand = compChoice[Math.floor(Math.random() * compChoice.length)];
    
        if (comphand === 'rock'){
            
            win();
        }else if (comphand === 'scissors'){
            
            lose();
        }else {comphand === 'paper'
    
            draw();
        }
            
            
            newDiv.innerHTML =  playerScore;
            newDiv1.innerHTML  = compScore;
            
    }

    function scissors(){

       player = 'scissors';
       comphand = compChoice[Math.floor(Math.random() * compChoice.length)];

        if (comphand === 'rock'){
            
            lose();
        }else if (comphand === 'paper'){
            
            win();
        }else {comphand === 'scissors'
        
            draw();
        }

        
            
            newDiv.innerHTML =  playerScore;
            newDiv1.innerHTML = compScore;
    }

function gameWinner (){

    

    if(playerScore === 5){

        alert('You win champ!!!');
        p.style.display = 'none';
        p.style.display = 'block'
        p.innerHTML = " The final score - click here to playagain?";
        p.addEventListener('click', playAgain);
        
        
        
    }else if(compScore >= 5){
        alert('You lose schmuck!!!');
        p.style.display = 'none';
        p.style.display = 'block'
        p.innerHTML = "The final score - click here to playagain?";
        p.addEventListener('click', playAgain);
        
    }
    
    
    return;
}

function playAgain(){

    //yes = confirm('play again?');

    if (true){
        location.reload();
    }
}
