class Node{
    constructor(data){
        // a Node starts with a given data property
        this.data = data
        // a Node also has a .next property initialized as null
        this.next = null
    }
}

class LinkedList{
    constructor(){
        // a Linked List starts with a "head" property intialized as null
        this.head = null
    }
    appendNode(data){
        // creates a new node with the given data and adds it to back of the list

        if (this.head === null) {
            this.head = new Node(data)

        } else {
            const newNode = new Node(data)

            let last = this.head
            while (last.next !== null) {
                last = last.next
            }
            last.next = newNode
        }
    }
    prependNode(data){
        // creates a new node with the given data and adds it to the front of the list

        if (this.head === null) {
            this.head = new Node(data)
        } else {
            const secondNode = this.head
            this.head = new Node(data)
            this.head.next = secondNode
        }
    }
    pop(){
        // removes the last node from the list and returns it

        let remove = null
        if (this.head === null) {
            return null
        } else if (this.head.next === null) {
            remove = this.head 
            this.head = null
            return remove
        } else {
            const last = this.head

            while (last.next.next !== null) {
                last = last.next
            }
            const remove = last.next
            last.next = null
            return remove
        }
    }
    removeFromFront(){
        // remove the head node from the list and return it
        let remove = null
        if (this.head === null) {
            return null
        } else if (this.head.next === null) {
            remove = this.head 
            this.head = null
            return remove
        } else {
            const second = this.head.next
            const first = this.head
            this.head = second
            return first
        }

        // the next node in the list is the new head node
    }
    insertAt(X, data){
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head


        let length = 1
        let last = this.head
        while (last.next !== null) {
            last = last.next
            length++
        }

        if (X > length) {
            last.next = new Node(data)
        } else {
            let remainder = null
            last = this.head
            for (let i = 0; i < length - 1; i++) {
                last = last.next
            }

            if (last.next !== null) {
                remainder = last.next
            } else {
                last.next = new Node(data)
                last.next.next = remainder
            }

            
        }
    }
    removeAt(X){
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
    }
    search(data){
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false

        
        if (this.head.next === null) {
            if (this.head.data === data) {
                return 0
            } 
            return false

        } else {
            let last = this.head
            let index = 0

            while (last.next !== null) {
                if (last.data === data) {
                    return index
                }
                last = last.next
                index++
            }

            if (last.data === data) {
                return index
            }
            return false
        }

        
        
    }
    sort(){
        // sort the Linked List in ascending order of data values
    }
}

module.exports = {
    Node,
    LinkedList
}