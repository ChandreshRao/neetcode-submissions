class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}

        for i in nums:
            count[i] = 1 + count.get(i, 0)
        
        arr = []

        for n, v in count.items():
            arr.append([v, n])
        arr.sort()
        op = []

        while len(op) < k:
            item  = arr.pop()
            op.append(item[1])

        return op




        
        