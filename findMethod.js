var array1 = [9, 10, 11, 12];

// var found = array1.find(function(element) {
//   return element >10;
//   });
// console.log(found);

function find(list, cb) {
  for (var i = 0; i < list.length; i ++){
    if(cb(list[i], i, list)) {
      return list[i]
    }
  }
}
 find(array1, function(el)  {

  return el > 10;

  });
