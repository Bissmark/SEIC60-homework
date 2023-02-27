class SinglyLinkedList
    class Node
        attr_accessor :value, :next
    
        def initialize(value=nil)
            @value = value
            @next = nil
        end
    end

    attr_accessor :head

    def initialize(value=nil)
        @head = Node.new(value) unless value.nil?
    end

    def prepend(value) # unshift
        node = Node.new value
        node.next = @head
        @head = Node
        self # return entire list itself # allow chaining # bros.preprend('Harpo').prepend('Chico')
    end

    def append(value) # push
        # find the last value
        # create a new node and point the old last node to it
        last.next = Node.new value
        self # allow chaining
    end

    def last
        current_node = @head
        while current_node && current_node.next
            current_node = current_node.next
        end
        current_node
    end

    # TODO: More methods
    def remove # AKA .shift -- remove the first node
        node = @head
        index -= 1
        while index > 0 && node
            node = node.next_node
            index -= 1
        end
        node.next_node = node.next_node.next_node
  end
    end

    def insert_after(node, new_value)
        if @head.nil?
            @head = Node.new(new_value)
            @tail = Node.new(new_value)
          else
              first = @head
              node -= 1
              while node > 0 && first
                      first = first.next_node
                      node -= 1
              end
              old_next = first.next_node
              first.next_node = Node.new(new_value)
              first.next_node.next_node = old_next
          end
    end

    def find(needle) # return the node with the value of needle (or nil)
        node = @head
        while needle > 0 && node
          node = node.next_node
          needle -= 1
        end
        node.value
    end

    # Tricky
    def reverse # non-destructive
    end

    # Trickier
    def reverse! # destructive
    end

    # Trickiest
    def each # How do you execute a block in Ruby?
    end

    # Bonus: .map(), .reduce(), .select(), .reject(), .length() AKA .size() AKA .count()
    # Bonus: .at_index(3) # equivalent to bros[3]
    
end

bros = SinglyLinkedList.new 'Groucho'
bros.prepend 'Harpo'
bros.prepend 'Chico'

# chico, harpo, groucho

binding.irb
