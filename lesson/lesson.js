//  OOP -
// На ачому стоїть ООР:
// 1. НАСЛІДУВАННЯ - властивіть дочірнього класу унаслідувати БАТЬКІВСЬКІ властивості.
// Але не навпаки (батьківський клас не наслідує властивості з дочірнього класу)
// 2. ІНКАПСУЛЯЦІЯ (приховання)- це властивість вложення більш складної поведіки в якусь просту
// обгортку або простий метод. Приховання складної логіки в просту функцію.
// 3. ПОЛІМОРФІЗМ - об'єкт може себе вести по-різному, в залежності від переданих йому
// параметрамів.
// 4. АБСТРАКЦІЯ - є якийсь певний абстрактний клас, екземпляр класу якого не можна зробити.
// Але на основі цього абстрактного класу можна створити будь що.
//


// ----------------------------------------------------------------------------------------
//           Ф У Н К Ц І Ї - К О Н С Т Р У К Т О Р И
// ----------------------------------------------------------------------------------------
//
// let krista = {
//   name: 'Kristi',
//   age: 20,
//   payment: 1000,
//   greening: () => {
//     console.log('Hello')
//   }
// }
//
// let karina = {
//   name: 'Karina',
//   age: 15,
//   payment: 2000,
//   greening: () => {
//     console.log('Hello')
//   }
// }
//
// let dimas = {
//   name: 'Dioms',
//   age: 25,
//   payment: 4000,
//   greening: () => {
//     console.log('Hello')
//   }
// }
//
//
// function User(name, age, gender, skill) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.skill = skill;
//
//   this.sayHello = function (age) {
//     console.log(`Hello. My name is ${this.name}, meni ${age}`);
//   }
// }
//
// const nant = new User('Tamara', 55, 'male', ['JS', 'Node'])
//
// nant.sayHello(22)
// console.log(krista);

//

//---------------------------------------------------------------------------------------
//
// function User(name, age, gender, skill) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.skill = skill;
//
//   this.sayHello = function () {
//     console.log(`Hello. My name is ${this.name}`);
//   }
// }
//
// const karina = new User('Karisha', 15, 'female', ['JS', 'Node'])
//
// const anatoliy = new User('Oleg', 25, 'male', 'Nude JS');
//
// console.log(karina);
// console.log(anatoliy);
//
// karina.sayHello();
// anatoliy.sayHello();


//-------------------------------------------------------------------------------------------------
//           C L A S S - C O N S T R U C T O R     "SYNTACTIC SUGAR"
//
//
// class Human {
//   constructor(age, name, gender) {
//     this.age = age;
//     this.name = name;
//     this.gender = gender;
//     this.money = 0;
//   }
//
//   eat() {
//     console.log('Om nom nom')                //поведінкові функції
//   }
//
//   goWork() {
//     this.money += 100;
//   }
// }
//
// const dimas = new Human(26, 'Dima', 'male');
// const dimas2 = new Human(29, 'Dimon', 'male');
//
// dimas.goWork();
// dimas.goWork();
// dimas.goWork();
// dimas.goWork();
// dimas.goWork();
//
// console.log(dimas);
// console.log(dimas2);
//
// dimas.eat();
// dimas2.eat();
//
//
// class Developer extends Human {
//   constructor(age, name, skill) {
//     super(age, name);
//     this.skill = skill;
//   }
//
//   goWork() {
//     this.money += 99999999;
//   }
//
//   coding() {
//     console.log(`I am codding on ${this.skill}`)
//   }
// }
//
//
// const olga = new Human (27, 'Olyusik', 'female' );
// const anatoliy = new Developer(20, 'Tolya', 'JS')
//
// console.log(olga);
// console.log(`---------------------------`);
// console.log(anatoliy);
//
// anatoliy.goWork();
// anatoliy.coding();
// console.log(anatoliy);
//
//
//
// class TeamLead extends Developer {
//   constructor(age, name, gender, skill, slaves = []) {
//     super(age, name, gender, skill);
//     this.slaves = slaves;
//   }
//
//   showSlaves() {
//     for (const slave of this.slaves) {
//       console.log(`Morning boss. Slave ${slave.name} listen to you!`);
//       console.log('________________________-')
//     }
//   }
// }
//
// const lera = new TeamLead(32, 'Lera', 'famale', ['JS', 'TS', 'React', 'Node'],
//     [anatoliy, dimas]);
//
// console.log(lera);
// console.log(`---------------------------`);
// lera.showSlaves();
//
//

//----------------------------------------------------------------------------------------------
//               Ф У Н К Ц І О Н А Л Ь Н Е   Н А С Л І Д У В А Н Н Я
//                      Ф У Н К Ц І Ї - К О Н С Т Р У К Т О Р И
//
// описується як робився EXTEND на прототипах (на функціях)
//----------------------------------------------------------------------------------------------
//
//
//    function Animal(name) {
//         this.name = name;
//      //   TO NE OK!!!!!!
//      //    this.run = function () {
//      //    console.log(`${this.name} is running`);
//      //
//      // }
// }
//
// function Hamster(name, speed) {
//   this.name = name;
//   this.speed = speed;
// }
//
// Animal.prototype.run = function () {
//   console.log(`${this.name} is running`);
// }
//
// //Hamster.prototype = Animal.prototype;   // поганий підхід!!!
// // Hamster.prototype.__proto__ = Animal.prototype; // підкапотка прототипа для крайнього випадку
//
// Hamster.prototype = Object.create(Animal.prototype);  //НАЙКРАЩИЙ ВАРІАНТ для реальності
//
//
// Hamster.prototype.run = function () {
//   console.log('Daba-daba-du')
// }
//
// let semka = new Animal('Semka');
// let grushka = new Animal('Grushka');
// let zakolka = new Hamster('Zakolka');
//
// semka.run();
// grushka.run();
// zakolka.run();

///////////////////////////////////////////////////////////////////////////////////////////////////
//-----------------------------------------------------------------------------------------------//
///////////////////////////////////////////////////////////////////////////////////////////////////
//     О С Н О В Н А    С У Т Ь    П Р О Т О Т И П І В


function Hamster(name) {
    this.name = name;
    this.stomach = [];
}

Hamster.prototype.stomach = [];

Hamster.prototype.findFood = function (food) {
    this.stomach.push(food);
}

let zakolka = new Hamster('Zakolka');
let barabaskha = new Hamster('Barabashka');

zakolka.findFood('Apple');
zakolka.findFood('Peach');
barabaskha.findFood('Bread');
barabaskha.findFood('Nut');
barabaskha.findFood('Corn');

console.log(zakolka.stomach);
console.log('-----------------------------------------------');
console.log(barabaskha.stomach);




//  Різниця між стандартною фугкцією і стрілочною функцією.
//     Стрілочна функція:
// * не має свого this, вона ссилаєтьсяна на this вище (тобто, на батьківський);
// * не має arguments;
// *  можна НЕ писати  RETURNE
// * можна робити однорядковий;
// * не вспливає до гори, тобто стрілочна функці не має HOISTING

