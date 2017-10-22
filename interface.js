class Robot {
    constructor() {
        //하나의 변수와 두개의 함수
        this.speed = 30; //변수선언
    }
    run() {
        return "로봇이 " + this.speed + " 정도로 뜁니다.";
    }
    setSpeed(speed) {
        //void는 데이터를 타입을 절대 리턴하지 않음 
        this.speed = speed;
    }
}
class Person {
    constructor() {
        //하나의 변수와 두개의 함수
        this.speed = 30; //변수선언
    }
    run() {
        return this.speed + "정도로 뜁니다.";
    }
    setSpeed(speed) {
        //void는 데이터를 타입을 절대 리턴하지 않음 
        this.speed = speed;
    }
}
function test(vari) {
    console.log(vari.run());
    // console.log(vari.printAddress());
}
let p = new Person(); //데이터 타입 person 또는 action으로도 가능 함 하지만 Action 있는 값만 사용가능함
p.setSpeed(50); //getset DTO
test(p);
let str4 = p.run(); //string이라는 타입을 리턴함
console.log(str4);
let r = new Robot();
r.setSpeed(1000);
str4 = r.run();
console.log(str4);
//r=p; 두개의 데이터 타입이 같기 때문에
// console.log(r=p);
// Action 이라는 데이터 타입을 공통으로 사용했기때문에 괜츈
//# sourceMappingURL=interface.js.map