'use strict';

const checkButton = document.querySelector(".check");
let secretNumber = Math.floor(Math.random() * 100);
let totalScore = 20;
let highScore = 0;
//document.querySelector(".number").textContent = secretNumber;
console.log(secretNumber);

const displayMessage = (msg) => {
    document.querySelector(".message").textContent = msg;
}


checkButton.addEventListener("click", () => {
    const guess = Number(document.querySelector(".guess").value);
    document.querySelector(".guess").value = "";
    document.querySelector(".guess").focus();
    if (!guess) {
        displayMessage("👿 Please Select A Number");
    } else if (guess === secretNumber) {
        displayMessage("🏆 You Won Game...");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".guess").value = "";
        checkButton.disabled = true;
        document.querySelector(".guess").disabled = true;
        if (totalScore > highScore) {
            highScore = totalScore;
            document.querySelector(".highscore").textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (totalScore < 1) {
            displayMessage("🏓 You Lost Game");
            document.querySelector(".score").textContent = 0;
        } else {
            totalScore--;
            document.querySelector(".message").textContent = guess > secretNumber ? "📈 Too High..." : "📈 Too Low...";
            document.querySelector(".score").textContent = totalScore;
        }
    }


    // else if (guess > secretNumber) {
    //     if (totalScore < 1) {
    //         document.querySelector(".message").textContent = "🏓 You Lost Game";
    //         document.querySelector(".score").textContent = 0;
    //     } else {
    //         totalScore--;
    //         document.querySelector(".message").textContent = "📈 Too High...";
    //         document.querySelector(".score").textContent = totalScore;
    //     }
    // } else if (guess < secretNumber) {
    //     if (totalScore < 1) {
    //         document.querySelector(".message").textContent = "🏓 You Lost Game";
    //         document.querySelector(".score").textContent = 0;
    //     } else {
    //         totalScore--;
    //         document.querySelector(".message").textContent = "📈 Too Low...";
    //         document.querySelector(".score").textContent = totalScore;
    //     }
    // }
});


document.querySelector(".again").addEventListener("click", () => {

    document.querySelector(".number").textContent = "?";
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = 20;
    checkButton.disabled = false;
    document.querySelector(".guess").disabled = false;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    totalScore = 20;
    secretNumber = Math.floor(Math.random() * 100);
    document.querySelector(".highscore").textContent = highScore;

})



