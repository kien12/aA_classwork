require "byebug"

# Given a list of integers find the smallest number in the list.
    
    def my_min(arr)         # Quadratic O(n^2)
        min = 0       
        # debugger                                          
        (0...arr.length).each do |i1|              # [ 0, 3, 5, 4, -5, 10, 1, 90 ]
            (i1 + 1...arr.length).each do |i2|          # [ 0, 3, 5, 4, -5, 10, 1, 90 ]
                min = arr[i2] if arr[i2] < arr[i1] && arr[i2] < min
            end
        end
        min
    end

    def my_min(arr)         # Linear O(n)
        min = arr[0]
        arr.each { |num| min = num if num < min }
        min
    end

    
    def largest_contiguous_subsum(list)
        arr = []

        (0...list.length).each do |idx1|
            (idx1 + 1...list.length).each do |idx2|
                arr << [list[idx1], list[idx2]]
            end
        end
        max = 0
        arr.each do |subarr|
            max = subarr.sum if subarr.sum > max
        end
        max
    end

    def largest_contiguous_subsum(list)
        largest = list.first
        current = list.first

        (1...list.length).each do |i|
            current = 0 if current < 0
            current += list[i]
            largest = current if current > largest
        end
        largest
    end
     list = [-5, -1, -3]
    p largest_contiguous_subsum(list) # => -1 (from [-1])
    # list = [5, 3, -7]
    # p largest_contiguous_subsum(list)


# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# my_min(list)


