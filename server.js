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

class concatWords {
  constructor(str1, str2) {
    this.str1 = str1;
    this.str2 = str2;
  }

  getConcat() {
    return this.str1 + " " + this.str2;
  }

  getSplit() {
    return (this.str1 + this.str2).split("");
  }
}

// console.log(new concatWords("Salom", "Abduhalim").getConcat()); //! class chaqirishni 1-yo`li

//! class chqirishni 2- yo`li
const joinedWords = new concatWords("abcdefghijkl", "mnopqrstuvwxyz");
console.log(joinedWords.getSplit());
