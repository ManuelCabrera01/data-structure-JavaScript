BST.prototype.contains = function(value) {
  //firt step is to check is the value that we are looking for match the value of the node that we are looking for
  if (value === this.value) {
    return true;
  }
  // if the value return false we have tow option aether the value the we pass is less that the current node or is gratter than the current node
  else if (value < this.value) {
    // if if less we now that we hava to go the left and check if there is a left child here or not
    // if there no left child here we have to retunr false
    if (!this.left) {
      return flase;
    }
    //if there is a left child we want to run the contains funtions on this child node
    else {
      return this.left.contains(value);
    }
    // if is gratter than the current node
  } else if (value > this.value) {
    // if there is no right node return false
    if (!this.right) {
      return false;
    }
    // here we repeat the proses as we did on the left side
    else {
      return this.right.contains(value);
    }
  }
};
