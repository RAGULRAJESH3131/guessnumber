// let randomNum;
// let score = 20;
// let guessNumber = document.querySelector(".number");
// let chkBtn = document.getElementById("checkBtn");
// let inputField = document.querySelector(".guess");
// let messageResult = document.querySelector(".message");
// let scoredata = document.querySelector(".score");

// generateRndmNum();
// function generateRndmNum() {
//   randomNum = Math.floor(Math.random() * 20) + 1;
//   console.log(randomNum);
//   guessNumber.textContent = randomNum;
// }
// let checkGuessNumber = function () {
//   let inputvalue = inputField.value;
//   if (Number(inputvalue) === randomNum) {
//     messageResult.textContent = "correct guess";
//     document.body.style.backgroundColor = "green";
//     inputField.value = "";
//     generateRndmNum();
//   } else if (inputvalue < randomNum) {
//     messageResult.textcontent = "your guess is low";
//     score--;
//   } else if (inputvalue > randomNum) {
//     messageResult.textContent = "your guess is high";
//     score--;
//     scoredata.textContent = score;
//   }
// };
// chkBtn.addEventListener("click", checkGuessNumber);
