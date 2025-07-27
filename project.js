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

const SYMBOL_VALUES = {
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
};

//spin the slot machine
const spin = () => {
    //const makes sure the values in the array are the same but (reference data type)
    //later is when we will actually add values to the array 
    const symbols = []; 

    for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for(let i = 0; i < count; i++){
            symbols.push(symbol); //add to array 
        }
    }

    const reels = [];

    for(let i = 0; i < COLS; i++){
        reels.push([]);
        const reelSymbols = [...symbols]; //copies available symbols into array 
        for(let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length); //rand num between 0-1 from random
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels; 
};

const transpose = (reels) => {
    const rows = [];

    for(let i = 0; i < ROWS; i++){
        rows.push([]);
        for(let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i])
        }
    }

    return rows; 
};

const printRows = (rows) => {
    for(const row of rows){
        let rowString = "";

        for(const [i, symbol] of row.entries()){
            rowString += symbol;

            if(i != row.length - 1){
                rowString += " | ";
            }
        }
        console.log(rowString)
;    }
}

const getWinnings = (rows, bet, lines) => {
    let winnings = 0; 
    for(let row = 0; row < lines; row++){
        const symbols = rows[row];
        let allSame = true; 

        for(const symbol of symbols){
            if(symbol != symbols[0]){
                allSame = false; 
                break;
            }
        }

        if(allSame){
            winnings += bet * SYMBOL_VALUES[symbols[0]];
        }
    }

    return winnings; 
}

const game = () => {
    //inital deposit is starting balance which will change so use let 
    let balance = deposit();

    while(true){
        console.log("Your have a balance of: $" + balance.toString());
        const numberOfLines = getNumberOfLines(); 
        const bet = getBet(balance, numberOfLines); 
        balance -= bet * numberOfLines; 
        const reels = spin(); 
        const rows = transpose(reels);
        printRows(rows); 
        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings; 
        console.log("You won: $" + winnings.toString());
        
        if(balance <= 0){
            console.log("You ran out of money :(");
            break; 
        }

        const playAgain = prompt("Do you want to play again? (y/n)");
        if(playAgain != "y"){
            break;
        }
    }
    
}

game();

