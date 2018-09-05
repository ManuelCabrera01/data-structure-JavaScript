HashTable.prototype.get = function(key) {
  var index = this.hash(key);
  if (!this.buckets[index]) {
    return null;
  } else {
    var currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
};
