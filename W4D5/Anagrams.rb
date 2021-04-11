
# Our goal today is to write a method that determines if two given words are anagrams.
#  This means that the letters in one word can be rearranged to form the other word.

    def first_anagrams(word1, word2)       # Factorial i.e. hella slow
        word_arr = word1.split("")
        arr = word_arr.permutation.to_a
        word_arr2 = word2.split("")
        arr2 = word_arr2.permutation.to_a
        arr.all? { |el| arr2.include?(el) }
    end


    def second_anagrams(word1, word2)
        arr1 = word1.split('')
        arr2 = word2.split('')
        arr1.each do |el1|
            idx = word2.index(el1)
            arr2.delete(el1)
        end
        arr2.empty?
    end

    def third_anagrams(word1, word2)
        word1.split('').sort == word2.split('').sort
    end
    
    def fourth_anagrams(word1, word2)
        hash = Hash.new(0)
        
        word1.split('').each { |letter| hash[letter] += 1}
        word2.split('').each { |letter| hash[letter] -= 1}

        hash.all? { |k, v| v.zero?ls}
    end


p third_anagrams("gizmo", "sally")    #=> false
p third_anagrams("elvis", "lives")    #=> true
# p ["h", "i"].permutation.to_a