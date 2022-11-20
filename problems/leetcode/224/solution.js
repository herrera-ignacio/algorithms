/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
    const stack = [];
    let res = 0;
    let sign = 1;
    let op = 0;

    for (let c of s) {
        if (isDigit(c)) {
            op = op * 10 + Number(c);
        }

        else if (c === '+') {
            // Evaluate the expression to the left
            res += sign * op;

            // Reset operand
            op = 0;

            // Save just found operator
            sign = 1;
        }

        else if (c === '-') {
            // Evaluate the expression to the left
            res += sign * op;

            // Reset operand
            op = 0;

            // Save just found operator
            sign = -1;
        }

        else if (c === '(') {
            // Save the current res and sign for later
            // We'll begin evaluating a brand new operation
            // We push the result first, and then the sign.
            stack.push(res);
            stack.push(sign);

            // Reset res and sign
            // This is a new subexpression
            res = 0;
            sign = 1;
        }

        else if (c === ')') {
            // Evaluate the expression to the left.
            res += sign * op; 
            
            // Apply sign to the expression inside parenthesis.
            res *= stack.pop();
            
            // Add to enclosing expression.
            res += stack.pop();
            
            // Reset operand.
            op = 0;
            // We know a sign is next so need to reset it.

        }
    }

    return res + sign * op;
}

/**
 * @param {string} c
 * @return {boolean}
 */
function isDigit(c) {
    return /\d+/.test(c);
}
