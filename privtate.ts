class UserDTO{  //배열변수의 확장
    private name : string;
    private age : number;
    public address: string;
    setName(name:string):void{
        this.name = name;
    }
    getName():string{
        return this.name;
    }
}

let hong:UserDTO = new UserDTO();
// hong.name ="홍길동" //이건 안됨
hong.address = "서울시 강동구"

hong.setName("홍길동");
console.log(hong.getName());