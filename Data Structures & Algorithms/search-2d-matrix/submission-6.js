class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let u = 0, b = matrix.length-1;

        while(u<=b){
            let midIndex = Math.floor((b+u)/2);
            let mid = matrix[midIndex];
            console.log(mid);
            if(target >= mid[0] && target <= mid[mid.length-1]){
                let l = 0, r= mid.length-1;
                while(l<=r){
                   let rowMid = Math.floor((r+l)/2);
                   const rowMidValue = mid[rowMid];
                    console.log(rowMidValue);
                   if(rowMidValue === target) return true;
                   else if(rowMidValue > target) r = rowMid-1;
                   else l = rowMid+1;
                }
                return false;
            }else if(target < mid[0]) b = midIndex-1;
            else u = midIndex+1;
        }

        return false;
    }
}
