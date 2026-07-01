class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {

        // I'll store every valid parenthesis string here.
        const result = [];

        // This represents the string I'm currently building.
        const current = [];

        // Let me keep track of how many opening and
        // closing brackets I've already placed.
        function backtrack(open, close) {

            // Nice! If I've placed exactly 2 * n brackets,
            // I've built one complete answer.
            if (current.length === 2 * n) {
                result.push(current.join(""));
                return;
            }

            // Hmm... can I still place an opening bracket?
            // Yes, as long as I haven't already used all n of them.
            if (open < n) {

                // Let me place '('.
                current.push("(");

                // I've used one more opening bracket.
                backtrack(open + 1, close);

                // Done exploring every possibility that starts
                // with this choice. Time to undo it.
                current.pop();
            }

            // Can I place a closing bracket?
            // Only if there's already an unmatched '('.
            // Otherwise I'd create something like ")(" or "())".
            if (close < open) {

                // Let me place ')'.
                current.push(")");

                // I've used one more closing bracket.
                backtrack(open, close + 1);

                // Finished exploring this branch.
                // Undo my last decision.
                current.pop();
            }
        }

        // Let's start with an empty string.
        backtrack(0, 0);

        return result;
    }
}