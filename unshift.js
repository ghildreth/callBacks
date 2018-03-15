function unshift() {
  var list = arguments[0];
  delete arguments[0];
  var newStuff = Object.values(arguments);
  return newStuff.concat(list);
}
var list = ["10", "J", "Q", "K"];
var result = unshift(list, "8", "9");
console.log(result);