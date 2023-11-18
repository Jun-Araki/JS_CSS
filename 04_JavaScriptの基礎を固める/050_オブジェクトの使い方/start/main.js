const person = {
  name: ["hello", "world"],
  age: 20,
  int: {
    sports: "baseball",
    music: "rock"
  },
  getFullName: function () {
    console.log(this.name[0])
  }
};

const ageKey = "age"

person["age"] = "jun"
console.log(person.age);
person.getFullName();

const s = "hello";
console.log(s.toUpperCase());
