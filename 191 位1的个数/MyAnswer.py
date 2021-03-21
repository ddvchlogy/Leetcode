class Solution:
    def hammingWeight(self, n: int) -> int:
        nstr = bin(n)[2:]
        sum = 0
        for num in nstr:
            if int(num) == 1:
                sum += 1
        return sum