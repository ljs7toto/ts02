enum Computer{Desktop, Laptop, Netbook}; //열거형 데이터 타입, 이름 그대로 데이터타입 됨

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

class EE2{
    name: string = "nam";
}
let ee:EE2 = new EE2();
console.log(ee);
