class NumArray:
    def __init__(self, nums: List[int]):
        self.sums = [0]
        _sums = self.sums
        for num in nums:
            _sums.append(_sums[-1]+num)
        return None

    def sumRange(self, left: int, right: int) -> int:
        _sums = self.sums
        return _sums[right+1]-_sums[left]



# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)