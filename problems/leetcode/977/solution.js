// https://leetcode.com/problems/squares-of-a-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squares = nums.map(n => n**2);
    return squares.sort((a, b) => a - b);
};
