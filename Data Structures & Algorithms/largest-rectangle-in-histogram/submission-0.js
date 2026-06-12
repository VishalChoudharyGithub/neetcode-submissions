class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let area = 0;
        for(let i = 0; i<= heights.length-1;i++){
            let start = i;
            while(stack.length && stack[stack.length-1][1] >= heights[i]){
                const popped = stack.pop();
                area = Math.max(area, (i-popped[0]) * popped[1]);
                start = popped[0];
            }
            stack.push([start, heights[i]]);
        }

        while(stack.length){
            const popped = stack.pop();
            area = Math.max(area, (heights.length-popped[0]) * popped[1]);
        }

        return area;
    }
}
