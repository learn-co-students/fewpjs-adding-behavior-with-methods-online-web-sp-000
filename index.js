// Your code here
class Cat {
    constructor(name, sex) {
      this._name = name;
      this._sex = sex;
    }
  
    speak() {
      return `${this._name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name, sex) {
      this._name = name;
      this._sex = sex;
    }
  
    speak() {
      return `${this._name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name, sex) {
      this._name = name;
      this._sex = sex;
    }
  
    speak() {
      if (this._sex === "male") {
        return `It's me! ${this._name}, the parrot!`;
      } else {
        return `${this._name} says squawk!`;
      }
    }
  }