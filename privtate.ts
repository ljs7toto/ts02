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


let userList:Array<number> = new Array();

for(let i:number = 0;i<5;i++){
    addUserList(userList,i);
}

function addUserList(userList:Array<number>,num:number){
    userList.push(num)
}

console.log(userList);

//나자신은 못바꾸지만, 나자신 내부의 있는 값은 바꿀수 있다.

//any로 들어감.
let testList = new Array(); 
testList.push(1);
testList.push("1");
testList.push(true);

//제너릭 블린 어레이 데이터 타입, 데이터 타입 선언을 사용하면서 부터 사용됨
let tList:Array<boolean> = new Array<boolean>();
tList.push(true);
// tList.push("1"); //이건 오류가 남.

const tt:number = 3; // const를 쓸때는 꼭 값을 넣어야하고 이건 값을 못바꾼다. "상수"

let tt2: number|string = 4; // |를 쓰면 여러 타입을 선언 가능
console.log(typeof tt2);
tt2 = "adsdfs" 
console.log(typeof tt2);


// 쉽게 데이터타입 에러와 숫자 값을 동시에 표현할수 있게 한다.
let add = function(n1:number|string, n2:number|string):number|string{
    if(typeof n1 != "number") {return "1숫자가 아닙니다.";
    }
    if(typeof n2 != "number") {return "3숫자가 아닙니다.";
    }
    return n1 + n2;
}

console.log(add(1,2));



class Exam{
    public name:string;
}

let examList: Array<Exam> = new Array<Exam>();

let e:Exam = new Exam();
e.name = "e1"; // public 외에는 사용못함. defalut가 퍼블릭
examList.push(e);

e = new Exam();
e.name = "e2";
examList.push(e);

console.log(examList);

//이거 안됨 나자신 바꾸는건 안됨.
function initList(examList:Array<Exam>):void{
    examList = null;
}
initList(examList);


class Lotto{
    private numbers:Array<number>;
    constructor(){
        this.numbers = new Array<number>();
    }
    public makeNumbers():void{
        while(this.numbers.length<6){
        let num:number =
        Math.floor(Math.random()*20)+1;
        if(this.numbers.indexOf(num)!=-1){
            continue;
        }
        this.numbers.push(num);
        }
    }
    public getNumbers():Array<number>{
        return this.numbers;
    }
}

let lot:Lotto = new Lotto();
lot.makeNumbers();
console.log(lot.getNumbers());
