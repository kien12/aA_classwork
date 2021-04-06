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

    attr_reader :start_position, :considered_positions

    def self.valid_moves(pos)
        res = []
        row, col = pos
        MOVES.each do |x, y|
            current_pos = [row + x, col + y]
            current_x, current_y = current_pos
            res << current_pos if !res.include?(current_pos) && current_x.between?(0,7) && current_y.between?(0,7)
        end
        res
    end
    

    def initialize(start_position)
        @start_position = start_position
        @considered_positions = [start_position]
        # @build_move_tree = build_move_tree
    end
    
    def new_move_positions(pos)
        res = []
        KnightPathFinder.valid_moves(pos).each do |ele|
            unless @considered_positions.include?(ele)
                res << ele
                @considered_positions << ele
            end
        end
        res
    end

    def build_move_tree(target)
        path = []
        queue = [start_position]
        until queue.empty?
            pos = queue.shift                                  
            return considered_positions if pos == target
            new_move_positions(pos).each  { |new_pos| queue << new_pos}
        end
        nil
    end
    
    def find_path(end_pos)
        return self if self.value == end_pos
        self.@considered_positions.each do |new_pos|
            search_result = new_pos.dfs(end_pos)
            return search_result unless search_result.nil?
        end
        nil
    end

    def trace_path_back

    end
    
end

k = KnightPathFinder.new([0,0])
# KnightPathFinder.valid_moves([0,0])
# p k.new_move_positions([2,1])
p k.build_move_tree([4,2])
