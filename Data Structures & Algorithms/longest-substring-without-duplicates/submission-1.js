class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i=0, j=0, long = 0;
        let map = new Map()
        while (j < s.length)
        {
            if(map[s[j]] === undefined)
            {
                map[s[j]] = j
            }
            else {
                
                i=Math.max(map[s[j]]+1, i)
                map[s[j]] = j
            }
            j++
            long = Math.max(j-i, long)
        }
        console.log(map)
        return long
    }
}
