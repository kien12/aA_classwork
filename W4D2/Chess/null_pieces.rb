require 'singleton'

class Null_pieces
    attr_reader :value

    include Singleton

    def initialize
        @value = "___"
    end

    def inspect
        value
    end
end

null = Null_pieces.instance
p null