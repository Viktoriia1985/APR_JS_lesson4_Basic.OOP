//------------------------------------------------------------------------------------------
//                            H O M E W O R K
//------------------------------------------------------------------------------------------


// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User
//
//
// function User(id, name, surname, email, phone) {
//
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
//
// let array = [];
//
// let array1 = new User('1', 'Vika', 'Krat', 'flight@gmail.com', +380664052762);
// const array2 = new User('2', 'Veraa', 'Petryk', 'hello@gmail.com', +380664756433);
// const array3 = new User('3', 'Anna', 'Omalina', 'anna@gmail.com', +380660000762);
// const array4 = new User('4', 'Katya', 'Sloboda', 'school@gmail.com', +380664565762);
// const array5 = new User('5', 'Gala', 'Onyschuk', 'hope@gmail.com', +380668964646);
// const array6 = new User('6', 'Natali', 'Kucher', 'sweet45@gmail.com', +380668964690);
// const array7 = new User('7', 'Sofiya', 'Babych', 'life34@gmail.com', +380668968646);
// const array8 = new User('8', 'Svitlana', 'Lastivka', 'okweb300@gmail.com', +3809700964646);
// const array9 = new User('9', 'Antonina', 'Radysh', 'hidden@gmail.com', +380939664646);
// const array10 = new User('10', 'Rita', 'Lytvyn', 'ride1745e@gmail.com', +380668969706);
//
// array = [array1, array2, array3, array4, array5, array6, array7, array8, array8, array10];
// console.log(array);


// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
//
// class Client {
//     constructor(id, name, surname, email, phone, order = []) {
//
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
//
// let newArray1 = new Client('1', 'Vika', 'Krat', 'flight@gmail.com', +380664052762, ['beer', 'fish']);
// const newArray2 = new Client('2', 'Veraa', 'Petryk', 'hello@gmail.com', +380664756433, ['Coca-cola, Pepsi, Fanta']);
// const newArray3 = new Client('3', 'Anna', 'Omalina', 'anna@gmail.com', +380660000762, ['Sweets', 'Gums']);
// const newArray4 = new Client('4', 'Katya', 'Sloboda', 'school@gmail.com', +380664565762, ['Water', 'Lemonade']);
// const newArray5 = new Client('5', 'Gala', 'Onyschuk', 'hope@gmail.com', +380668964646, ['Bread', 'Croissant']);
// const newArray6 = new Client('6', 'Natali', 'Kucher', 'sweet45@gmail.com', +380668964690, ['Lemon', 'Orange']);
// const newArray7 = new Client('7', 'Sofiya', 'Babych', 'life34@gmail.com', +380668968646, ['Coffe', 'Tea']);
// const newArray8 = new Client('8', 'Svitlana', 'Lastivka', 'okweb300@gmail.com', +3809700964646, ['Hamburger', 'Cheesburger']);
// const newArray9 = new Client('9', 'Antonina', 'Radysh', 'hidden@gmail.com', +380939664646, 'Honey', 'Sugar');
// const newArray10 = new Client('10', 'Rita', 'Lytvyn', 'ride1745e@gmail.com', +380668969706, ['Milk', 'Cottage cheese']);
//
// newArray = [newArray1, newArray2, newArray3, newArray4, newArray5, newArray6, newArray7, newArray8, newArray9, newArray10];
// console.log(newArray);


// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
//   виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//   Додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і добавляє його в
// поточний об'єкт car
//
// function Car1(manufacturer, model, year, maxSpeed, capacity, driver) {
//     this.manufacturer = manufacturer;
//     this.model = model;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//     this.driver = ' ';
//
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         console.log(`
//         manufacturer: ${this.manufacturer};
//         model: ${this.model};
//         year: ${this.year};
//         maxSpeed: ${this.maxSpeed};
//         capacity: ${this.capacity};
//         driver: ${this.driver};
//         `)
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriver = function (newDriver) {
//         this.driver = newDriver;
//     }
// }
//
// let car1 = new Car1('BMW', 'X3', 2016, 200, 2.0);
// car1.drive(200);
// car1.increaseMaxSpeed(230);
// car1.changeYear(2019);
// car1.addDriver({name: 'Vova', gender: 'male', age:38, status: true});
// car1.info();
// console.log(`--------------------------------------------`);
// console.log(car1.driver);
// console.log(`--------------------------------------------`);
// console.log(`--------------------------------------------`);
// console.log(`--------------------------------------------`);


// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в
// поточний об'єкт car
//
//
// class Car {
//     constructor (manufacturer, model, year, maxSpeed, capacity, driver){
//         this.manufacturer = manufacturer;
//         this.model = model;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity;
//         this.driver = ' ';
//     }
//
//     drive () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//     info () {
//         console.log(`
//         manufacturer: ${this.manufacturer};
//         model: ${this.model};
//         year: ${this.year};
//         maxSpeed: ${this.maxSpeed};
//         capacity: ${this.capacity};
//         driver: ${this.driver};
//         `);
//     }
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//
//     addDriver (newDriver) {
//         this.driver = newDriver;
//     }
// }
//
// const car = new Car('BMW', 'X3', 2016, 200, 2.0);
// car.drive(200);
// car.increaseMaxSpeed(230);
// car.changeYear(2019);
// car.addDriver({name: 'Vova', gender: 'male', age:38, status: true});
// car.info();
// console.log(`---------------------------------------------------`);
// console.log(car.driver);


// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню
//
//
// function User(id, name, surname, email, phone) {
//
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
//
// let array1 = new User('1', 'Vika', 'Krat', 'flight@gmail.com', +380664052762);
// const array2 = new User('2', 'Veraa', 'Petryk', 'hello@gmail.com', +380664756433);
// const array3 = new User('3', 'Anna', 'Omalina', 'anna@gmail.com', +380660000762);
// const array4 = new User('4', 'Katya', 'Sloboda', 'school@gmail.com', +380664565762);
// const array5 = new User('5', 'Gala', 'Onyschuk', 'hope@gmail.com', +380668964646);
// const array6 = new User('6', 'Natali', 'Kucher', 'sweet45@gmail.com', +380668964690);
// const array7 = new User('7', 'Sofiya', 'Babych', 'life34@gmail.com', +380668968646);
// const array8 = new User('8', 'Svitlana', 'Lastivka', 'okweb300@gmail.com', +3809700964646);
// const array9 = new User('9', 'Antonina', 'Radysh', 'hidden@gmail.com', +380939664646);
// const array10 = new User('10', 'Rita', 'Lytvyn', 'ride1745e@gmail.com', +380668969706);
//
// array = [array1, array2, array3, array4, array5, array6, array7, array8, array9, array10];
// console.log(array);
//
// for (let i = 1; i < array.length; i += 2) {
//     console.log(array[i]);
// }
//
// console.log(`===============================================================================================`);
//
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
//
// console.log(`===============================================================================================`);
//
// for (let j = array.length-1; j >= 0; j--) {
//     console.log(array[j]);
// }


// 6. Взяти масив з завдання 2.
// Відсортувати його по кількості товарів в полі order. по спаданню
//
// class Client {
//     constructor(id, name, surname, email, phone, order = []) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// const newArray1 = new Client('1', 'Vika', 'Krat', 'flight@gmail.com', +380664052762, ['Beer', 'Fish']);
// const newArray2 = new Client('2', 'Veraa', 'Petryk', 'hello@gmail.com', +380664756433, ['Coca-cola', 'Pepsi', 'Fanta']);
// const newArray3 = new Client('3', 'Anna', 'Omalina', 'anna@gmail.com', +380660000762, ['Sweets', 'Gums']);
// const newArray4 = new Client('4', 'Katya', 'Sloboda', 'school@gmail.com', +380664565762, ['Water', 'Lemonade']);
// const newArray5 = new Client('5', 'Gala', 'Onyschuk', 'hope@gmail.com', +380668964646, ['Bread', 'Croissant', 'Bagel', 'Cookie']);
// const newArray6 = new Client('6', 'Natali', 'Kucher', 'sweet45@gmail.com', +380668964690, ['Lemon', 'Orange']);
// const newArray7 = new Client('7', 'Sofiya', 'Babych', 'life34@gmail.com', +380668968646, ['Coffee']);
// const newArray8 = new Client('8', 'Svitlana', 'Lastivka', 'okweb300@gmail.com', +3809700964646, ['Hamburger', 'Cheesburger', 'BigMack']);
// const newArray9 = new Client('9', 'Antonina', 'Radysh', 'hidden@gmail.com', +380939664646, ['Honey', 'Sugar']);
// const newArray10 = new Client('10', 'Rita', 'Lytvyn', 'ride1745e@gmail.com', +380668969706, ['Milk', 'Cottage cheese']);
//
// newArray = [newArray1, newArray2, newArray3, newArray4, newArray5, newArray6, newArray7, newArray8, newArray9, newArray10];
// console.log(newArray);
// console.log(`------------------------------------------------------------------------`);
//
// let sort = newArray.sort((c1, c2) => c2.order.length - c1.order.length);
// console.log(sort);




//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//                     C L A S S W O R K
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомогою класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допомогою циклу знайти яка попелюшка повинна бути з принцом
//
//
// class Cinderella {
//     constructor (name, age, footSize){
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// class Prince extends Cinderella {
//     constructor(name, age, sizeShoes) {
//         super(name, age);
//         this.sizeShoes = sizeShoes;
//     }
// };
//
// const prince1 = new Prince('Vladimir', 46, 39);
//
// const cinderellas = [
//     new Cinderella('Anna', 19, 35),
//     new Cinderella('Alinna', 23, 37),
//     new Cinderella('Viktoriia', 36, 39),
//     new Cinderella('Nika', 18, 35),
//     new Cinderella('Sveta', 27, 38),
//     new Cinderella('Tosya', 24, 36),
//     new Cinderella('Gala', 10, 38),
//     new Cinderella('Nastya', 21, 35),
//     new Cinderella('Raya', 22, 36),
//     new Cinderella('Vera', 19, 39),
//     new Cinderella('Angel', 35, 39),
// ];
//
// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince1.sizeShoes) {
//         console.log(cinderella)
//     }
// };


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та
// функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//
//
// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// function Prince (name, age, sizeShoes) {
//     this.name = name;
//     this.age = age;
//     this.sizeShoes = sizeShoes;
//
//     this.findCinderella = function (array) {
//         for (const cinderella of array) {
//             if (cinderella.footSize === prince1.sizeShoes) {
//                 console.log(cinderella)
//             }
//         }
//     }
// }
//
// const prince1 = new Prince('Vladimir', 46,39);
//
// const cinderellas = [
//     new Cinderella('Anna', 19, 35),
//     new Cinderella('Alinna', 23, 37),
//     new Cinderella('Angela', 25, 38),
//     new Cinderella('Viktoriia', 36, 39),
//     new Cinderella('Sveta', 27, 38),
//     new Cinderella('Tosya', 24, 36),
//     new Cinderella('Gala', 10, 38),
//     new Cinderella('Nastya', 21, 35),
//     new Cinderella('Raya', 22, 36),
//     new Cinderella('Vera', 19, 39),
// ]
//
// prince1.findCinderella(cinderellas);



// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий, який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// function CreateAtr (name, specification) {
//     this.name = name;
//     this.specification = specification;
//
//     this.description = function () {
//         console.log(this)
//     }
// }
//
// function CreateTag (name, specification, atr) {
//     this.name = name;
//     this.specification = specification;
//     this.atr = atr;
//
//     this.description = function () {
//         console.log(this)
//     }
// }
//
// const atrA1 = new CreateAtr('shape', 'Задает форму активной области ссылки для изображений.');
// const atrA2 = new CreateAtr('target', 'Имя окна или фрейма, куда браузер будет загружать документ');
// const atrA3 = new CreateAtr('name', 'Устанавливает имя якоря внутри документа');
//
// const specA = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.' +
//     ' В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.' +
//     ' Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. ' +
//     'При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри ' +
//     'веб-страницы.'
//
// const tagA = new CreateTag ('<a>', specA, [atrA1, atrA2, atrA3]);
// tagA.description();
//
// console.log(`-----------------------------------------------------------------------------------`);
// console.log(`-----------------------------------------------------------------------------------`);
//
//
// function CreateAtr(name, specification) {
//     this.name = name;
//     this.specification = specification;
//
//     this.description = function () {
//         console.log(this);
//     }
// }
//
// function CreateTag(name, specification, atr)  {
//     this.name = name;
//     this.specification = specification;
//     this.atr = atr;
//
//     this.description = function () {
//         console.log(this);
//     }
// }
//
//
// const atrDiv1 = new CreateAtr('align', 'Задает выравнивание содержимого тега <div>');
// const atrDiv2 = new CreateAtr('title', 'Добавляет всплывающую подсказку к содержимому');
// const specDiv = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента ' +
//     'документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью' +
//     ' стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю ' +
//     'таблицу стилей, а для тега добавить атрибут class или id с именем селектора.'
//
//
// const tagDiv = new CreateTag('<div>', specDiv, [atrDiv1,atrDiv2]);
// tagDiv.description();
//
// console.log(`-----------------------------------------------------------------------------------`);
// console.log(`-----------------------------------------------------------------------------------`);
//
// function CreateAtr(name, specification) {
//     this.name = name;
//     this.specification = specification;
//
//     this.description = function () {
//         console.log(this)
//     }
// }
//
//
// function CreateTag(name, specification, atr) {
//     this.name = name;
//     this.specification = specification;
//     this.atr = atr;
//
//     this.description = function () {
//         console.log(this)
//     }
// }
//
// const atrInput1 = new CreateAtr('border', 'Толщина рамки вокруг изображения.');
// const atrInput2 = new CreateAtr('alt', 'Альтернативный текст для кнопки с изображением.');
// const atrInput3 = new CreateAtr('list', 'Указывает на список вариантов, которые можно выбирать' +
//     ' при вводе текста.');
// const atrInput4 = new CreateAtr('pattern', 'Устанавливает шаблон ввода.');
// const specInput = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать ' +
//     'разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> ' +
//     'предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент ' +
//     '<input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные ' +
//     'пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, ' +
//     'то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских ' +
//     'приложений, например, скриптов на языке JavaScript.'
//
//
// const tagInput = new CreateTag('<input>', specInput, [atrInput1,atrInput2,atrInput3,atrInput4]);
// tagInput.description();
//
// console.log(`-----------------------------------------------------------------------------------`);
// console.log(`-----------------------------------------------------------------------------------`);
//
// function CreateAtr(name, specification) {
//     this.name = name;
//     this.specification = specification;
//
//     this.description = function () {
//         console.log(this)
//     }
// }
//
// function CreateTag(name, specification, atr) {
//     this.name = name;
//     this.specification = specification;
//     this.atr = atr;
//
//     this.description = function () {
//         console.log(this)
//     }
// }
//
//
// const atrH1 = new CreateAtr('<align>', 'Определяет выравнивание заголовка.');
// const specAtrH1 = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную ' +
//     'важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный ' +
//     'заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является ' +
//     'наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом ' +
//     'жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к ' +
//     'блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на' +
//     ' следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.'
//
// const tagH1 = new CreateTag('<H1>', specAtrH1, atrH1);
// tagH1.description();
//
// console.log(`-----------------------------------------------------------------------------------`);
// console.log(`-----------------------------------------------------------------------------------`);
//
// function CreateAtr(name, specification) {
//     this.name = name;
//     this.specification = specification;
//
//     this.description = function () {
//         console.log(this)
//     }
// }
//
// function CreateTag(name, specification, atr) {
//     this.name = name;
//     this.specification = specification;
//     this.atr = atr;
//
//     this.description = function () {
//         console.log(this)
//     }
// }
//
// const atrSpan1 = new CreateAtr('accesskey', 'Позволяет получить доступ к элементу с помощью' +
//     ' заданного сочетания клавиш.');
// const atrSpan2 = new CreateAtr('class', 'Определяет имя класса, которое позволяет связать тег' +
//     ' со стилевым оформлением.');
// const specSpan = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от ' +
//     'блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации' +
//     ' внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет ' +
//     'и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста.' +
//     'Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега ' +
//     'добавить атрибут class или id с именем селектора.';
//
//
// const tagSpan = new CreateTag('<span>', specSpan, [atrSpan1,atrSpan2]);
// tagSpan.description();
//
// console.log(`-----------------------------------------------------------------------------------`);
// console.log(`-----------------------------------------------------------------------------------`);
//
// function CreateAtr(name, specification) {
//     this.name = name;
//     this.specification = specification;
//
//     this.description = function () {
//         console.log(this);
//     }
// }
//
// function CreateTag(name, specification, atr) {
//     this.name = name;
//     this.specification = specification;
//     this.atr = atr;
//
//     this.description = function () {
//         console.log(this);
//     }
// }
//
// const atrForm1 = new CreateAtr('accept-charset', 'Устанавливает кодировку, в которой сервер может' +
//     ' принимать и обрабатывать данные.');
// const atrForm2 = new CreateAtr('action', 'Адрес программы или документа, который обрабатывает ' +
//     'данные формы.');
// const atrForm3 = new CreateAtr('autocomplete', 'Включает автозаполнение полей формы.');
//
// const specForm = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между' +
//     ' пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью' +
//     ' клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему' +
//     ' усмотрению.';
//
//
// const tagForm = new CreateTag('<form>', specForm, [atrForm1,atrForm2,atrForm3]);
// tagForm.description();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
























































