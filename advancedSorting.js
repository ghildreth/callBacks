var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var customSortingFunction = students.sort(function(a, b) {

  if(a.name < b.name ) {
    return -1
  }
  if (a.name > b.name) {
    return 1;
  }
  if (a.name === b.name) {
    return b.age - a.age;
  }
  return 0;
});
console.log(customSortingFunction);



// students.sort(function(a, b) {
//   return b.age - a.age;
// });

// students.sort(function(a, b) {
//   return a.name > b.name;
// });

// console.log(students);


// function sortNumbers(x, y){
//   return x.age - y.age;
// };

// function sortName (x, y) {
//   return y.name;
// }


// console.log(students.sort(sortNumbers));
// console.log(students.sort(sortName));

