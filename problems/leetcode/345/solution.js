// https://leetcode.com/problems/reverse-vowels-of-a-string/

/**
 * @param {string} c
 * @return {boolean}
 */
function isVowel(c) {
    const vowels = ['a','e','i','o','u'];
    return vowels.includes(c.toLowerCase());
}

/**
 *  @param {string} s
 *  @return {string}
 */
function reverseVowels(s) {
    const str = s.split('');

    // O(s.length)
    for (let i = 0, j = str.length - 1; i < j;) {
        if (isVowel(str[i]) && isVowel(str[j])) {
            // swap
            let temp = str[i];
            str[i] = str[j];
            str[j] = temp;
            i++;
            j--;
        }
        else {
            if (!isVowel(str[i])) {
                i++
            }
            if (!isVowel(str[j])) {
                j--
            }
        }
    }

    return str.join('');
}
