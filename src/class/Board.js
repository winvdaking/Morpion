export default class Board {
    constructor() {
        this.board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
    }

    printBoard() {
        console.log('  1 2 3');
        for (let i = 0; i < 3; i++) {
            console.log(String.fromCharCode(65 + i) + ' ' + this.board[i].join('|'));
            if (i < 2) console.log('  -----');
        }
    }

    isFull() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[i][j] === ' ') return false;
            }
        }
        return true;
    }

    placeMark(row, col, mark) {
        if (this.board[row][col] === ' ') {
            this.board[row][col] = mark;
            return true;
        }
        return false;
    }

    checkWinner(mark) {
        for (let i = 0; i < 3; i++) {
            if (this.board[i][0] === mark && this.board[i][1] === mark && this.board[i][2] === mark) return true;
            if (this.board[0][i] === mark && this.board[1][i] === mark && this.board[2][i] === mark) return true;
        }
        if (this.board[0][0] === mark && this.board[1][1] === mark && this.board[2][2] === mark) return true;
        if (this.board[0][2] === mark && this.board[1][1] === mark && this.board[2][0] === mark) return true;
        return false;
    }
}
