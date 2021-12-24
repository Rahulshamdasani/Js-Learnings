def main(grid):
    sum_ = 0
    prev = 0
    for i in range(len(grid)):
        currSum = sum(grid[i])
        sum_+=prev*currSum
        if(currSum>0):
            prev = currSum

grid = [
    [1,1,1],
    [0,1,0],
    [0,0,0],
    []
]
main()