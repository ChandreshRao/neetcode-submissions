class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for i, n in enumerate(nums):
           
            find_n = target - n
            if find_n in map:
                return [map[find_n], i]
            map[n] = i

        return [-1, -1]

        