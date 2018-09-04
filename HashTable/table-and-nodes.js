function HashTable(size) {
  // theis line define were our data is goint to store
  this.buckets = Array(size);
  // then we have keep track of howmany buckets we hae in our hash table
  this.numbuckets - this.buckets.length;
}
// now we create a constructor funtion that will create nodes
function HashNode(key, value, next = null) {
  this.key = key;
  this.value = value;
  this.next = next;
}

var myHT = new HashTable(30);
console.log(myHT);
