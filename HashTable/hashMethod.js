HashTable.prototype.hashMethod = function(key) {
  //this method will turn an atring and turn it intu a numerich hash
  var total = 0;

  for (i = 0; i < key.length; i++) {
    total += key.chaCodeAt(i);
  }
  //   we are goinf to recive a number bigguer that 30 so we have to reduce ir to a number betwen 0 and 29 using the modulus operator
  // becouse if we deide by 30 the remainder ids gonna be number betew 29 and 0... then we store that value in a variable call bucket and the return it
  var bucket = total % this.numBuckets;
  return bucket;
};
