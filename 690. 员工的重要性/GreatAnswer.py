class Employee:
    def __init__(self, id: int, importance: int, subordinates: [int]):
        self.id = id
        self.importance = importance
        self.subordinates = subordinates

class Solution:
    def getImportance(self, employees: List['Employee'], id: int) -> int:
        hashmap={}
        for employee in employees: #哈希表
            hashmap[employee.id]=employee
        queue=collections.deque()   #队列
        queue.append(id)
        sum=0
        while queue:
            wid=queue.popleft()
            sum+=hashmap[wid].importance
            for subordinate in hashmap[wid].subordinates:
                queue.append(subordinate)
        return sum


a = Employee(1, 5, [2, 3])
b = Employee(2, 3, [])
c = Employee(3, 3, [])

s = Solution()

print(s.getImportance([a, b, c], 1))