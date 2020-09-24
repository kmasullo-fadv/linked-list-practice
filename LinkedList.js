let _Node = require('./_Node');


class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if(this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        let currNode = this.head;
        if(!this.head) {
            return null
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    remove(item) {
        if(!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currentNode = this.head;
        let previousNode = this.head;
        while((currentNode !== null) && (currentNode.value !== item)) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode === null) {
            console.log('Not found');
            return;
        }
        previousNode.next = currentNode.next;
    }

    insertBefore(value, nextValue) {
        let tempNode = this.head;
        let next = this.find(nextValue)
        while (tempNode.next !== next && tempNode !== next) {
            tempNode = tempNode.next;
        }
        const item = new _Node(value, next)
        tempNode.next = item;
    }

    insertAfter(item, before) {

    }
}

module.exports = LinkedList;