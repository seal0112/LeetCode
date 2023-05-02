class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_dict = dict()
        result = 0
        head, tail = 0, 0

        while head < len(s):
            if s[head] in char_dict and char_dict[s[head]] >= tail:
                tail = char_dict[s[head]] + 1

            char_dict[s[head]] = head

            if head - tail + 1 > result:
                result = head - tail + 1

            head += 1

        return result
