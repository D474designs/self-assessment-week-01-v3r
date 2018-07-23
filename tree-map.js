/*Tree Map

- [ ] Implement a higher order function, `map`, on the given `Tree` class using pseudoclassical instantiation

Available resources for this prompt
MDN
*/

// create TreeMap class that starts a prototype chain
var TreeMap = Object.create(value) {
  // create placeholder array decorator for children
  this.arr = [];
  // set root starting value to 0
  this.value = 0;
};
// create addChild method inside of treeMethods prototypal chain object
var treeMethods = function() {
  // create addChild method
  TreeMap.prototype.addChild = function(value) {
    // take input value and assign it to prototype object
    this.value = value;
    // assign tree children values
    if (this.arr[0]) {
      this.arr[1] = TreeMap();
    }
};
  ._map = function(input) {
    for (var i = 0; i = input.length; i++) {
      input[i] * 2;
    }
  };

/**
  *
  * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 10
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */
