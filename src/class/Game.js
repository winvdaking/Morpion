import readline from "readline";
import Board from "./Board.js";

export default class Game {
    constructor() {
        this.board = new Board();
        this.currentPlayer = Math.random() < 0.5 ? 'O' : 'X';
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    playTurn() {
        this.board.printBoard();
        this.rl.question(`Joueur ${this.currentPlayer}, choisissez une case (ex: A1, B2, C3): `, (input) => {
            const row = input.charCodeAt(0) - 65;
            const col = parseInt(input[1]) - 1;

            if (row >= 0 && row < 3 && col >= 0 && col < 3 && this.board.placeMark(row, col, this.currentPlayer)) {
                if (this.board.checkWinner(this.currentPlayer)) {
                    this.board.printBoard();
                    console.log(`Joueur ${this.currentPlayer} a gagné !`);
                    this.rl.close();
                } else if (this.board.isFull()) {
                    this.board.printBoard();
                    console.log('Match nul !');
                    setTimeout(() => this.rl.close(), 10000); // 10 secondes
                } else {
                    this.currentPlayer = this.currentPlayer === 'O' ? 'X' : 'O';
                    this.playTurn();
                }
            } else {
                console.log('Mouvement invalide, essayez à nouveau.');
                this.playTurn();
            }
        });
    }

    start() {
        this.playTurn();
    }
}