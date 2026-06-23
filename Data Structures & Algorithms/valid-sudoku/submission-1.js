class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let ans = true
        let r = board.length
        let c = board[0].length
        for(let i=0; i<r; i++)
        {
            let map = new Map()
            for(let j=0; j<c; j++)
            {
                if(board[i][j] != '.')
                {
                    if(map[board[i][j]] != undefined)
                    {
                        ans = false
                        return ans
                    }
                    map[board[i][j]] = 1
                }
            }
        }

        for(let i=0; i<r; i++)
        {
            let map = new Map()
            for(let j=0; j<c; j++)
            {
                if(board[j][i] != '.')
                {
                    if(map[board[j][i]] != undefined)
                    {
                        ans = false
                        return ans
                    }
                    map[board[j][i]] = 1
                }
            }
        }

        let m=0, n=0
        while (m<r && n<c)
        {
            console.log('m & n', m, n)
            let map = new Map()
            for(let i=m; i<m+3; i++)
            {
                for(let j=n; j<n+3; j++)
                {
                    if(board[i][j] != '.')
                    {
                        if(map[board[i][j]] != undefined)
                        {
                            ans = false
                            return ans
                         }
                        map[board[i][j]] = 1
                    }
                }
            }
            m = m + 3
            if(m==r && n<c)
            {
                m = 0
                n = n+3
            }
        }
        return ans
    }
}
