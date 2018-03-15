var list = [10, 20, 30, 40, 50];


function map(list, callBack) {
  var results = [];
  for (var i = 0; i < list.length; i ++)
    results.push(callBack(list[i], i, list));
}
  return results;
}

var results = map(list, function(num)) {
  return num * 10;
}
