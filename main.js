// function addBinary(a,b) {
//   let sum = a + b;
//   //By specifing 2 as the base (radix) of toString, it converts to binary
//   let binarySum = sum.toString(2);
//   return binarySum;
// }

//Converted into arrow function format
let addBinary = (a, b) => (a + b).toString(2);