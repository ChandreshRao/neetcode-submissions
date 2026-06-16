class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        for(let i=0; i<strs.length; i++)
        {
            let sorted = [...strs[i]].sort().join('')
            if(!map[sorted])
            {
                map[sorted] = []
            }
            map[sorted].push(strs[i])
        }
        const output = []
        for(let key of Object.keys(map))
        {
            output.push(map[key])
        }
        return output
    }
}
