const buttons = document.querySelectorAll('.btn');
const results = document.getElementById('result');

buttons.forEach((button) => {

    button.addEventListener("click" ,() => {
        const userChoose = button.getAttribute('data-choice');
        const computerChoose = getComChoice();
        const winner = findWinner(userChoose , computerChoose);
        results.innerText = `You Chose ${userChoose} and Computer Chose ${computerChoose}. ${winner}`
    });

});

function getComChoice() {
    const choices = ['rock' , 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex];
    
}

function findWinner(user , computer) {
    if(user === computer) return "It's a tie!"
    
    if((user === "rock" && computer === "scissors") ||
     (user === "paper" && computer === "rock") ||
     (user === "scissors" && computer === "paper")) {
        return "You Win!";
    }
    return "Computer Wins!";
}