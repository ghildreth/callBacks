var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(obj => {
  var ourNewObject = {};
  ourNewObject[obj.x] = obj.x * obj.x;
  ourNewObject[obj.y] = obj.y * obj.y;
  ourNewObject = Math.sqrt(ourNewObject[obj.x] + ourNewObject[obj.y]);
  return ourNewObject;
});

// console.log(result);
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);