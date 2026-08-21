class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        def get_arr(self, s):
            arr = [0] * 26
            for i in list(s):
                ch = ord(i) - ord('a')
                arr[ch] = arr[ch]+1
            return arr

        m = {}
        for st in strs:
            op = get_arr(self, st)
            op = tuple(op)
            if op not in m:
                m[op] = []
            m[op].append(st)

        return list(m.values())