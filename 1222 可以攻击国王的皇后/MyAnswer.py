def queensAttacktheKing(queens: [[int]], king: [int]) -> [[int]]:
    direc = [0, 0, 0, 0, 0, 0, 0, 0]
    units = [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]]
    para = list(range(9))
    for i in range(8):
        for j,unit in enumerate(units):
            x = king[0]+ unit[0] * (i+1)
            y = king[1]+ unit[1] * (i+1)
            if x not in para or y not in para:
                continue
            print([x, y])
            if [x, y] in queens:
                if not direc[j]:
                    direc[j] = [x, y]
    return [num for num in direc if num != 0]

def newqueensAttacktheKing(queens: [[int]], king: [int]) -> [[int]]:
    res = []
    units = [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]]
    para = list(range(9))
    for i in range(8):
        j = 1
        while 1:
            x = king[0]+ units[i][0] * j
            y = king[1]+ units[i][1] * j
            if x in para and y in para:
                if [x, y] in queens:
                    a.append([x,y])
                    break
                j += 1
            else:
                break
    return res

        


queens = [[5,6],[7,7],[2,1],[0,7],[1,6],[5,1],[3,7],[0,3],[4,0],[1,2],[6,3],[5,0],[0,4],[2,2],[1,1],[6,4],[5,4],[0,0],[2,6],[4,5],[5,2],[1,4],[7,5],[2,3],[0,5],[4,2],[1,0],[2,7],[0,1],[4,6],[6,1],[0,6],[4,3],[1,7]]
king = [3,4]
print(newqueensAttacktheKing(queens,king))