require_relative 'sliding_pieces'
# require_relative 'board'

class Rook < Piece
    include Slide

    def initialize(color, board, pos)
        super
    end

    def move_dirs
        horizontal_dirs
    end
        
    def possible_moves(starting_position)
        super
    end
    
end

r = Rook.new(:red, Board.new, [0,1])
p r.possible_moves([0,0])