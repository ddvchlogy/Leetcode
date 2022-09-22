/*
 * @lc app=leetcode.cn id=690 lang=typescript
 *
 * [690] 员工的重要性
 */

// @lc code=start

// Definition for Employee.
// class Employee {
//   id: number
//   importance: number
//   subordinates: number[]
//   constructor(id: number, importance: number, subordinates: number[]) {
//     this.id = (id === undefined) ? 0 : id;
//     this.importance = (importance === undefined) ? 0 : importance;
//     this.subordinates = (subordinates === undefined) ? [] : subordinates;
//   }
// }

function getImportance(employees: Employee[], id: number): number {
  let ans = 0
  for (const employee of employees) {
    if (employee.id == id) {
      ans += employee.importance
      if (employee.subordinates !== []) {
        for (const sub of employee.subordinates) {
          ans += getImportance(employees, sub)
        }
      }
    }
  }
  return ans
};
// @lc code=end

