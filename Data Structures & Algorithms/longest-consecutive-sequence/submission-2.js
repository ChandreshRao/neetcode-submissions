class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       if (nums.length == 0) return 0
       let map = new Map()
       for(let i=0; i< nums.length; i++)
       {
          if(map[nums[i]])
          {
            continue
          }
          else {
            map[nums[i]] = []
          }
        
       }

       for(let key of Object.keys(map))
       {
            if(map[key - 1])
            {
                map[key - 1].push(key)
            }
       }

       console.log(map)

       let maxLength = 1
       for(let key of Object.keys(map))
       {
            if(map[key].length > 0)
            {
                let m = map[key][0], j = 1
                while(map[m] != undefined)
                {
                    j++
                    m = map[m][0]
                }
                maxLength = Math.max(j, maxLength)
            }
       } 
       return maxLength
    }
}
