class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log("이름 : " + this.name);
        console.log("나이 : " + this.age);
    }
    printName() {
        console.log("이름: " + this.name);
    }
}
function printSomething(a) {
    a.printInfo();
}
let dd = new Cat("동동이", 4);
dd.printInfo();
dd.printName();
printSomething(dd);
let d2 = new Cat("사랑이", 3);
class Bird {
    constructor(kind) {
        this.kind = kind;
    }
    printInfo() {
        console.log("이 새의 종류는 " + this.kind);
    }
}
class Chicken extends Bird {
    // constructor(kind:string){
    //     super(kind);//나는 this 생성자, 아빠는 super 생성자
    // }
    constructor() {
        super("닭"); //나는 this 생성자, 아빠는 super 생성자
    }
    printInfo() {
        super.printInfo(); //아빠의 printInfo 까지 불러온다. 
        console.log("내종류? 당연하게");
        console.log("test");
    }
}
class Egg extends Chicken {
}
// let c:Bird = new Chicken("닭"); //c:Animal을 넣어도 됨 
let c = new Chicken();
c.printInfo();
console.log(typeof c);
//# sourceMappingURL=Animal.js.map