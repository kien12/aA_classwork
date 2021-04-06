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

    attr_reader :start_position, :considered_positions, :root_position

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
        @root_position = PolyTreeNode.new(start_position)
        build_move_tree
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

    def build_move_tree
        bfb_queue = [@root_position]
        until bfb_queue.empty?
            current_node = bfb_queue.shift
            current_pos = current_node.value
            new_move_positions(current_pos).each  do |new_pos|
                new_node = PolyTreeNode.new(new_pos)
                current_node.add_child(new_node)
                bfb_queue << new_node
            end
        end
    end
    
    def find_path(end_pos)
        # return self if self.value == end_pos
        # self.@considered_positions.each do |new_pos|
        #     search_result = new_pos.dfs(end_pos)
        #     return search_result unless search_result.nil?
        # end
        # nil
    end

    def trace_path_back

    end
    
end

k = KnightPathFinder.new([0,0])
# KnightPathFinder.valid_moves([0,0])
# p k.new_move_positions([2,1])
# p k.build_move_tree([4,2])
p k.root_position
