class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {}
        for(let i=0; i<nums.length; i++)
        {
            map[nums[i]] = !map[nums[i]] ? 1: ++map[nums[i]]
        }

        let revMap = {}
        for(let key of Object.keys(map))
        {
            if(!revMap[map[key]])
            {
                revMap[map[key]] = []
            }
            revMap[map[key]].push(key)
        }

        let output = []
        let keys = Object.keys(revMap).sort((a,b) => b-a)
        let c=0
        for(let i=0; i<keys.length; i++)
        {   
            let j=0
            while(j < revMap[keys[i]].length)
            {
                output.push(revMap[keys[i]][j])
                j++
                c++
                if(c >= k)
                {
                    break
                }   
            }
            if(c >= k)
            {
                break
            }
        }
        return output
    }
}
