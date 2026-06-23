class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const tempStack = [[temperatures[0],0]];
        for(let i = 1 ;i< temperatures.length;i++){
            while(tempStack.length && temperatures[i] > tempStack[tempStack.length-1][0]){
                const lastDay = tempStack.pop();
                temperatures[lastDay[1]] = i-lastDay[1];
            }
            tempStack.push([temperatures[i],i]);
        }
        console.log(temperatures,tempStack);
        while(tempStack.length){
            const lastDay = tempStack.pop();
             temperatures[lastDay[1]] = 0;
        }

        return temperatures;
    }
}
