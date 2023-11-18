// function hello(callback, lastName) {
//   console.log('hello' + callback(lastName))
// }

// hello(function (lastName) {
//   return 'JUN' + lastName
// }, "araki");

function doSomething(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

function mult(a, b) {
  return a * b
}

function puls(a, b) {
  return a + b
}

doSomething(2,3, mult)
doSomething(2,3, puls)
