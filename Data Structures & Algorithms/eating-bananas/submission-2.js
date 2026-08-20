class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1, r = piles.reduce((p1,p2)=> p1+p2, 0);
        let res = r;

        function canEat(k){
            let hour = 0;
            for(let pile of piles){
                hour += Math.ceil(pile/k);
                if(hour > h) return false; 
            }
            return true;
        }

        while( l <= r){
            let k = l+Math.floor((r-l)/2);
            if(canEat(k)){
                res = Math.min(res,k);
                r = k-1;
            }else{
                l = k+1;
            }
        }

        return res;
    }
}
