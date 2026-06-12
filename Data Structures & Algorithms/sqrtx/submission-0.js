class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if(x === 0) return x;
        if(x === 1 || x=== 2 || x===3) return x;

        let l = 2, r = Math.floor(x/2);
        while(l<=r){
            let mid = Math.floor((r+l)/2);
            const sq = mid * mid;
            if(sq === x) return mid;
            if(sq < x) l = mid+1;
            else r = mid-1;
        }
        return r;
    }
}


1,2,3,4,5,6,7,8,9,10,11,12,13
2,3,4,5,6
2,3
