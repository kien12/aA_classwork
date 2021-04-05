require 'byebug'
class PolyTreeNode

    attr_accessor :value, :parent, :children

    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(node)
        if !self.parent.nil? 
            parent.children.delete(self)
        end
        @parent = node
        self.parent.children << self unless parent == nil
        self
    end
    
    def add_child(child_node)
        child_node.parent = self
    end

    def remove_child(child_node)
        if child_node.parent.nil?
            raise 'Error: Node is not a child'
        end
        child_node.parent = nil
    end

    def dfs(target)
        # return nil if self.nil?

        return self if self.value == target
            self.children.each do |child|
                search_result = child.dfs(target)
                return search_result unless search_result.nil?
        end
        nil
    end

    def bfs(target_value)
        queue = [self]
        until queue.empty?
            node = queue.shift                                  
            node.children.each { |child| queue << child }
            return node if node.value == target_value
        end
        nil
    end
end