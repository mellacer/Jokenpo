const optionImages = document.querySelectorAll(".option-image");
const container = document.querySelector(".container");
const resultText = document.querySelector(".result-text");
const userResult = document.querySelector(".user-result img");
const computerResult = document.querySelector(".computer-result img");

const computerImg = ["img/pedra.png", "img/papel.png", "img/tesoura.png"];

/*
(R) Rock - Pedra
(P) Paper - Papel
(S) Scissors - Tesoura
*/
const winner = {
  RR: "Empate",
  RP: "Computador",
  RS: "Você",
  PP: "Empate",
  PR: "Você",
  PS: "Computador",
  SS: "Empate",
  SR: "Computador",
  SP: "Você",
};

function handleOptionClick(event) {
  const clickedImage = event.currentTarget;
  const clickedIndex = Array.from(optionImages).indexOf(clickedImage);

  container.classList.add("start");
  resultText.textContent = "...";

  userResult.src = computerResult.src = computerImg[0];

  setTimeout(() => {
    container.classList.remove("start");

    userResult.src = computerImg[clickedIndex];

    const randowNumber = Math.floor(Math.random() * computerImg.length);
    computerResult.src = computerImg[randowNumber];

    const userValue = ["R", "P", "S"][clickedIndex];
    const computerValue = ["R", "P", "S"][randowNumber];
    const userComputerResult = userValue + computerValue;
    const finalResult = winner[userComputerResult];

    resultText.textContent =
      userValue === computerValue ? "Empate" : finalResult + " Ganhou";
  }, 2000);
}

optionImages.forEach((img) => {
  img.addEventListener("click", handleOptionClick);
});
