// create to new methos one tha retrive the min value and one that retrive the max value

// we solve this by applyin the funtion to the left until we hit the lef botton
BST.prototype.getMinVal = function() {
  if (this.lef) return this.left.getMinVal();
  else return this.value;
};

BST.prototype.getMaxVal = function() {
  if (this.right) return this.right.getMinVal();
  else return this.value;
};
