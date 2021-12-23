let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget= () => Math.floor(Math.random()*10)

const compareGuesses = (human, computer, target) => {
  if (Math.abs(target - human) <= Math.abs(target - computer)) {
    return true;
  }else {
    return false;
  }
}

const updateScore = (string) => {
  if (string === 'human') {
    humanScore += 1;
 }else {
    computerScore += 1;
 }
}

const advanceRound = () => currentRoundNumber += 1;