require_relative "00_tree_node.rb"

class KnightPathFinder
MOVES = [
    [-2, 1],
    [-2, -1],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [1, 2],
    [1, -2]
]

    def self.valid_moves(pos)
        
    end
    

    def inititalize(start_position)
        @start_position = start_position
        @considered_positions = [start_position]
    end
    
    def build_move_tree
    end

    def new_move_positions

    end


end