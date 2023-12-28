console.log("=========== STEP 1==================");
function greet() {
  console.log("Hello, I am Arya!");
}
greet();

function noArgs() {
  console.log("This is a function with no arguments.");
}
noArgs();

console.log("============== STEP 2 ==================");
function personalDetails(firstName, lastName, collegeName) {
  console.log("First Name:   ", firstName);
  console.log("Last Name:    ", lastName);
  console.log("College Name: ", collegeName);
}
personalDetails("Arya", "Patil", "AMGOI");

console.log("============== STEP 3 ==================");
function swapValues(v1, v2) {
  console.log("Values before Swapping: ", "v1->", v1, " v2->", v2);
  var temp = v1;
  v11 = v2;
  v2 = temp;
  console.log("Values after swapping:  ", "v1->", v1, " v2->", v2);
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);

console.log("============== STEP 4 ==================");
function addThreeValues(v1, v2, v3) {
  var result = v1 + v2 + v3;
  console.log("Addition: ", result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");
