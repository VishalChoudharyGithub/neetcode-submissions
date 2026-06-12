class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        let res = [];
        for(let i = temperatures.length-1; i>=0;i--){
                while(stack.length && temperatures[i]>= temperatures[stack[stack.length -1]]) stack.pop();
                if(!stack.length) res.push(0);
                else res.push(stack[stack.length -1] - i);
                stack.push(i);
        }

        return res.reverse();
    }
}
