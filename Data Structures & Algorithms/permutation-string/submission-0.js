class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let a = new Array(26).fill(0)
        let b = new Array(26).fill(0)
        for(let i=0; i<s1.length; i++)
        {
            a[s1.charCodeAt(i)-97]++
            b[s2.charCodeAt(i)-97]++
        }
        let i=0, j=s1.length-1;
        while(j < s2.length)
        {
            if(this.isSame(a, b)) return true
            
            b[s2.charCodeAt(i)-97]--
            i++
            j++
            b[s2.charCodeAt(j)-97]++
        }
        return false
    }
    isSame(src, tar) {
        for(let i=0; i<src.length; i++)
        {
            if(src[i] !== tar[i]) return false
        }
        return true
    }
}
