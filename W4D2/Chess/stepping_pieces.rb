module Stepping
    KNIGHTS_DIR = [
        [-2, 1],
        [-2, -1],
        [2, 1],
        [2, -1],
        [-1, 2],
        [-1, -2],
        [1, 2],
        [1, -2]
        
    ]
    
    PAWNS_DIR = [
        [1,0]

    ]

    KING_DIR = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1]
    ]

    def knights_dir
        KNIGHTS_DIR
    end

    def pawns_dir
        PAWNS_DIR
    end

    def king_dir
        KING_DIR
    end


end