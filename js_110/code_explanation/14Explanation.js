
let students = ["Chris", "Pete", "Nick", "Jordan"];

function passedStudents(list) {
  let passed = list.splice(2, 2);
  return passed;
}

passedStudents(students);
console.log(students); // ["Chris", "Pete"]

