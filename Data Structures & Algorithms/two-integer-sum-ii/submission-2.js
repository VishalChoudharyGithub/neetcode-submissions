class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0, j = numbers.length-1;
        while(i< j){
            let sum = numbers[i]+ numbers[j] - target;
            if( sum === 0) return [i+1, j+1];
            if(sum > 0) j--;
            else i++;
        }
        return [];
    }
}
