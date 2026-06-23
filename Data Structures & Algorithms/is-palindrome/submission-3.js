class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        let arr = s.split(' ')
        s = arr.join('')
        let i=0, j=s.length-1
        while (i<j)
        {
            while (!/^[a-zA-Z0-9]$/i.test(s[i]) && i<j)
            {
                i++
            }
            while (!/^[a-zA-Z0-9]$/i.test(s[j]) && i<j)
            {
                j--
            }
            if(s[i].toLowerCase() != s[j].toLowerCase())
            {
                console.log('length', s[i], s[j])
                return false
            }
            i++
            j--
        }
        return true
    }
}
