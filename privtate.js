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
var userList = new Array();
for (var i = 0; i < 5; i++) {
    addUserList(userList, i);
}
function addUserList(userList, num) {
    userList.push(num);
}
console.log(userList);
//나자신은 못바꾸지만, 나자신 내부의 있는 값은 바꿀수 있다.
//any로 들어감.
var testList = new Array();
testList.push(1);
testList.push("1");
testList.push(true);
//제너릭 블린 어레이 데이터 타입, 데이터 타입 선언을 사용하면서 부터 사용됨
var tList = new Array();
tList.push(true);
// tList.push("1"); //이건 오류가 남.
var tt = 3; // const를 쓸때는 꼭 값을 넣어야하고 이건 값을 못바꾼다. "상수"
var tt2 = 4; // |를 쓰면 여러 타입을 선언 가능
console.log(typeof tt2);
tt2 = "adsdfs";
console.log(typeof tt2);
// 쉽게 데이터타입 에러와 숫자 값을 동시에 표현할수 있게 한다.
var add = function (n1, n2) {
    if (typeof n1 != "number") {
        return "1숫자가 아닙니다.";
    }
    if (typeof n2 != "number") {
        return "2숫자가 아닙니다.";
    }
    return n1 + n2;
};
console.log(add(1, 2));
//# sourceMappingURL=privtate.js.map