def findMinFibonacciNumbers(k: int) -> int:
    ans = 0
    def fibonacci(): # 生成器函数 - 斐波那契
        a, b, counter = 1, 1, 0
        while True:
            yield a
            a, b = b, a + b
            counter += 1
    f = fibonacci()
    now = next(f)
    then = next(f)
    while k != 0:
        if then > k:
            k -= now
            f = fibonacci()
            ans += 1
        now, then = then, next(f)
    return ans




k = 191
print(findMinFibonacciNumbers(k))