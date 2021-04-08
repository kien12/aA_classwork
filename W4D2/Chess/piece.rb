require_relative 'board.rb'

class Piece
    attr_reader :possible_moves, :board

    def initialize(color, board, pos) # :color, @board, [pos]
        @color, @board, @pos = color, board, pos
        @possible_moves = []
    end

    def empty?
        return false
    end

    def possible_moves(starting_position)
        row, col = starting_position
        possible_moves = []
        move_dirs.each do |cords|
            x, y = cords
            positions = [row + x, col + y]
            possible_moves << positions if @board.valid_move?(positions) && @board.empty
         end
        possible_moves
    end
    # "♖" 
    # "♗" 
    
    # are all those pos from [0, 0] ... end pos [0, 7] valid_moves?
    # valid means spot it empty
    # if not valid && enemy piece,
    # then rook must stop on the spot, and piece gets eaten
    # if not valid && team piece,
    # then rook must stop on the spot one before, and turn ends

    def valid_moves(pos)
        # i, j = pos
        val_moves = []
        poss_moves = possible_moves(pos) 
        poss_moves.each do |poss_pos|
            
        end
        # for each type of piece, we can shovel their possible moves 
        # into the array
        # inherit Piece class into each piece to use this method
    end

    def pos=(val)
        @board[pos] = val
    end

    # def inspect

    # end

end

# piece = Piece.new("rook")
# p piece