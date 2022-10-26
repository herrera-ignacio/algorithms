// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/

/**
 * @param {string[]} arr
 * @return {number}
 */
 const maxLength = (arr) => {
    // Initialize a set with an empty set.
    const solutions = new Set([""]);

    for (let str of arr) {
      const strAsSet = new Set(str);
      
      // Discard strings with repeated characters.
      if (strAsSet.size !== str.length) {
        continue;
      }

      // Assemble all possible concatenations with unique characters
      for (let sol of solutions) {
        const unique = [...str].every(c => !sol.includes(c))
        
        if (unique) {
            solutions.add([...str, ...sol]);
        }
      }
    }

    return Math.max(...[...solutions].map(s => s.length));
};

// const arr = ["cha","r","act","ers"];
// console.log(maxLength(arr));
