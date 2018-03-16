var countdownGenerator = function (x) {
  var cd = x + 1;

  return function() {
    cd -= 1;
    (cd > 0) ? console.log("T-minus " + cd + " ...") : (cd === 0) ? console.log("Blast Off!") : console.log("Rockets already gone, bub!");
  }
}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!