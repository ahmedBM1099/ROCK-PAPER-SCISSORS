const btn = document.querySelector('.btn')
const container = document.querySelector('.container')

//starting the game
btn.addEventListener('click', () => {
    container.style.opacity = '1';
    btn.style.opacity = '0';
})


function game() {

    const text = document.querySelector('.text')
    const playerImg = document.querySelector('.personImg')
    const machineImg = document.querySelector('.machineImg')
    const playerOptions = document.querySelectorAll('.choice img')

    let humanScore = 0;
    let machineScore = 0;

    const updateScore = ()  => {
        const pscore = document.querySelector('.p')
        const mscore = document.querySelector('.m')
        if(humanScore === 5){
            alert('human wins')
            location.reload()
        }else if(machineScore === 5){
            alert('machine wins')
            location.reload()
        }else{
            pscore.textContent = humanScore;
            mscore.textContent = machineScore;
        }
    }

    
    //seting the img of the player and the random img of the computer
    playerOptions.forEach(option => {
        option.addEventListener('click', function() {

            const RPS = ['rock','paper','scissors'];
            const randomNumber = Math.floor(Math.random() * 3);
            const machineChoice = `images/${RPS[randomNumber]}.png`;
            const playerChoice = `images/${this.className}.png`;

            playGame(this.className, RPS[randomNumber]);

            playerImg.src = playerChoice;
            machineImg.src = machineChoice;

        });
    });

    const playGame = (playerSelection, computerSelection) => {
      
        console.log(playerSelection)
        console.log(computerSelection)
        
    
        if(playerSelection === computerSelection) {
            console.log('ya')
            text.textContent = 'its a tie';
            return;
        }
    
        if(playerSelection === 'scissors') {
            if(computerSelection === 'rock') {
                text.textContent = `${computerSelection} beats ${playerSelection} try again human`;
                machineScore++;
                updateScore()
            
                return;
            } else {
                text.textContent = `${playerSelection} beats ${computerSelection}`;
                humanScore++
                updateScore()
            
                return;
            }
        } 
    
         if(playerSelection === 'rock'){
            if(computerSelection === 'paper'){
                text.textContent = `${computerSelection} beats ${playerSelection} try again human`;
                machineScore++
                updateScore()
           
                return;
            } else {
                text.textContent = `${playerSelection} beats ${computerSelection} `;
                humanScore++
                updateScore()
     
                return;
            }
        }
    
         if(playerSelection === 'paper') {
            if(computerSelection === 'scissors'){
                text.textContent = `${computerSelection} beats ${playerSelection} try again human`;
                machineScore++
                updateScore()
      
                return;
            } else { 
                text.textContent = `${playerSelection} beats ${computerSelection} `;
                humanScore++
                updateScore()
                return;
            }
        }
        
    }

}


game()