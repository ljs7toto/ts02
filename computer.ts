enum Computer{Desktop, Laptop, Netbook}; //열거형 데이터 타입. 데이터타입에 이름을 부여. 상수의 값을 눈으로 볼수 있게 

let cp:Computer = Computer.Laptop;
console.log(cp); 

let cp2:any;
cp2 = "adf";
cp2 = 1
cp2 = true;

class EE{
    
}

cp2 = new EE();


function examRetun():string{
    console.log( "examReturn 함수 호출");
    
    return "examReturn 함수 호출"; //return 은 두개가 있으면 안됨 if 문에서만 가능
}

function examVoid(): void { 
    console.log( "examVoid 함수 호출");
    //return "examVoid 함수 호출" void는 리턴은 있으면 안됨 리턴을 안하겠다는 이야기임
}

let a:string;
a = examRetun(); //변수에 넣어줄수 있는것
console.log(a);
examVoid();
// a = examVoid(); //void는 변수에 이렇게 못넣음 return 이 안되는것임


let testArr : Array<number> = [1,2,3];
console.log(testArr);

//enum 을 사용한 예시 
class EE2{
    name: string = "nam";
    pc : Computer;
    constructor(pc:Computer){
        this.pc = pc;
    }
    printInfo() {
        console.log(this.name + "님이 가지고 계시는 pc는 " + this.pc + "입니다");
        
    }
}
let ee:EE2 = new EE2(Computer.Laptop);
ee.printInfo();
// console.log(ee);

let str11 : string = "str";
let str22 : string = "str";
let str33 : String = new String("str"); //Object
let str44 : String = new String("str"); 

String.prototype.equals = function(str){
    if(typeof str =="object"){
        return str.toString()==this.toString(); //object가 갖고 있는 tostring
    }
}
console.log("str1==str2 : " + (str11==str22)); //true 
console.log("str1==str3 : " + (str11==str33)); //true 
console.log("str3==str4 : " + (str33==str44));  //true 
console.log("str1===str2 : " + (str11===str22));  //false
console.log("str1===str3 : " + (str11===str33)); //false
console.log("str3===str4 : " + (str33===str44)); //false 객체를 비교하는 순간 값을 비교하지 않음 
console.log("str2 equals str4 : " + str33.equals(str44));  //true 
console.log(str44.toString()); // 값 str 이 나옴 
console.log(str33.toString()); // 값 str 이 나옴 



