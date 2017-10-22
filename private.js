// class UserDTO{  //배열변수의 확장
//     private name : string;
//     private age : number;
//     public address: string;
//     setName(name:string):void{
//         this.name = name;
//     }
//     getName():string{
//         return this.name;
//     }
// }
// let hong:UserDTO = new UserDTO();
// // hong.name ="홍길동" //이건 안됨
// hong.address = "서울시 강동구"
// hong.setName("홍길동");
// console.log(hong.getName());
// let userList = new Array();
// for (let i = 0; i < 5; i++) {
//     addUserList(userList, i);
// }
// function addUserList(userList, num) {
//     userList.push(num);
// }
// console.log(userList);
// //나자신은 못바꾸지만, 나자신 내부의 있는 값은 바꿀수 있다.
// //any로 들어감.
// let testList = new Array();
// testList.push(1);
// testList.push("1");
// testList.push(true);
// //제너릭 블린 어레이 데이터 타입, 데이터 타입 선언을 사용하면서 부터 사용됨
// let tList = new Array();
// tList.push(true);
// // tList.push("1"); //이건 오류가 남.
// const tt = 3; // const를 쓸때는 꼭 값을 넣어야하고 이건 값을 못바꾼다. "상수"
// let tt2 = 4; // |를 쓰면 여러 타입을 선언 가능
// console.log(typeof tt2);
// tt2 = "adsdfs";
// console.log(typeof tt2);
// // 쉽게 데이터타입 에러와 숫자 값을 동시에 표현할수 있게 한다.
// let add = function (n1, n2) {
//     if (typeof n1 != "number") {
//         return "1숫자가 아닙니다.";
//     }
//     if (typeof n2 != "number") {
//         return "3숫자가 아닙니다.";
//     }
//     return n1 + n2;
// };
// console.log(add(1, 2));
// class Exam {
// }
// let examList = new Array();
// let e = new Exam();
// e.name = "e1"; // public 외에는 사용못함. defalut가 퍼블릭
// examList.push(e);
// e = new Exam();
// e.name = "e2";
// examList.push(e);
// console.log(examList);
// //이거 안됨 나자신 바꾸는건 안됨.
// function initList(examList) {
//     examList = null;
// }
// initList(examList);
// class Lotto {
//     constructor() {
//         this.numbers = new Array(); //초기화
//         this.makeNumbers(); //private으로 만들고 접근하지 못하게
//     }
//     makeNumbers() {
//         // this.numbers = new Array<number>();
//         while (this.numbers.length < 6) {
//             let num = Math.floor(Math.random() * 20) + 1;
//             // if(this.numbers.indexOf(num)!=-1){
//             //     continue;
//             // }
//             if (this.valiNumbers(num)) {
//                 continue;
//             }
//             this.numbers.push(num);
//         }
//     }
//     //따로 중복제거 부분 로직을 빼준다. 나눠서 코딩하면 유지보수에 좋다.
//     valiNumbers(num) {
//         return this.numbers.indexOf(num) != -1;
//     }
//     getNumbers() {
//         return this.numbers;
//     }
// }
// let lot = new Lotto();
// // lot.makeNumbers();
// console.log(lot.getNumbers());
// // lot.makeNumbers();
// // console.log(lot.getNumbers());
// let arrs = [new Lotto(), new Lotto(), new Lotto(), new Lotto(), new Lotto()];
// let arrs2 = Array();
// arrs2.push(new Lotto());
// //
// for (let i in arrs) {
//     console.log(arrs[i]);
// }
// //순서를 가지고 있는 변수일때만 가능
// for (let i = 0, max = arrs.length; i < max; i++) {
//     console.log(arrs[i]);
// }
// let mn = new Lotto();
// let lot1 = new Lotto();
// mn = lot1;
// // lot1 = nm; 이건 MakeNumbers가 더 상위이기때문에 이렇게는 안됨
// console.log("test");
// let test2 = new Set(); //value, key
// test2.add("1");
// test2.add("1"); //덮어씌워서 값은 1 하나밖에 안나옴
// for (let i in test2) {
//     console.log(i);
// }
// for (let ttt of test2) {
//     console.log(ttt);
// }
let userList = new Array();
for (let i = 0; i < 5; i++) {
    addUserList(userList, i);
}
function addUserList(userList, num) {
    userList.push(num);
}
console.log(userList);
let add = function (n1, n2) {
    if (typeof n1 != "number") {
        return "1숫자가 아닙니다.";
    }
    if (typeof n2 != "number") {
        return "3숫자가 아닙니다.";
    }
    return n1 + n2;
};
console.log(add(1, "2"));
class Exam {
}
let examList = new Array();
let e = new Exam();
e.name = "e1";
examList.push(e);
e = new Exam();
e.name = "e2";
examList.push(e);
console.log(examList);
class Lotto {
    constructor() {
        this.numbers = new Array();
        this.makeNumbers();
    }
    makeNumbers() {
        while (this.numbers.length < 6) {
            let num = Math.floor(Math.random() * 20) + 1;
            if (this.valiNumbers(num)) {
                continue;
            }
            this.numbers.push(num);
        }
    }
    valiNumbers(num) {
        return this.numbers.indexOf(num) != -1;
    }
    getNumbers() {
        return this.numbers;
    }
}
let lot = new Lotto();
console.log(lot.getNumbers());
let arrs = [new Lotto(), new Lotto(), new Lotto(), new Lotto(), new Lotto()];
let arrs2 = Array();
arrs2.push(new Lotto());
for (let i in arrs) {
    console.log(arrs[i]);
}
for (let i = 0, max = arrs.length; i < max; i++) {
    console.log(arrs[i]);
}
let mn = new Lotto();
let lot1 = new Lotto();
mn = lot1;
console.log("test");
let test2 = new Set();
test2.add("1");
test2.add("1");
for (let i in test) {
    console.log(i);
}
for (let ttt of test2) {
    console.log(ttt);
}
//# sourceMappingURL=private.js.map