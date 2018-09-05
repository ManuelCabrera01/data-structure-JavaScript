// retrive all
HashTable.prototype.retriveAll = function() {
  var allNode = [];
  for (var i = 0; i < this.numBuckets; i++) {
    var currentNode = this.buckets[i];
    while (currentNode) {
      allNode.push(currentNode);
      currentNode = currentNode.next;
    }
  }
  return allnodes;
};
