def minDominoRotations(A: [int], B: [int]) -> int:
    merge = A + B
    res = 0
    equal = 0
    for i in range(6):
        if merge.count(i+1) >= len(A):
            for j in range(len(A)):
                if A[j] != i + 1 and B[j] != i + 1:
                    return -1
                elif A[j] == i + 1 and B[j] == i + 1:
                    equal += 1
                elif A[j] == i + 1:
                    pass
                elif B[j] == i + 1:
                    res += 1
            return min(res, len(A)-equal-res)
    return -1




A = [1,2,1,1,1,2,2,2]
B = [2,1,2,2,2,2,2,2]
print(minDominoRotations(A, B))