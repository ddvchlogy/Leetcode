class Solution:
    def busRapidTransit(self, target: int, inc: int, dec: int, jump: List[int], cost: List[int]) -> int:
        if target == 1:
            return inc
        else:
            for i,busjump in enumerate(jump):
                if target % busjump < busjump/2:
                    fix = target % busjump
                    subtarget = target // busjump
                else:    
                    fix = target % busjump - busjump
                    subtarget = target // busjump + 1
                cost[i] + busRapidTransit(subtarget, inc, dec, jump, cost)




a = Solution()
print(a.busRapidTransit(target = 31, inc = 5, dec = 3, jump = [6], cost = [10]))
print(a.busRapidTransit(target = 612, inc = 4, dec = 5, jump = [3,6,8,11,5,10,4], cost = [4,7,6,3,7,6,4]))