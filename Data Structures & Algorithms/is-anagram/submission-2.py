class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        map = {}
        for i in list(s):
            if i in map:
                map[i] = map[i]+1
            else:
                map[i] = 1

        for i in list(t):
            if i not in map:
                return False

            map[i] = map[i]-1
            if map[i] < 0:
                return False
        
        return True
            
        