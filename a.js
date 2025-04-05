// 1. Создайте класс Car, воспользуйтесь конструктором для задания модели и года выпуска
// автомобиля. Добавьте метод start, который возвращает строку: Машина {model} завелась.
// const car = new Car("Toyota", 2020);
// console.log(car.start()); // Машина Toyota завелась.

// class Car{
//     model;
//     year;

//     constructor(model, year){
//         this.model = model;
//         this.year = year;
//     }
//     start = () =>{
//         return `Машина ${this.model} завелась`
//     }
// }

// const car = new Car("Toyota", 2020);
// console.log(car.start());

// 2. Создайте класс Rectangle, в котором с помощью конструктора передаются значения ширины и
// высоты. Добавьте метод getArea, возвращающий площадь прямоугольника (произведение
// ширины на высоту).
// const rect = new Rectangle(5, 10);
// console.log(rect.getArea()); // 50

// class Rectangle{
//     width;
//     height;

//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//         this.getArea()
//     }

//     getArea = () =>{
//         console.log(this.width * this.height); 
//     }
// }

// const rect = new Rectangle(5, 10);


// class Rectangle{
//     getArea = (width, height) =>{
//         console.log(width * height); 
//     }
// }

// const rect = new Rectangle();
// rect.getArea(5, 10);

// 3. Создайте класс User с конструктором, принимающим имя и email пользователя. Реализуйте метод
// changeEmail, который обновляет email, и метод getEmail, возвращающий текущий email.
// const user = new User("Иван", "ivan@example.com");
// user.changeEmail("new@example.com");
// console.log(user.getEmail()); // new@example.com

// class User{
//     name;
//     email;
//     newEmail;
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }

//     changeEmail = (newEmail) =>{
//         this.email = newEmail;
//     }

//     getEmail = () =>{
//         return this.email;
//     }
// }

// const user = new User("Иван", "ivan@example.com");
// user.changeEmail("new@example.com");
// console.log(user.getEmail());


// 1. Создайте класс Student, воспользуйтесь конструктором для задания имени и возраста студента.
// Добавьте метод isAdult, который возвращает true, если возраст больше или равен 18, иначе — false.
// const s1 = new Student("Олег", 20);
// const s2 = new Student("Маша", 16);
// console.log(s1.isAdult()); // true
// console.log(s2.isAdult()); // false

// class Student{
//     name;
//     age;

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     isAdult = () => this.age >= 18
// }

// const s1 = new Student("Олег", 20);
// const s2 = new Student("Маша", 16);
// console.log(s1.isAdult());
// console.log(s2.isAdult());

// 2. Создайте класс Counter, при этом в конструкторе не требуется передавать параметры.
// Инициализируйте внутреннее свойство count со значением 0. Реализуйте методы increment
// (увеличивает счётчик на 1) и getCount (возвращает текущее значение счётчика).
// const c = new Counter();
// c.increment();
// c.increment();
// console.log(c.getCount()); // 2

// class Counter{
//     count = 0;

//     increment = () =>{
//         this.count++;
//     }

//     getCount = () =>{
//         return this.count;
//     }
// }

// const c = new Counter();
// c.increment();
// c.increment();
// console.log(c.getCount());


// 1. Создайте класс TodoList, инициализируйте в конструкторе пустой массив tasks. Реализуйте метод
// addTask(task) для добавления новой задачи в массив, а также метод showTasks(), возвращающий
// текущий список задач.
// const list = new TodoList();
// list.addTask("Купить молоко");
// list.addTask("Позвонить другу");
// console.log(list.showTasks()); // ["Купить молоко", "Позвонить другу"]

// class TodoList{
//     tasks;

//     constructor(){
//         this.tasks = []
//     }

//     addTask = (task) =>{
//         this.tasks.push(task);
//     }

//     showTasks = () =>{
//         return this.tasks
//     }
// }

// const list = new TodoList();
// list.addTask("Купить молоко");
// list.addTask("Позвонить другу");
// console.log(list.showTasks());

// 2. Создайте класс BankAccount, в котором конструктор принимает начальный баланс. Реализуйте
// методы deposit(amount) (увеличивает баланс), withdraw(amount) (уменьшает, если достаточно
// средств), и getBalance() (возвращает текущий баланс).
// const acc = new BankAccount(100);
// acc.deposit(50);
// acc.withdraw(30);
// console.log(acc.getBalance()); // 120

// class BankAccount{
//     begin;
//     constructor(begin){
//         this.begin = begin;
//     }

