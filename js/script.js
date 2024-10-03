const result = document.querySelector(".result");
const myScore = document.getElementById("score");
const machineScore = document.getElementById("scoreM");

let humanScore = 0; // Renomeado para "humanScore"
let scoreMachine = 0;

const humanTouch = (myChoice) => {
  playGame(myChoice, machineChoice());
};

const machineChoice = () => {
  const choices = [`rock`, `paper`, `scissors`];
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  return choices[randomNumber];
};

const playGame = (human, machine) => {
  console.log(`humano: ${human} máquina: ${machine}`);

  if (human === machine) {
    result.innerHTML = "Deu Empate!";
  } else if (
    (human === `paper` && machine === `rock`) ||
    (human === `rock` && machine === `scissors`) ||
    (human === `scissors` && machine === `paper`)
  ) {
    humanScore++; // Atualizando a variável de pontuação
    myScore.innerHTML = humanScore; // Atualizando o escore do jogador
    result.innerHTML = "Fatality!";
  } else {
    scoreMachine++; // Atualizando a variável de pontuação
    machineScore.innerHTML = scoreMachine; // Atualizando o escore da máquina
    result.innerHTML = "Você se Lascou!";
  }
};
