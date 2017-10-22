let num1 = 3;
let num2 = 5;
let str1 = "string";
let str2 = "test";
let numArr = [3, 5, 6];
let numArr2 = [3, 4, 5];
// console.log(num1);
// console.log(numArr);
let tp;
tp = ["1", 2];
let anyTest = "any";
anyTest = 3;
anyTest = true;
anyTest = new Number(3);
let anyArr = [1, 2, 3];
function setUser() {
    return "test";
}
function testObject() {
    return "abc";
}
var strTest = testObject();
console.log(strTest.charAt(1));
console.log(strTest.length);
console.log(strTest.substr(1));
console.log(strTest);
function testFunc(str, num) {
    console.log("str = " + str);
    console.log("num = " + num);
}
testFunc("문자열", 330);
function throwError() {
    throw new Error("nonono");
}
let AjaxUtil = function (ti) {
    this.print = function () {
        console.log(ti.str);
        console.log(ti.num);
    };
};
var test1 = { str: "홍길동", num: 30 };
var au = new AjaxUtil(test1);
au.print();
class Car {
    constructor(pCarName) {
        this.pCarName = pCarName;
        this.carName = pCarName;
    }
}
let hyundai = new Car("Sonata");
let pStr = "hyundai자동차중 제 차는 : ";
pStr += hyundai.carName;
console.log(pStr);
//# sourceMappingURL=ts_data.js.map