//     deposit = (amount) =>{
//         this.begin += amount;
//     }

//     withdraw = (amount) =>{
//         this.begin-= amount;
//     }

//     getBalance = () =>{
//         return this.begin;
//     }
// }

// const acc = new BankAccount(100);
// acc.deposit(50);
// acc.withdraw(30);
// console.log(acc.getBalance()); // 120


// 1. Создайте класс Shop, в котором с помощью конструктора задается массив товаров products.
// Каждый товар должен быть объектом с полями name (название) и price (цена). Реализуйте метод
// getExpensiveProducts(minPrice), который возвращает массив товаров, цена которых больше либо
// равна значению minPrice. Для фильтрации воспользуйтесь методом filter. Также реализуйте метод
// getProductNames(), который возвращает массив названий всех товаров (используйте метод map).
// const shop = new Shop([
//  { name: "Хлеб", price: 40 },
//  { name: "Молоко", price: 60 },
//  { name: "Сыр", price: 150 }
// ]);
// console.log(shop.getExpensiveProducts(50));
// // [{ name: "Молоко", price: 60 }, { name: "Сыр", price: 150 }]
// console.log(shop.getProductNames());
// // ["Хлеб", "Молоко", "Сыр"]

// class Shop {
//     products;
//     constructor(products) {
//         this.products = products;
//     }

//     getExpensiveProducts = (minPrice) =>{
//         return this.products.filter((elem) => elem.price >= minPrice ? true : false)
//     }

//     getProductNames = () =>{
//         return this.products.map((elem) =>{
//             return elem = elem.name;
//         })
//     }
// }

// const shop = new Shop([
//     { name: "Хлеб", price: 40 },
//     { name: "Молоко", price: 60 },
//     { name: "Сыр", price: 150 }
// ]);
// console.log(shop.getExpensiveProducts(50));
// // [{ name: "Молоко", price: 60 }, { name: "Сыр", price: 150 }]
// console.log(shop.getProductNames());
// // ["Хлеб", "Молоко", "Сыр"]












// 1. Создайте класс Rectangle, который будет иметь свойства width и height. Напишите метод getArea(),
// который возвращает площадь прямоугольника.
// Входные: Rectangle(5, 10) → Результат: 50
// Входные: Rectangle(3, 7) → Результат: 21
// Входные: Rectangle(6, 9) → Результат: 54

// class Rectangle{
//     width;
//     height;

//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     getArea = () =>{
//         return this.width * this.height;
//     }
// }

// const res = new Rectangle(5, 10);
// console.log(res.getArea());

// 2. Создайте класс Student, который будет содержать имя, возраст и массив оценок. Напишите метод
// getAverageGrade(), который возвращает средний балл студента.
// Входные: Student("Alice", 20, [5, 4, 5, 3, 4]) → Результат: "Alice (20) имеет средний балл 4.2"
// Входные: Student("Bob", 22, [3, 2, 3, 4, 3]) → Результат: "Bob (22) имеет средний балл 3.0"
// Входные: Student("John", 19, [4, 4, 4, 5, 5]) → Результат: "John (19) имеет средний балл 4.4"

// class Student{
//     name;
//     age;
//     marks;

//     constructor(name, age, marks){
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }

//     getAverageGrade = () =>{
//         const average = this.marks.reduce((sum, elem) =>{
//             return sum + elem;
//         }, 0);
//         return `${this.name} (${this.age}) имеет средний балл ${average / this.marks.length}`
//     }
// }

// const res = new Student("Alice", 20, [5, 4, 5, 3, 4]);
// console.log(res.getAverageGrade());

// 3. Создайте класс Car с параметрами make, model, year. Напишите метод getCarAge(currentYear),
// который возвращает возраст машины.
// Входные: Car("Toyota", "Camry", 2015) → Результат: Возраст машины: 9 лет
// Входные: Car("Honda", "Civic", 2020) → Результат: Возраст машины: 4 года
// Входные: Car("Ford", "Mustang", 1967) → Результат: Возраст машины: 57 лет

// class Car{
//     make;
//     model;
//     year;

//     constructor(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     getCarAge = () =>{
//         return `Возраст машины: ${2025 - this.year}`
//     }
// }

// const res = new Car("Toyota", "Camry", 2015)
// console.log(res.getCarAge());

