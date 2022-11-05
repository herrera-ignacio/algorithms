// https://leetcode.com/problems/implement-trie-prefix-tree/
// https://leetcode.com/problems/implement-trie-prefix-tree/solutions/127843/implement-trie-prefix-tree/

const assert = require('assert');

class TrieNode {
  constructor() {
    this.links = new Array(26);
    this.isWord = false;
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

    node.isWord = true;
  }

  /**
   * 
   * @param {string} word 
   * @returns {boolean} if found
   */
  search(word) {
    const node = this._searchPrefix(word);
    return node !== null && node.isWord;
  }

  /**
   * 
   * @param {string} prefix 
   * @returns {boolean}
   */
  startsWith(prefix) {
    return this._searchPrefix(prefix) !== null;
  }

  /**
   * 
   * @param {string} prefix 
   * @returns {TrieNode}
   */
  _searchPrefix(prefix) {
    let node = this.root;
    
    for (let c of prefix) {
      if (node.containsKey(c)) {
        node = node.get(c);
      } else {
        return null;
      }
    }
    
    return node;
  }
}

trie = new Trie();
trie.insert("apple");
assert.equal(trie.search("apple"), true);
assert.equal(trie.search("app"), false);
assert.equal(trie.startsWith("app"), true);
trie.insert("app");
assert.equal(trie.search("app"), true);
