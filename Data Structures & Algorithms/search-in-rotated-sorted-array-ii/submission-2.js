class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        // I need to set up my search window covering the whole array first.
        let left = 0;
        let right = nums.length - 1;

        // Keep searching as long as my window hasn't collapsed on itself.
        while (left <= right) {
            
            // Find the middle point. I need Math.floor because JS division gives decimals.
            let mid = Math.floor((left + right) / 2);

            // Did I get lucky and find the target right in the middle? 
            if (nums[mid] === target) {
                return true;
            }

            // Here is the absolute worst part of this problem: duplicates.
            // If the left, middle, and right are all the exact same number, 
            // I have zero clue which half is the neatly sorted one. 
            if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
                // I can't do any smart binary search math here. 
                // All I can do is blindly inch both ends inward to get rid of the duplicates.
                left++;
                right--;
                // Skip the rest of the loop and calculate a new middle next time.
                continue;
            }

            // Okay, no identical duplicates messing up my boundaries. 
            // Let's check if the left half (from 'left' to 'mid') is the perfectly sorted one.
            if (nums[left] <= nums[mid]) {
                
                // The left side is sorted! Now, is my target actually sitting inside this safe, sorted half?
                // It has to be greater than or equal to the left edge, and less than the middle.
                if (nums[left] <= target && target < nums[mid]) {
                    // Sweet, it's in here. I can throw away the entire right half of the array.
                    right = mid - 1;
                } else {
                    // It's not in the sorted left half. It MUST be hiding somewhere in the right half.
                    left = mid + 1;
                }
                
            } else {
                // If the left half isn't sorted, then by the rules of rotation, the right half MUST be.
                
                // Is my target sitting neatly inside this sorted right half?
                if (nums[mid] < target && target <= nums[right]) {
                    // Yep, it's here. I can throw away the entire left half.
                    left = mid + 1;
                } else {
                    // Nope, it's not in the right half. I have to go check the left side.
                    right = mid - 1;
                }
            }
        }

        // The loop finished and my left and right pointers crossed. We didn't find the target.
        return false;
    }
}
