// https://leetcode.com/problems/word-search/description/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (backtrack(row, col, board, word, 0)) {
                return true;
            }
        }
    }

    return false;
}

/**
 * @param {number} number
 * @param {number} col
 * @param {character[][]} board
 * @param {string} word
 * @param {number} wordPos: position to look at the word
 * @return {boolean}
 */
function backtrack(row, col, board, word, wordPos) {
    const directions = [[0,1], [0,-1], [1,0], [-1,0]];

    if (!isValidRow(row, board) || !isValidCol(col, board)) {
        return false;
    }

    const c = board[row][col];

    if (c !== word[wordPos]) {
        return false;
    }

    board[row][col] = '*';

    // Found last character
    if (wordPos === word.length - 1) {
        return true;
    }
    
    for (let d of directions) {
        if (backtrack(row + d[0], col + d[1], board, word, wordPos + 1)) {
            return true;
        }
    }

    board[row][col] = c;

    return false;
}

function isValidRow(row, board) {
    return row >= 0 && row < board.length;
}

function isValidCol(col, board) {
    return col >= 0 && col < board[0].length;
}
