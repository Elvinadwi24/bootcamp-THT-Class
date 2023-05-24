/* 1. Buat sebuah class dengan nama Person.
Class Person memiliki property sebagai berikut:
- name
- age
- gender
- height
Class tersebut juga memiliki method sebagai berikut:
- setName(name) -> untuk menyimpan name
- setAge(age) -> untuk menyimpan age
- setGender(gender) -> untuk menyimpan gender
- setHeight(height) -> untuk menyimpan height
- getName(name) -> untuk mengambil name
- getAge(age) -> untuk mengambil age
- getGender(gender) -> untuk mengambil gender
- getHeight(height) -> untuk mengambil height */

class Person {
    name;
    age; 
    gender;
    height;

    constructor(name, age, gender, height) {
        this.name = name
        this.age = age
        this.gender = gender
        this.height = height
        console.log('===================', name, age, gender, height)
    }

    Name() {
        return this.name = this.name;
    }

    Age() {
        return this.age = this.age;
    }

    Gender() {
        return this.gender = this.gender;
    }

    Height() {
        return this.height = this.height;
    }
}

const student1 = new Person('elvina', 19, 'perempuan', 156);
const student1Name = student1.Name();
const student1Age = student1.Age();
const student1Gender = student1.Gender();
const student1Height = student1.Height();
console.log('nama :', student1Name);
console.log('age :', student1Age);
console.log('gender :', student1Gender);
console.log('height :', student1Height);