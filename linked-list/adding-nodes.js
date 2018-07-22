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

//ADDING A NEW NODE TO THE HEAD OF THE LINKEDLIST METHOD
LinkedList.prototype.addToHead = function(value) {
  //
  //this.head refers to the old or the new head of the list
  //                              |
  var newNode = new Node(value, this.head, null);
  //if there are nodes in the list set the new node to the previous pointer  of the head of the list
  if (this.head) this.head.prev = newNode;
  //if there are not nodes in the list set the LinkedList tail to the new node because because the new node is the only one in the list
  else this.tail = newNode;
  // finally if whether the list is empty or not set th new node to the head of the list
  this.head = newNode;
};
//ADDING A NEW NODE TO THE TAIL OF THE LINKEDLIST METHOD
LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

// let ll = new LinkedList();
// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToHead(300);
// console.log(ll)

let myll = new LinkedList();
myll.addToTail(10);
myll.addToTail(20);
myll.addToTail(30);
console.log(myll.tail.prev);
