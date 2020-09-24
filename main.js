let LinkedList = require("./LinkedList");

function main() {
    let SLL = new LinkedList();
    const apollo = 'Apollo'
    const boomer = 'Boomer'
    const helo = 'Helo'
    const tauhida = 'Tauhida'
    const husker = 'Husker'
    const squirrel = 'Squirrel'
    const starbuck = 'Starbuck'

    SLL.insertFirst(apollo);
    SLL.insertLast(boomer)
    SLL.insertLast(helo)
    SLL.insertLast(husker)
    SLL.insertLast(starbuck)
    SLL.insertAt(tauhida, 1)

    display = (lst) => {
        let lstArray = []
        let node = lst.head;
        while(node) {
            lstArray.push(node.value);
            node = node.next
        }
        console.log(lstArray)
    }

    size = (lst) => {
        let node = lst.head
        let count = 0;
        while(node) {
            count++;
            node = node.next
        }
        return count;
    }

    isEmpty = (lst) => {
        if(lst.head) {
            return false;
        }
        return true;
    }

    findPrevious = (item, lst) => {
        let node = lst.head;
        if(node.value === item) {
            return null
        }
        while(node.next.value !== item) {
            node = node.next;
        }
        return node;
    }

    findLast = (lst) => {
        let node = lst.head;
        while(node.next) {
            node = node.next;
        }
        return node;
    }
    
    removeRepeat = (lst) => {
        let current = lst.head;
        while (current !== null) {
            let newNode = current;
            while (newNode.next !== null) {
                if (newNode.next.value === current.value) {
                    newNode.next = newNode.next.next;
                }
                else {
                    newNode = newNode.next;
                }
            }
            current = current.next;
        }
    }

    thirdFromLast = (lst) => {
        let node = lst.head;
        if(!node.next.next.next) {
            return null
        }
        while(node.next.next.next) {
            node = node.next
        }
        return node;
    }

    reverseLst = (lst) => {
        let node = lst.head;
        let temp = null;
        let previous = null;
        while(node) {
            temp = node.next;
            node.next = previous;
            previous = node;
            node = temp;
        }
        lst.head = previous
    }

    // findMiddle = (lst) => {
    //     node = lst.head;
    //     let halfSize = size(lst)/2
    //     if(halfSize % 2 === 0) {
    //         let 
    //         for(let i=2; i<=halfSize; i++) {
    //             node=node.next;
    //         }
    //     }

    // }
    
    // findMiddle(SLL)

}

main();