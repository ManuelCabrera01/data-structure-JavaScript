// this methdo will take a key value pair turn it into a node and inserted into the correct bucket
HashTable.prototype.insert = function(key, value) {
  // first we have to know withc bucket our hash node is going to be store and we use the this hash method to figure it out
  var index = this.hash(key);
  // then we have to si if the index are empty or not
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value);
  } else if (this.buckets[index].key === key) {
    this.buckets[index].value === value;
  } else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
};
