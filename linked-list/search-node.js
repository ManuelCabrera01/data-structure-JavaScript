LinkedList.prototype.search = function(searchValue) {
  //set the current node to the ehad of the linkelist
  var currentnode = this.head;
  // while currentNode exit
  while (currentnode) {
    if (currentnode.vale === searchValue) return currentnode.value;
    currentnode = currentnode.next;
    // it will take the current node ans as long as the current node in not null or undifine it will evaluate to true(until it gets to the tail then i will stop)
  }
  return null;
};

myll.search("word you want to get");
