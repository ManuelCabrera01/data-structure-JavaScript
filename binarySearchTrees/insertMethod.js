function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  // check to see if the value that we want to insert  is graet o les that the value of our root node

  // if the value of the node that we want to add is less that the value of aur root node
  if (value <= this.value) {
    // if is less we know we have to added to the left   but we have to check if there is already a child there or is unocupaie or null

    if (!this.left) {
      // if there is no child  we created a new node (binary seach three ) and we pass the value
      this.left = new BST(value);
    } else {
      // else we run the isert function on the node or BST that is the current child
      this.left.insert(value);
    }
  } else if (value > this.value) {
    // if ther no right child
  }
  if (!this.right) {
    this.right = new BST(value);
  } else {
    this.right.insert(value);
  }
};

//testing

var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(59);
bst.insert(60);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);
console.log(bst);
