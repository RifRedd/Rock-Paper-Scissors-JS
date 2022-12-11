function getComputerChoice() {
    let randomInt = Math.floor(Math.random()* 3 + 1)
    let ComputerChoice;
    if (randomInt === 1) {
        ComputerChoice = "Rock"
        console.log(ComputerChoice)
    }
    else if (randomInt === 2) {
        ComputerChoice = "Paper"
        console.log(ComputerChoice)
    }
    else if (randomInt === 3){
        ComputerChoice = "Scissors"
        console.log(ComputerChoice)
    }
    else {
        console.log("ComputerChoice Error.")
    }
}


getComputerChoice()
