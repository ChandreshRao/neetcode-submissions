class Solution {
    encodeChar(str)
    {
        let output = []
        for(let i=0; i<str.length; i++)
        {
            output.push(str.charCodeAt(i).toString().padStart(3, '0'))
        }
      
        return output.join('')
    }

    
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length == 0) return 'empty'
        let output = []
        for(let i=0; i<strs.length; i++)
        {
            output.push(this.encodeChar(strs[i]))
        }
        return output.join('-')

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str == 'empty') return []
        let res = []
        for(let s of str.split('-'))
        {
            let i=0, output=[]
            while(i < s.length)
            {
                output.push(String.fromCharCode(parseInt(s.slice(i, i+3))))
                i = i+3
            }
            res.push(output.join(''))
        }
        
        return res
    }
}
