class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a-b)
        // [-4, -1, -1, 0, 1, 2]
        let n = nums.length
        let output = []
        for (let i=0; i<n-2; i++)
        {
            if (i>0 && nums[i] == nums[i-1])
            {
                continue
            }
            let j=i+1, k=n-1;
            console.log('i, j, k', i, j, k)
            while(j<k)
            {
                let sum = nums[i] + nums[j] + nums[k]
                if(sum == 0)
                {
                    output.push([nums[i], nums[j], nums[k]])
                    j++
                    k--
                    while(nums[j] == nums[j-1] && j < k) j++
                    while(nums[k] == nums[k+1] && j < k) k--
                }
                else if (sum < 0)
                {
                    j++
                }
                else {
                    k--
                }
            }
        }
        return output
    }

}
