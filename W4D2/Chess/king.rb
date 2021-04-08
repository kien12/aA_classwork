require_relative "stepping_pieces"
require_relative "board"

class King < Piece
    include Stepping
    attr_accessor :board

    def initialize(color, board, pos)
        super
    end

    def move_dirs
        king_dir
    end

    def possible_moves(starting_position)
        super
    end

end

king = King.new(:b, Board.new, [0,5])
p king.possible_moves([1,6])
p king.board.move_piece([0,5], [1,5])