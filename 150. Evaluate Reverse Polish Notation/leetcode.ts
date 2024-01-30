function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    function isNumeric(token: string): boolean {
        return !isNaN(parseFloat(token)) && isFinite(Number(token));
    }
    for (const token of tokens) {
        if (isNumeric(token)) {
            stack.push(Number(token));
        } else {
            const secondOperand = stack.pop();
            const firstOperand = stack.pop();
            if (typeof firstOperand === 'undefined' || typeof secondOperand === 'undefined') {
                throw new Error("Invalid Expression: Insufficient operands for the operator.");
            }
            switch (token) {
                case '+':
                    stack.push(firstOperand + secondOperand);
                    break;
                case '-':
                    stack.push(firstOperand - secondOperand);
                    break;
                case '*':
                    stack.push(firstOperand * secondOperand);
                    break;
                case '/':
                    stack.push(~~(firstOperand / secondOperand));
                    break;
                default:
                    throw new Error("Invalid token: Encountered an unknown operator.");
            }
        }
    }
    if (stack.length !== 1) {
        throw new Error("Invalid Expression: The final stack should only contain one element.");
    }

    return stack[0];
}
