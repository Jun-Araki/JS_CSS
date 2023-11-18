const obj = {
  first_name: "jun",
  last_name: "araki",
  printFullName: function () {
    console.log(this.first_name + this.last_name)
  }
}

class MyObj{
  constructor() {
    this.first_name = 'junjun';
    this.last_name = 'arakiaraki';
  }
  printFullName() {
    console.log('hello')
  }
}

const obj2 = new MyObj();

obj.printFullName();
obj2.printFullName();
