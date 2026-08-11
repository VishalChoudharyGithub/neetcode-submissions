class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        const ops = new Set(["+", "C", "D"]);
        for (let operation of operations) {
            if (!ops.has(operation)) stack.push(Number(operation));
            else {
                if (operation === "C") stack.pop();
                else {
                    const last = stack.pop();
                    let newPush;
                    if (operation === "+") {
                        const secondLast = stack.pop();
                        newPush = last + secondLast;
                        stack.push(secondLast);
                    } else {
                        newPush = last * 2;
                    }
                    stack.push(last);
                    stack.push(newPush);
                }
            }
        }
        return stack.reduce((a, b) => a + b, 0);
    }
}
