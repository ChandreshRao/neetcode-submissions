class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false
        const map = {}
        for(let i=0; i<s.length; i++)
        {
            map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]]
        }

        for(let i=0; i< t.length; i++)
        {
            if(map[t[i]] == undefined || map[t[i]] <= 0)
            {
                return false    
            }
            map[t[i]]--
        }
        return true
    }
}
