console.clear();
var prompt = require("prompt-sync")();
// variaveis declaradas
let error = "Please enter a valid option";
let roundCounter = 1;
let userScore = 0;
let cpuScore = 0;
let Drawn = 0;
let options = ["rock", "paper", "scissor"];
const red = "\u001b[31m";
const blue = "\u001b[34m";
const white = "\u001b[0m";
const green = "\u001b[32m";
const userWin = green + "You win the round" + white;
const userLose = red + "You lose the round" + white;

// Inicio do jogo / 'while' para dar a opção de reiniciar ou não o jogo
while (true) {
  console.log(blue + "Choose the number of rounds: " + white);
  let rounds = prompt();
  while (isNaN(rounds)) {
    console.clear();
    console.log(red + error + white);
    console.log(blue + "Choose the number of rounds: " + white);
    rounds = prompt();
  }
  console.clear();

  // 'for' para repetiçao e contagem dos rounds 
  for (; roundCounter <= rounds; roundCounter++) {
    // mecânica de jogada da CPU
    const randomMechanic = Math.floor(Math.random() * 3);
    let randomChoice = options[randomMechanic];
    console.log("Make your choice: Rock, Paper, Scissor");
    let userChoice = prompt().toLowerCase().trim();
    // Erro na digitação
    while (
      userChoice != "rock" &&
      userChoice != "paper" &&
      userChoice != "scissor"
    ) {
      console.clear();
      console.log("Please enter a valid option");
      userChoice = prompt().toLowerCase().trim();
      if (
        userChoice == "rock" &&
        userChoice == "paper" &&
        userChoice == "scissor"
      ) {
        break;
      }
    }
    // Comparação para determinar vencedor da rodada
    if (
      (userChoice == "rock" && randomChoice == options[2]) ||
      (userChoice == "scissor" && randomChoice == options[1]) ||
      (userChoice == "paper" && randomChoice == options[0])
    ) {
      console.clear();
      console.log(userWin);
      userScore++;
    } else if (
      (userChoice == "rock" && randomChoice == options[1]) ||
      (userChoice == "scissor" && randomChoice == options[0]) ||
      (userChoice == "paper" && randomChoice == options[2])
    ) {
      console.clear();
      console.log(userLose);
      cpuScore++;
    } else {
      console.clear();
      console.log("Drawn");
      Drawn++;
    }
    let restRound = rounds - roundCounter;
    console.log(`This is round: ${roundCounter} rest ${restRound} rounds`);
    console.log(
      blue +
        `User choice: ${userChoice} and the CPU choice: ${randomChoice}` +
        white
    );
    console.log(`User score = ${userScore}
    CPU score = ${cpuScore}
    Drawns = ${Drawn}`);
    let retry = prompt(blue + "Press enter to next round" + white);
    console.clear();
  }
  let repetir = prompt("Deseja jogar novamente?  ").toLowerCase().trim();
  console.clear();
  rounds = 0;
  userScore = 0;
  cpuScore = 0;
  if (repetir == "nao") {
    break;
  }         
}       
