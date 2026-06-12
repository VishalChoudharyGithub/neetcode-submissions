class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let left = 0,right = k-1;
        for(let i = right + 1; i < arr.length; i++){
            let leftDiff = Math.abs(x- arr[left]);
            let rightDiff = Math.abs(x - arr[i]);
            console.log(leftDiff, rightDiff,i);
            if(leftDiff ===  rightDiff || leftDiff < rightDiff) break;
            left++;
            right++;
        }
        const res = [];
        for(let i = left; i<= right; i++){
            res.push(arr[i]);
        }
        return res;
    }

    // [-10,2,6,7,9]  k = 2, x = 4
}



