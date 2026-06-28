class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let st = 0, end = heights.length-1;
        let globalMax = 0;
        while(st < end){
            let area = Math.min(heights[st],heights[end]) * (end-st);
            globalMax = Math.max(globalMax,  area);
            if(heights[st] < heights[end]) st++;
            else end--;
        }

        return globalMax;
    }
}
