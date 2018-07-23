//  Data structure: Linked List

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// REMOVE NODE FROM THE HEAD
LinkedList.prototype.removeHead = function() {
  // if the list is empty
  if (!this.head) return null;
  // saving the value of the head in a variable
  var val = this.head.val;
  // the new head is going to be iqual to the current next node , next node
  this.head = this.head.next;
  // if theres a node we set its previous properti to null
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

// REMOVE  NODE FROM THE TAIL
LinkedList.prototype.removeTail = function() {
  //if the list is empty we return null
  if (!this.tail) return null;
  // now we store the value of the tail node;
  var val = this.tail.val;
  // now we change the tail pointer to be node node before the curretn tail node that we are going to be removing
  this.tail = this.tail.prev;
  // now there are two case one is if the new tail we just assign is acctually present or our LinkedList is going to be empty after we remove this node
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};
