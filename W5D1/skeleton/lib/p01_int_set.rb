class MaxIntSet
  attr_reader :store, :max

  def initialize(max)
    @store = Array.new(max, false)
    @max = max
  end

  def insert(num)
    validate!(num)
    if store[num]
      return false
    end
    store[num] = true
    true
  end

  def remove(num)
    # validate!(num)

    store[num] = false if include?(num)

  end

  def include?(num)
    validate!(num)
    store[num]
  end

  private

  def is_valid?(num)
    num.between?(0, max - 1)
  end

  def validate!(num)
    raise 'Out of bounds' unless is_valid?(num)
  end
end


class IntSet

    attr_reader :store, :num_buckets 

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @num_buckets = num_buckets
  end

  def insert(num)
    # bucket = num % num_buckets
    return false if include?(num)
    # @store[num] = true if !@store[num]
    self[num] << num 
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end


  def insert(num)
    if include?(num)
      return false
    end
    self[num] << num
    @count += 1
    resize! if count == num_buckets
  end

  def remove(num)
    if include?(num)
      self[num].delete(num)
      @count -= 1
    end
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    @count = 0
    old_store = @store.dup
    double = num_buckets * 2
    @store = Array.new(double) {Array.new}
    
    old_store.flatten.each { |el| insert(el)}
    @store
  end

end
