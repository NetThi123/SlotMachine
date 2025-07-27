# Slot Machine Game 🎰

A simple Node.js command-line slot machine game where users can deposit money, bet on lines, spin reels, and win or lose based on symbol matches.

## How it Works: 
1. Prompt the user to deposit money.
2. Ask how many lines to bet on (1–3).
3. Prompt for the bet amount per line.
4. Spin the slot machine.
5. Check for winning lines (all symbols in a row must match).
6. Update the user's balance based on wins or losses.

Repeat or exit depending on user input and balance.
---

## Example Gameplay: 

Enter a deposit amount: 100
Enter the number of lines you want to bet on (1-3): 3
Enter a total bet per line: 10
A | A | A
C | D | B
B | B | C
You won: $50
Your balance: $120
Do you want to play again? (y/n): y

## Features

- **Deposit System:** Start with a custom deposit amount.
- **Betting Options:** Choose 1–3 lines to bet on and set your bet per line.
- **Random Slot Spins:** A 3x3 slot grid is populated with symbols A, B, C, and D.
- **Winnings Calculated:** Earn money based on matching symbols across lines:
  - A = 5x payout  
  - B = 4x payout  
  - C = 3x payout  
  - D = 2x payout
- **Replay Option:** Continue as long as you have balance or choose to exit.

---

## How to Run

### Prerequisites

- Node.js must be installed. You can download it from [https://nodejs.org](https://nodejs.org)

### Installation & Execution

1. Clone the repository: git clone https://github.com/NetThi123/SlotMachine.git
2. Navigate to folder
3. Install required package: npm install prompt-sync
4. Run game: node project.js