// 4. Создайте класс StringRepository, который имеет статичный массив words ["apple", "apricot", "lemon",
// "mango", "nectarine", "banana", "kiwi", "plum"]. Наследуйте от него класс FilteredWords, добавив метод
// getWordsByLength(length), который возвращает только те слова, длина которых равна заданному
// значению.
// Входные:
// const repo = new FilteredWords();
// repo.getWordsByLength(5);
// → Результат: ["apple", "lemon", "mango"]

// class StringRepository{
//     words = ["apple", "apricot", "lemon", "mango", "nectarine", "banana", "kiwi", "plum"];
// }

// class FilteredWords extends StringRepository{
//     getWordsByLength = (length) =>{
//         return this.words.filter((elem) => elem.length == length)
//     }
// }

// const res = new FilteredWords();
// console.log(res.getWordsByLength(5));

// 5. Создайте класс NumberGenerator с методом generateNumbers(size), который возвращает массив
// чисел от 1 до size. Наследуйте от него класс EvenNumbers, добавив метод getEvenNumbers(size),
// который вызывает generateNumbers(size) и фильтрует только четные числа.
// Входные: new EvenNumbers().getEvenNumbers(6) → Результат: [2, 4, 6]
// Входные: new EvenNumbers().getEvenNumbers(10) → Результат: [2, 4, 6, 8, 10]
// Входные: new EvenNumbers().getEvenNumbers(3) → Результат: [2]

// class NumberGenerator{
//     arr = []
//     generateNumbers = (size) =>{
//         for(let i = 0; i < size; i++){
//             this.arr.push(Math.floor(Math.random()*10))
//         }
//         return this.arr
//     }
// }

// class EvenNumbers extends NumberGenerator{
//     getEvenNumbers = (size) =>{
//         const arr = this.generateNumbers(size);
//         return arr.filter((elem) => elem % 2 == 0)
//     }
// }
// const res = new EvenNumbers();
// console.log(res.getEvenNumbers(6));

// 6. Создайте класс SentenceRepository, который имеет массив строк sentences. Наследуйте от него
// класс LongestSentence, добавив метод getLongestSentence(), который возвращает самую длинную
// строку по количеству символов.
// Входные:
// const repo = new LongestSentence(["Hello world", "This is a longer sentence", "Short"]);
// repo.getLongestSentence();
// → Результат: "This is a longer sentence"
// Входные:
// const repo = new LongestSentence(["JavaScript is fun", "Coding", "Learning new things"]);
// repo.getLongestSentence();
// → Результат: " Learning new things"
// Входные:
// const repo = new LongestSentence(["Small", "Medium sized", "A sentence that is quite long"]);
// repo.getLongestSentence();
// → Результат: "A sentence that is quite long"

// class SentenceRepository{
//     constructor(sentences){
//         this.sentences = sentences;
//     }
// }

// class LongestSentence extends SentenceRepository{
//     getLongestSentence = () =>{
//         let maxInd = 0;
//         let max = this.sentences[0];
//         for(let i = 0; i < this.sentences.length; i++){
//             if(this.sentences[i] > max){
//                 max = this.sentences[i];
//                 maxInd = i;
//             }
//         }
//         return console.log(this.sentences[maxInd])
//     }
// }

// const repo = new LongestSentence(["Hello world", "This is a longer sentence", "Short"]);
// repo.getLongestSentence();

// 7. Создайте класс Person с атрибутом name. Наследуйте от него класс Employee, добавив атрибуты
// position и monthly_salary. Реализуйте метод getAnnualSalary(), возвращающий годовую зарплату.
// Входные: Employee("Alice", "Developer", 5000) → Результат: 60000
// Входные: Employee("Bob", "Manager", 7000) → Результат: 84000
// Входные: Employee("Charlie", "Designer", 4000) → Результат: 48000

// class Person{
//     name;
// }

// class Employee extends Person{
//     position;
//     monthly_salary;

//     getAnnualSalary = () =>{
//         return this.monthly_salary * 12;
//     }
// }
// const res = new Employee();
// res.name = "Alice";
// res.position = "Developer";
// res.monthly_salary = 5000;
// console.log(res.getAnnualSalary());

// 8. Создайте класс Vehicle с атрибутом speed. На основе этого класса создайте класс Car, добавив
// атрибут brand и метод getInfo(), который выводит информацию о машине в формате "Brand:
// <brand>, Speed: <speed>".
// Входные: Car("Toyota", 120).getInfo() → Результат: "Brand: Toyota, Speed: 120"
// Входные: Car("Ford", 150).getInfo() → Результат: "Brand: Ford, Speed: 150"
// Входные: Car("BMW", 180).getInfo() → Результат: "Brand: BMW, Speed: 180"

