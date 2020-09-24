let LinkedList = require("./LinkedList");

function main() {
    const SLL = new LinkedList;
    const apollo = 'Apollo'
    const boomer = 'Boomer'
    const helo = 'Helo'
    const tauhida = 'Tauhida'
    const husker = 'Husker'
    const starbuck = 'Starbuck'

    SLL.insertFirst(apollo);
    SLL.insertLast(boomer)
    SLL.insertLast(helo)
    SLL.insertLast(husker)
    SLL.insertLast(starbuck)
    SLL.insertBefore(tauhida, husker)
    console.log(SLL.find(starbuck))
}

main();