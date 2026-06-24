class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length
        let maxL = [height[0]]
        for(let i=1; i < n; i++)
        {
            maxL[i] = Math.max(maxL[i-1], height[i])
        }
        let maxR = []
        for(let i=n-1; i>=0; i--)
        {
            maxR[i] = Math.max(i == n-1 ? height[i] : maxR[i+1], height[i]) 
        }
        let area = 0
        for(let i=0; i<n; i++)
        {
            area = area + (Math.min(maxL[i], maxR[i]) - height[i])
        }
        return area
    }
}
