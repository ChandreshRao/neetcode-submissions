class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {}

        for(let i=0; i<nums.length; i++)
        {
            let c = map[target-nums[i]]
            if(c != undefined)
            {
                return [c, i]
            }
            map[nums[i]] = i
        }
    }
}
