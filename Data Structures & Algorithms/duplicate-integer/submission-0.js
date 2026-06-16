class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {}
        for(let i=0; i<nums.length; i++)
        {
            if(map[nums[i]] != undefined)
            {
                return true
            }
            map[nums[i]] = i
        }
        return false
    }
}
