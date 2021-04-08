require_relative 'piece.rb'
require_relative 'null_pieces.rb'

class Board

    def initialize
       @board = Array.new(8) { Array.new(8, Null_pieces.instance) }
    end

    def fill_board
        @board[0][0] = Rook.new(:blue, self, [0,0])
        @board[0].map! do |piece|
            piece = "x"
        end

        @board[1].map! do |piece|
            piece = "x"
        end

        @board[-1].map! do |piece|
            piece = "o"
        end

        @board[-2].map! do |piece|
            piece = "o"
        end
        @board
    end

    def [](pos)
        row, col = pos
        @board[row][col]
    end

    def []=(pos, val)
        row, col = pos
        @board[row][col] = val
    end

    def valid_move?(pos)
        row, col = pos
        row.between?(0, 7) || col.between?(0, 7) ? true : false
    end
        [1, 0] # down

    def move_piece(start_pos, end_pos)
        if valid_move?(end_pos)
            self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
            p "piece successfully moved!"
        end
    end

    def inspect
        
    end

    def render
        puts "#{(0...@board.size).to_a.join(" ")}"
        @board.each_with_index do |row, i|
            puts "#{i} #{row.inspect}"
        end
    end
end

board = Board.new
# p board
# p board.[]([0,0])
# p board.[]=([0,0], "1")
# p board.[]([0,0])
# p board[[0,0]]
# p board[[0,0]] = "2"
# p board.move_piece([0,0], [2, 2])
p board.fill_board
# p board.valid_move?([0,0])
board.move_piece([0, 0], [7,0])
p board
board.render