function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var id = -1;
  /* your code here */
  // list.forEach(function (element, index, array) {
  //   x = array;
  //   e = element;
  //   i = index;
  //   });
  // for (let i = 0; i < list.length; i++){
  //   var x = list[i];
  // }
  return function() {

    if (id < list.length -1) {
      id += 1;
      return list[id];
    } else {
      id = -1;
      id += 1;
      return list[id];
    }

  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6