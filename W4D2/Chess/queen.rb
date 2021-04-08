require_relative 'sliding_pieces'
require_relative 'board'

class Queen < Piece
    include Slide

    def initialize(color, board, pos)
        super
    end

    def move_dirs
        diagonal_dirs + horizontal_dirs
    end
        
    def possible_moves(starting_position)
        super
    end
    
end

q = Queen.new(:blue, Board.new, [0,0])
p q.possible_moves([0,0])