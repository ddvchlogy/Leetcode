class Employee:
    def __init__(self, id: int, importance: int, subordinates: [int]):
        self.id = id
        self.importance = importance
        self.subordinates = subordinates

class Solution:
    def getImportance(self, employees: [Employee], id: int) -> int:
        ans = 0
        for employee in employees:
            if employee.id == id:
                ans += employee.importance
                if employee.subordinates != []:
                    for p in employee.subordinates:
                        ans += self.getImportance(employees, p)
        return ans


a = Employee(1, 5, [2, 3])
b = Employee(2, 3, [])
c = Employee(3, 3, [])

s = Solution()

print(s.getImportance([a, b, c], 1))