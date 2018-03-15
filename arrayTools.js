var tools = {
  pop: function(list) {
    var last = list[list.length -1];

    list = list.slice(0, list.length - 1);

    return last
  },
  shift: function(list) {
    return list[0];
  }






};

function action(list, tool) {
  return tool(list);
}

console.log("POP");
var list = ["10", "J", "Q", "K", "A"];
var result = action(list, tools.pop);
console.log(result);
