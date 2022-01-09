/*
Aslida 2 xil programming turi mavjud:
1) Functional programming (Hook based),
2) OOP (OBJECT ORIENTED PROGRAMMING) (Class based)
Har bir "Object" class yordamida tuziladi!
*/

//! constructor
// "Constructor" bu oddiy "Attributes" deyiladigan o`zgaruvchi qabul qilish uchun ishlatiladigan class Metodi!

//! this
// this bu kiritiladiga attributelar yaratilgan class uchun global ekanligini bildiradi!
// console.log(this); // 1) browserda window , 2) node.js(terminalda) {} global scope chiqaradi

// class concatWords {
//   constructor(str1, str2) {
//     this.str1 = str1;
//     this.str2 = str2;
//   }

//   getConcat() {
//     return this.str1 + " " + this.str2;
//   }

//   getSplit() {
//     return (this.str1 + this.str2).split("");
//   }
// }

// console.log(new concatWords("Salom", "Abduhalim").getConcat()); //! class chaqirishni 1-yo`li

//! class chqirishni 2- yo`li
// const joinedWords = new concatWords("abcdefghijkl", "mnopqrstuvwxyz");
// console.log(joinedWords.getSplit());

//! inheritance
// ota(parent) classdagi metodlarni bola(child) class da chaqirib ishlatish qobilyati.

// class cola {
//   constructor(str1, str2) {
//     this.str1 = str1;
//     this.str2 = str2;
//   }

//   getWaterBoiled() {
//     return "cola`s all water is boiled";
//   }
// }

// class fanta extends cola {
//   constructor(str1, str2) {
//     super(str1, str2);
//   }
// }

// const fantacha = new fanta("ob", "havo");
// console.log(fantacha.getWaterBoiled());

//! Encapsulation
/* 
"Encapsulation" bu ma`lumotni butunligi va xafsizligini ta`minlab turish uchun nitta ishni klientga ko`rsatmasdan amalga oshirish ya`ni 1 ishni Set(setter) bajarib natijani Get(getter) matodlari orqali chiqarish uchun. Setterda bajarilgan maxfiy ishni getter orqali shunchaki natijasini chiqarib berish 
*/

// class cola {
//   constructor(str1, str2) {
//     this.str1 = str1;
//     this.str2 = str2;
//   }

//   setWaterBoiled() {
//     return "it is info of 'set' method but you are receiving it from 'get' method using 'Encapsulation'";
//   }

//   getWaterBoiled() {
//     return this.setWaterBoiled();
//   }
// }

// const colacha = new cola("suv", "range");
// console.log(colacha.getWaterBoiled());

//! Abstraction
// Encapsulationga o`xshaydi lekin biron bir qiyin bo`lgan vazifani yoki processni klientga ko`rsatmay qilish

//!Polymorphism
// "Polymorphism" has two types "overriding" and "overloding"
/*
JavaScript does not support overloading. JavaScript supports overriding, so if you define two functions with the same name, the last one defined will override the previously defined version and every time a call will be made to the function, the last defined one will get executed
*/

class calc {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  setAddition() {
    return this.num1 + this.num2;
  }

  getAddition() {
    return this.setAddition();
  }
}

const calculator = new calc(2, 8);
console.log(
  `${calculator.num1} + ${calculator.num2} = ${calculator.getAddition()}`
);
