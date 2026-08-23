class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        maxL = [0] * n
        maxR = [0] * n
        maxL[0] = height[0]
        maxR[n-1] = height[n-1]
        for i, item in enumerate(height[1:], start=1):
            maxL[i] = max(maxL[i-1], height[i])

        for i, item in reversed(list(enumerate(height))[:-1]):
            maxR[i] = max(maxR[i+1], height[i])

        output = 0
        for i, item in enumerate(height):
            output += min(maxR[i], maxL[i]) - height[i]

        return output

        