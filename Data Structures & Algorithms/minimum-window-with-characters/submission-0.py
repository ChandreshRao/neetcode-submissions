class Solution:
    def minWindow(self, s: str, t: str) -> str:
        map = {}
        chars = list(t)
        for i in range(len(chars)):
            map[chars[i]] = 1 + map.get(chars[i], 0)

        output = ""
        min_length = float("infinity")
        chars = list(s)
        n = len(chars)
        left = 0
        need = len(map)
        have = 0
        op = [-1, -1]
        window = {}
        for right in range(n):
            c = chars[right]
            window[c] = 1 + window.get(c, 0)

            if c in map and window[c] == map[c]:
                have += 1

            while have == need:
                if (right - left + 1) < min_length:
                    op = [left, right]
                    min_length = right - left + 1
                
                if chars[left] in window:
                    window[chars[left]] -= 1
                if chars[left] in map and window[chars[left]] < map[chars[left]]:
                    have -= 1
                left += 1
        left, right = op

        return "".join(chars[left: right+1]) if min_length != float("infinity") else ""




                

            

        