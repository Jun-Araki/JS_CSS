const hello = function (name, age) {
  console.log("Hello" + name + age);
  return name + age;
}



hello("Jun", 10);
const returnValue = hello("Jun2", 10);
console.log(returnValue);
