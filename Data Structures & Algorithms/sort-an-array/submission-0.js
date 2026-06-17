class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        return this.mergeSort(0, nums.length-1,nums);
    }

    mergeSort(l, r,nums){
        if(l >= r) return nums;
        const mid = l+ Math.floor((r-l) / 2);
        this.mergeSort(l, mid, nums);
        this.mergeSort(mid+1,r,nums);

        this.merge(l,mid,r,nums);
        return nums;

    }

    merge(l,mid,r,arr){
        let leftTempArr = [], rightTempArr = [];
        for(let i = l; i <= mid; i++){
            leftTempArr.push(arr[i]);
        }
        for(let j = mid + 1; j <= r; j++){
            rightTempArr.push(arr[j]);
        }
        let i = l, j = 0, k= 0;
        while(j < leftTempArr.length && k < rightTempArr.length){
            if(leftTempArr[j] <= rightTempArr[k]){
                arr[i] = leftTempArr[j];
                j++;
            }else{
                arr[i] = rightTempArr[k];
                k++;
            }
            i++;
        }
        while(j < leftTempArr.length){
            arr[i] = leftTempArr[j];
            j++;
            i++;
        }
        while(k < rightTempArr.length){
            arr[i] = rightTempArr[k];
            k++;
            i++;
        }
    }
}
