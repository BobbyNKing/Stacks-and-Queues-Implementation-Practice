//LINKED LIST NODE

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

//LINKED LIST STACK, FILO

class LinkedListStack {
    constructor() {
        this.head = null;
    }

    addToList(value) { //same for both LLQ and LLS
        const newNode = new LinkedListNode (value, null);
        newNode.next = this.head; 
        this.head = newNode;
    }

    removeFromList() { //FILO, remove from head aka make head irrelevant
        if (this.head) this.head = this.head.next;
    }

}

//LINKED LIST QUEUE, FIFO

class LinkedListQueue extends LinkedListStack {
    constructor() {
        super(head);
    }

    removeFromList() { //FIFO, remove from tail
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current = null;
    }

}