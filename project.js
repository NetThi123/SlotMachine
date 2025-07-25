/* 
1. Desposit some money 
2. Determine number of lines to bet on 
3. Collect a bet amount 
4. Spin the slot machine 
5. Check if the user won or lost 
6. Give the user the money if they won or take their money if they lost
7. Play again or exit (eg. user has no money left)
*/

//import into proggram 
const prompt = require("prompt-sync")();

//globals (vars, objects with key value pair)
const ROWS = 3; 
const COLS = 3; 
const SYMBOLS_COUNT = {
    "A" : 2, 
    "B": 4, 
    "C": 6, 
    "D": 8
}

const SYMBOL_VAL = {
    "A": 5, 
    "B": 4, 
    "C": 3, 
    "D": 2
}

//function to prompt user for deposit amount to start with 
const deposit = () => {
    while(true){
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, try again.");
        }
        else{
            return numberDepositAmount; 
        }

    }
    
};

//ask user how many lines they want to bet on 
const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter a the number of lines you want to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines, try again.");
        }
        else{
            return numberOfLines; 
        }

    }
};

//determine if bet amount okay based on balance amount 
const getBet = (balance, lines) => {
    while(true){
        const bet = prompt("Enter a total bet per line: ");
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet) || numberBet <= 0 || numberBet*lines > balance){
            console.log("Invalid betting amount, try again.");
        }
        else{
            return numberBet; 
        }

    }
}

//spin the slot machine
const spin = () => {

}


//inital deposit is starting balance which will change so use let 
let balance = deposit();
const numberOfLines = getNumberOfLines(); 
const bet = getBet(balance, numberOfLines); 

