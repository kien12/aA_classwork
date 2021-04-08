module Slide

    DIAGONAL_DIRS = [
        [1, 1], #diag down right
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5],
        [6, 6],
        [7, 7],
        
        [-1, -1], #diag up left
        [-2, -2],
        [-3, -3],
        [-4, -4],
        [-5, -5],
        [-6, -6],
        [-7, -7],
         
        [1, -1], #down left
        [2, -2],
        [3, -3],
        [4, -4],
        [5, -5],
        [6, -6],
        [7, -7],

        [-1, 1], # up right
        [-2, 2],
        [-3, 3],
        [-4, 4],
        [-5, 5],
        [-6, 6],
        [-7, 7] 
    ]

    HORIZONTAL_DIRS = [
        [0, 1], #right
        [0, 2], #right
        [0, 3], #right
        [0, 4], #right
        [0, 5], #right
        [0, 6], #right
        [0, 7], #right

        [1, 0], # down
        [2, 0], # down
        [3, 0], # down
        [4, 0], # down
        [5, 0], # down
        [6, 0], # down
        [7, 0], # down
        
        [-1, 0], #up
        [-2, 0], #up
        [-3, 0], #up
        [-4, 0], #up
        [-5, 0], #up
        [-6, 0], #up
        [-7, 0], #up

        [0, -1], #left
        [0, -2], #left
        [0, -3], #left
        [0, -4], #left
        [0, -5], #left
        [0, -6], #left
        [0, -7] #left
    ]

    def diagonal_dirs
        DIAGONAL_DIRS
    end
    
    def horizontal_dirs
        HORIZONTAL_DIRS
    end

    # pos
    # starting position = [5,5]
    # currentx, currenty = position
    # MOVES.map do |move|
    #     dx, dy 
    #     newPosition = [dx + currentx, dy + currenty]
    #     ...valid_moves?(newPosition)
    #     moves << newPosition
end

=begin

    0     1     2     3     4     5     6     7
0 [0,0] [0,1] [0,2] [0,3] [0,4] [0,5] [0,6] [0,7]
1 [1,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,6] [1,7]
2 [2,0] [2,1] [2,2] [2,3] [2,4] [2,5] [2,6] [2,7]
3 [3,0] [3,1] [3,2] [3,3] [3,4] [3,5] [3,6] [3,7]
4 [4,0] [4,1] [4,2] [4,3] [4,4] [4,5] [4,6] [4,7]
5 [5,0] [5,1] [5,2] [5,3] [5,4] [5,5] [5,6] [5,7]
6 [6,0] [6,1] [6,2] [6,3] [6,4] [6,5] [6,6] [6,7]
7 [7,0] [7,1] [7,2] [7,3] [7,4] [7,5] [7,6] [7,7]

=end
