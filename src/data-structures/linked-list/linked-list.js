class LinkedListNode {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new LinkedListNode(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  insertBefore(data, index) {
    const newNode = new LinkedListNode(data);

    let previousNode = null;
    let current = this.head;
    let i = 0;
    while (current && current.next !== null) {
      if (index === 0 && i === index) {
        newNode.next = this.head;
        this.head = newNode;
        return;
      } else if (index !== 0 && i === index) {
        this.insertNewNodeInBetween({ previousNode, newNode, currentNode: current });
        return;
      }

      previousNode = current;
      current = current.next;
      i++;
    }

    if (i < index || i === 0) {
      throw new Error(`Index ${index} does not exist in the list.`);
    }
    this.insertNewNodeInBetween({ previousNode, newNode, currentNode: current });
  }

  insertNewNodeInBetween({ previousNode, currentNode, newNode }) {
    previousNode.next = newNode;
    newNode.next = currentNode;
  }

  *values() {
    let current = this.head;
    while(current !== null) {
      yield current.data;
      current = current.next;
    }
  }
}

module.exports.LinkedList = LinkedList;
