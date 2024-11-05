import Game from '../src/class/Game';
import Board from '../src/class/Board';

describe('Board', () => {
    let board;

    beforeEach(() => {
        board = new Board();
    });

    test('doit initialiser le tableau vide', () => {
        expect(board.board).toEqual([
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ]);
    });

    test('doit placer une X', () => {
        board.placeMark(0, 0, 'X');
        expect(board.board[0][0]).toBe('X');
    });

    test('ne doit pas placer une X sur une place occuper', () => {
        board.placeMark(0, 0, 'X');
        expect(board.placeMark(0, 0, 'O')).toBe(false);
    });

    test('doit détecter un gagnant', () => {
        board.placeMark(0, 0, 'X');
        board.placeMark(0, 1, 'X');
        board.placeMark(0, 2, 'X');
        expect(board.checkWinner('X')).toBe(true);
    });

    test('doit détecter un tableau remplit', () => {
        board.board = [
            ['X', 'O', 'X'],
            ['X', 'O', 'X'],
            ['O', 'X', 'O']
        ];
        expect(board.isFull()).toBe(true);
    });
});

describe('Game', () => {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    test('should initialize with a random current player', () => {
        expect(['O', 'X']).toContain(game.currentPlayer);
    });
});
