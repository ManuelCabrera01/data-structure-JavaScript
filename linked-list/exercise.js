LinkedList.prototype.indexOf = function(vaule) {
  //  first we created a empty array that will hold store the value of the index if the match
  var indexes = [];
  // create a var that will keep the value of the current index
  var currentIndex = 0;
  // now we set the currentnode to the be the first element of the list
  var currentnode = this.head;
  //  while the currentnode is pressent and is not equal null
  while (currentnode) {
    if (currentnode.value == value) {
      indexes.push(currentIndex);
    }
    //  we change the current node to the nezt value
    currentnode = currentnode.next;
    // we incremente the value of current index
    currentIndex++;
  }
  return indexes;
};
