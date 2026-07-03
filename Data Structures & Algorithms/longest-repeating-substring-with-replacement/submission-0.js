class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map()
        let maxLength = 0
        let i = 0, j = 0;
        while(j < s.length)
        {
            if (map[s[j]] === undefined) map[s[j]] = 0
            map[s[j]]++

            let valid = this.mapValid(map, k)

            if (valid) {
                maxLength = Math.max(maxLength, j-i+1)
            }
            else {
                map[s[i]]--
                if(map[s[i]] == 0) delete map[s[i]]
                i++
            }
            j++
        }
        return maxLength
    }

    mapValid(map, k) {
        console.log(map)
        let totalCount = 0
        let maxKeyCount = 0
        let keys = Object.keys(map)
        if (keys.length - 1 > k) return false
        
        for(let key of keys)
        {
            maxKeyCount = Math.max(map[key], maxKeyCount)
            totalCount += map[key]
        }

        if (totalCount - maxKeyCount > k) return false
        return true

    }
}
