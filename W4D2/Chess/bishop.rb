require_relative "board"
require_relative "sliding_pieces"

class Bishop < Piece
    include Slide

    def initialize(color, board, pos)
        super
    end

    def move_dirs
        diagonal_dirs
    end

    def possible_moves(pos)
        super
    end

end

bishop = Bishop.new(:black, Board.new, [0,0])
p bishop
p bishop.possible_moves([0,0])