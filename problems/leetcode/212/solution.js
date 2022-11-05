// https://leetcode.com/problems/word-search-ii/description/

const assert = require('assert');

class TrieNode {
  constructor() {
    this.links = new Array(26);
    this.word = undefined;
  }

  /**
   * 
   * @param {string} c 
   * @returns number
   */
  getCharIndex(c) {
    return c.charCodeAt(0) % 97;
  }

  /**
   * 
   * @param {string} c 
   * @returns boolean
   */
  containsKey(c) {
    return this.links[this.getCharIndex(c)] !== undefined;
  }

  /**
   * 
   * @param {string} c 
   * @returns TrieNode
   */
  get(c) {
    return this.links[this.getCharIndex(c)];
  }

  /**
   * 
   * @param {string} c 
   * @param {TrieNode} node 
   */
  set(c, node) {
    this.links[this.getCharIndex(c)] = node;
  }

  /**
   * 
   * @param {string} word 
   */
  setWord(word) {
    this.word = word;
  }

  getWord() {
    return this.word;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * 
   * @param {string} word to insert 
   * @returns {void}
   */
  insert(word) {
    let node = this.root;

    for (let c of word) {
      if (!node.containsKey(c)) {
        const newNode = new TrieNode();
        node.set(c, newNode);
        node = newNode;
      } else {
        node = node.get(c);
      }
    }

    node.setWord(word);
  }
}

/**
 * 
 * @param {string[][]} board 
 * @param {string[]} words 
 */
function findWords(board, words) {
  const rowLen = board.length;
  const colLen = board[0].length;
  const directions = [[-1, 0], [1,0], [0,1], [0, -1]];
  const matchedWords = [];
  const trie = new Trie();
  words.forEach(w => trie.insert(w));

  function backtracking(row, col, parent) {
    const c = board[row][col];
    const node = parent.get(c);

    if (!!node.word) {
      matchedWords.push(node.word);
      node.setWord(null);
    }

    // Before continuing exploration, mark cell as visited
    board[row][col] = '#';
    
    for (let [rowOffset, colOffset] of directions) {
      const newRow = row + rowOffset;
      const newCol = col + colOffset;
      
      if (newRow < 0 || newRow >= rowLen || newCol < 0 || newCol >= colLen) {
        continue;
      }
      
      if (!node.containsKey(board[newRow][newCol])) {
        continue;
      }

      backtracking(newRow, newCol, node);
    }

    // End of exploration, restore the cell for others to use
    board[row][col] = c;

    if (!!node.word) {
      parent.set(c, null);
    }
  }

  for (let row = 0; row < rowLen; row++) {
    for (let col = 0; col < colLen; col++) {
      // We initialize a search on each cell
      if (trie.root.containsKey(board[row][col])) {
        backtracking(row, col, trie.root);
      }
    }
  }

  return matchedWords;
}

const case1 = {
  board: [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
  words: ["oath","pea","eat","rain"],
  expected: ["eat","oath"],
};
case1.res = findWords(case1.board, case1.words);

const case2 = {
  board: [["a","b"],["c","d"]],
  words: ["eat","oath"],
  expected: [],
}
case2.res = findWords(case2.board, case2.words);

const case3 = {
  board: [["o","a","b","n"],["o","t","a","e"],["a","h","k","r"],["a","f","l","v"]],
  words: ["oa", "oaa"],
  expected: ["oa", "oaa"],
}
case3.res = findWords(case3.board, case3.words);

const case4 = {
  board: [["a", "b"]],
  words: ["ab"],
  expected: ["ab"],
}
case4.res = findWords(case4.board, case4.words);

assert.equal(case1.expected.every(w => case1.res.includes(w)), true);
assert.equal(case2.expected.every(w => case2.res.includes(w)), true);
assert.equal(case3.expected.every(w => case3.res.includes(w)), true);
assert.equal(case4.expected.every(w => case4.res.includes(w)), true);
