const Node = require('./node');

class LinkedList {
  constructor() {
    this._head=null;
    this._tail=null;
    this.length=0;
  }

  append(data) {
    var node = new Node(data);

    if (this.length) {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
    else {
      this._head = node;
      this._tail = node;
    }
    this.length++;

    return this;
  }

  head() {
    if(this._head) {
      return this._head.data
    } else {
      return null;
    }
  }

  tail() {
    if(this._tail) {
      return this._tail.data
    } else {
      return null;
    }
  }

  at(index) {
    var current = this._head,
        count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current.data;
  }

  insertAt(index, data) {
    if(this.length === 0) {
      this.append(data);
      return this;
    }
    var current = this._head;
    var count = 0;
    while (index != count) {
      current = current.next;
      count++;
    }
    current.data = data;
  }

  isEmpty() {
    if (this.length===0) {
      return true;
    } else {

      return false;
    }
  }

  clear() {
    this._head = null;
    this._tail = null;
    this.length = 0;
    return this;
  }

  deleteAt(index) {
    var current = this._head;
    var count = 0;

    if (index != 0) {
      while (count < index) {
        current = current.next;
        count++;
      } 

      current.prev.next = current.next;
      current.next.prev = current.prev;
    } else {
      if ( this.length == 1 ) {
        this.clear();
      } 
      else {
        if (index == 0) {
          this._head = this._head.next;
          this._head.prev = null;
        }
        if (index == this.length - 1) {
          this._tail = this._tail.prev;
          this._tail.next = null;
        }
      }
    }
    return this;
  }

  reverse() {
    var current = this._head;
    var condition;

    while (current !== null) {
      condition = current.next;
      current.next = current.prev;
      current.prev = condition;
      current = current.prev;
    }

    condition = this._head;
    this._head = this._tail;
    this._tail = condition;

    return this;
  }

  indexOf(data) {
    var current = this._head;
    var index = 0;

    while (current.data != data) {
      if (!current.next) {
        return -1;
      } else {
        current = current.next;
        index++;
      }
    }
    return index;
  }

}

module.exports = LinkedList;
