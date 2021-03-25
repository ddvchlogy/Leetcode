def minStartValue(nums: [int]) -> int:
    startValue = sum = 1
    for num in nums:
        sum -= num
        startValue = max(startValue, sum)
    return startValue


nums = [1,-2,-3]
print(minStartValue(nums))