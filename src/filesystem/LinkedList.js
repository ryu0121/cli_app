export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(node) {
    if (this.tail === null) {
      this.tail = node;
      this.head = this.tail;
      return;
    }
    this.tail.next = node;
    node.next = null;
    node.prev = this.tail;
    this.tail = node;
  };

  delete(name) {
    if (this.head === null) {
      return null;
    }
    if (this.head.name === name) {
      const temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      return temp;
    }
    let iterator = this.head;
    while (iterator.next) {
      if (iterator.next.name === name) {
        const temp = iterator.next;
        iterator.next = iterator.next.next;
        temp.next = null;
        return temp;
      }
      iterator = iterator.next
    }
    return null;
  }

  includes(name) {
    if (this.head === null) {
      return false;
    }
    let iterator = this.head;
    while (iterator) {
      if (iterator.name === name) {
        return true;
      }
      iterator = iterator.next;
    }
    return false;
  }

  getNode(name) {
    if (this.head === null) {
      return null;
    }
    let iterator = this.head;
    while (iterator) {
      if (iterator.name === name) {
          return iterator;
      }
      iterator = iterator.next;
    }
    return null;
  }

  deepCopy() {
    let copiedList = new LinkedList();
    let iterator = this.head;
    while (iterator != null) {
      if (iterator instanceof File) {
        copiedList.append(new File(iterator.parent, iterator.name));
      }
      if (iterator instanceof Directory && iterator.children.head === null) {
        copiedList.append(new Directory(iterator.parent, iterator.name));
      }
      if (iterator instanceof Directory) {
        iterator.children.deepCopy();
      }
      iterator = iterator.next;
    }
    return copiedList;
  }
}