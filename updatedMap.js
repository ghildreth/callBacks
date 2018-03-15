var words = ["ground", "control", "to", "major", "tom"];

function map (array, callback) {
  var placeHolder = [];
  // array.forEach(function ())
  for (let i = 0; i < array.length; i++) {
    placeHolder.push(callback(array[i]));
  }
  console.log(placeHolder);
}


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});