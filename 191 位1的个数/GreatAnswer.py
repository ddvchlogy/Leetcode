class Solution:
    def hammingWeight1(self, n: int) -> int:
        return bin(n).count("1")

    # count(str, beg= 0,end=len(string))
    # 返回 str 在 string 里面出现的次数，如果 beg 或者 end 指定则返回指定范围内 str 出现的次数

    def hammingWeight2(self, n: int) -> int:
        ans = 0
        while n:
            n &= (n-1)
            ans += 1
        return ans

    # n &= (n-1) 是去掉右边起第一个1
    # 例 n = 1100, n-1 = 1010 => n & (n-1) = 1000 即去掉第二位的1

    def hammingWeight3(self, n: int) -> int:
        ans = 0
        while n:
            ans += n&1
            n>>=1
        return ans

    # n & 1 判断末位是否是1
    # n>>=1 去掉末位