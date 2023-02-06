/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (this.head === null) this.head = newNode;
    if (this.tail === null) this.tail = newNode;

    if (this.head !== null) {
      const oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
    }

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head === null) throw new Error("Empty linked list.");

    let current = this.head;

    if (current = this.tail) {
      this.head = null;
      this.tail = null;
      return current.val;
    }

    while (current !== null) {

      if (current.next === this.tail) {
        const oldTail = this.tail;
        current.next = null;
        this.tail = current;
        this.length--;
        return oldTail.val;
      }

      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) throw new Error("Empty linked list.");

    const oldHead = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
    return oldHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length - 1 || idx < 0) throw new Error("Invalid index.");

    let index = 0
    let current = this.head;

    while (current !== null) {
      if (index === idx) return current.val;
      index++;
      current = current.next;
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length - 1 || idx < 0) throw new Error("Invalid index.");

    let index = 0
    let current = this.head;

    while (current !== null) {
      if (index === idx) {
        current.val = val;
        return;
      }

      index++;
      current = current.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) throw new Error("Invalid index.");


    if (idx === 0) {
      return this.unshift(val);
    }

    if (idx === this.length + 1) {
      return this.push(val);
    }

    const newNode = new Node(val);

    let prev;
    let index = 0
    let current = this.head;

    while (current !== null) {
      if (index === idx) {

        prev.next = newNode;
        newNode.next = current;
        this.length++;
        return;
      }

      index++;
      prev = current
      current = current.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length - 1 || idx < 0) throw new Error("Invalid index.");

    if (idx === 0) {
      return this.shift();
    }

    if (idx === this.length) {
      return this.pop();
    }

    let prev;
    let index = 0
    let current = this.head;

    while (current !== null) {
      if (index === idx) {
        prev.next = current.next;
        this.length--;
        return current.val;
      }

      index++;
      prev = current
      current = current.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let current = this.head;

    while (current !== null) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;