// class Vehicle{
//     speed;
// }

// class Car extends Vehicle{
//     brand;
//     getInfo = () =>{
//         return `Brand: ${this.brand}, Speed: ${this.speed}`
//     }
// }

// const res = new Car();
// res.brand = "Toyota";
// res.speed = 120;
// console.log(res.getInfo());

// 9. Создайте класс DataGenerator с полем size и методом generateArray(), который возвращает массив
// чисел от 1 до size. Наследуйте от него класс SquareArray, добавив метод getSquareArray(), который
// вызывает generateArray() и возвращает массив, где каждый элемент возведен в квадрат.
// Входные: SquareArray(3).getSquareArray() → Результат: [1, 4, 9]
// Входные: SquareArray(5).getSquareArray() → Результат: [1, 4, 9, 16, 25]
// Входные: SquareArray(2).getSquareArray() → Результат: [1, 4]

// class DataGenerator{
//     size;

//     generateArray = () =>{
//         const arr = [];
//         for(let i = 0; i < this.size; i++){
//             arr.push(Math.floor(Math.random()*10));
//         }
//         console.log(arr);
//         return arr;
//     }
// }

// class SquareArray extends DataGenerator{
//     getSquareArray = () => this.generateArray().map((elem) => elem * elem)
// }

// const res = new SquareArray();
// res.size = 5;
// console.log(res.getSquareArray());























































































// 1. Реализуйте класс Singer, который будет иметь следующие свойства: name, surname. Также класс
// должен иметь метод getAutograph, который будет выводить “{name} {surname), с наилучшими
// пожеланиями”.

// class Singer{
//     constructor(name,surname){
//         this.name = name;
//         this.surname = surname;
//     }
//     getAutograph = () =>{
//     return `${this.name} ${this.surname}, с наилучшими пожеланиями`
//     }
// }

// const sing = new Singer('Ilya', 'Tolstenkov')
// console.log(sing.getAutograph())

// 2. Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел, разность,
// произведение, частное. 2 числа передаются в класс, далее вызываеются соответствующие функции.
// Добавить проверки на ввод

// class Calculator{
//     constructor(a,b){
//         this.a = a;
//         this.b = b;
//     }
//     sum = () =>{
//         return this.a + this.b
//     }
//     raz = () =>{
//         return this.a - this.b
//     }
//     proiz = () =>{
//         return this.a * this.b
//     }
//     del = () =>{
//         if(this.b != 0){
//             return this.a / this.b
//         }
//         else{
//             return 'Ошибка'
//         }
//     }
// }

// const calc = new Calculator(3,4);
// console.log(calc.sum(), calc.raz(), calc.proiz(), calc.del())

// 3. Реализуйте класс WordString, который будет иметь следующие методы: метод reverseString,
// переворачивающий строку, метод upperFirst, возвращающий строку, где первая буква заглавная и
// метод upperEvery, который делает заглавной первую букву каждого слова этой строки.

// class WordString{
//     constructor(str){
//         this.str = str;
//     }
//     reverseString = () =>{
//         return this.str.split('').reverse().join('');
//     }
//     upperFirst = () =>{
//         return this.str[0].toUpperCase() + this.str.slice(1,this.str.length);
//     }
//     upperEvery = () =>{
//         const arr = this.str.split(' ');
//         return arr.map((elem) => elem[0].toUpperCase() + elem.slice(1, elem.length)).join(' ')
//     }
// }

// const word = new WordString("allo privet fdgdfg");
// console.log(word.reverseString(), word.upperFirst(), word.upperEvery());

// 4. Реализуйте класс MathСalculation. В него передается число n – количество элементов массива. На
// основании числа формируется динамический массив из n элементов внутри класса. Создать
// функцию для подсчета всех четных чисел массива. Добавить проверки на ввод

// class MathСalculation{
//     constructor(n){
//         if(isNaN(n)) return 'Ошибка';
//         this.n = n;
//         this.arr = [];
//     }
//     createArray () {
//         for(let i = 0; i < this.n; i++){
//             this.arr.push(Math.floor(Math.random()*10));
//         }
//     }
//     calculate = () =>{
//         this.createArray()
//         return this.arr.reduce((sum, elem) =>{
//             return elem % 2 == 0 ? sum + elem : sum
//         }, 0)
//     }
// }

// const math = new MathСalculation(10);
// console.log(math.calculate())

// 5. Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем замены букв
// исходного слова или фразы). Создать функцию для вывода ряда true, если слова являются
// анаграммами. Добавить проверки на ввод

// class Anagram{
//     constructor(word1, word2){
//         if(!isNaN(word1) || !isNaN(word2)) return 'Ошибка';
//         this.word1 = word1.toLowerCase();
//         this.word2 = word2.toLowerCase();
//     }
//     checkAnagram = () =>{
//         if(this.word1.length != this.word2.length) return false;
//         if(this.word1 === this.word2) return false;
//         const sorted1 = this.word1.split('').sort().join('');
//         const sorted2 = this.word2.split('').sort().join('');
//         return sorted1 == sorted2
//     }
// }

// const anag = new Anagram('Футболист', 'утфболист');
// console.log(anag.checkAnagram())

// 6. Реализуйте класс, который находит полное число метров по заданному числу сантиметров.
// Добавьте проверку на ввод только чисел.
// Входные: 345 → Результат: 3 метров
// Входные: 100 → Результат: 1 метр
// Входные: 99 → Результат: 0 метров
// Входные: 750 → Результат: 7 метров
// Входные: 10 → Результат: 0 метров
// Входные: hi → Результат: Вы ввели не число!

// class CalcMeter{
//     calculate = (santim) =>{
//         if(isNaN(santim)) return 'Вы ввели не число'
//         else if (Math.floor(santim / 100) % 10 == 1) return `${Math.floor(santim / 100)} метр`
//         else if (Math.floor(santim / 100) % 10 == 2 || Math.floor(santim / 100) % 10 == 3 || Math.floor(santim / 100) % 10 == 4) return `${Math.floor(santim / 100)} метра`
//         return `${Math.floor(santim / 100)} метров`
//     }
// }
// const calc = new CalcMeter();
// console.log(calc.calculate(245));

// 7. Пользователь вводит три числа: a, b и c. Напишите класс, которая определяет, является ли тройка
// чисел сторонами треугольника. Для этого следует проверить следующие условия:
// 1. Сумма двух сторон должна быть больше третьей стороны. (a + b > c, a + c > b, b + c > a)
// 2. Если это так, то далее определить, какой тип треугольника можно построить:
// • Если все три стороны равны, выведите Равносторонний треугольник.
// • Если две стороны равны, выведите Равнобедренный треугольник.
// • Если все три стороны разные, выведите Разносторонний треугольник.
// 3. Если треугольник не существует (условие не выполняется), выведите Треугольник не
// существует.
// Добавьте проверку на ввод только чисел.
// Входные: 5, 5, 5 → Результат: Равносторонний треугольник
// Входные: 3, 4, 5 → Результат: Разносторонний треугольник
// Входные: 6, 6, 10 → Результат: Равнобедренный треугольник
// Входные: 1, 2, 3 → Результат: Треугольник не существует
// Входные: 10, 15, 25 → Результат: Треугольник не существует
// Входные: 7, 7, 14 → Результат: Треугольник не существует

// class Triangl{
//     isTrue = (a, b, c) =>{
//         if(a + b > c && a + c > b && b + c > a){
//             if(a == b && a == c) return 'Равносторонний треугольник';
//             else if(a == b || a == c || b == c) return 'Равнобедренный треугольник';
//             return 'Разносторонний треугольник'
//         }
//         return 'Треугольник не существует'
//     }
// }
// const a = 1;
// const b = 2;
// const c = 3;

// const check = new Triangl()
// console.log(check.isTrue(a,b,c));

// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает строку и проверяет,
// является ли она корректным емейлом или нет. Если является - возвращает true, если не является -
// то false.

// class Validator{
//     isEmail = (str) =>{
//         return /^[\w\.]+@[\w]+\.[\w]{1,6}$/gm.test(str);
//     }
// }
// const check = new Validator();
// console.log(check.isEmail('tolstenkov.ilya@mail.ru'));

// 9. Реализуйте класс для пересчета временного интервала, заданного в минутах, в величину,
// выраженную в часах и минутах.
// Входные: 150 минут → Результат: 2 часа 30 минут
// Входные: 240 минут → Результат: 4 часа 0 минут

// class Interval {
//     calc = (minutes) =>{
//         const hours = Math.floor(minutes / 60);
//         const min = minutes % 60;
//         if(hours == 1) return `${hours} час ${min} минут`
//         if(hours > 1 && hours < 5) return `${hours} часа ${min} минут`
//         return `${hours} часов ${min} минут`
//     }
// }
// const inter = new Interval();
// console.log(inter.calc(250));