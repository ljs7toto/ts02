interface Work{
    goForWork():void;
    doWorking():void;
    goOut():void;
}

class Worker2 implements Work{
    // private name:string ="홍길동"; //여기서 밖에 사용안됨
    // name:string ="홍길동"; //기본 public
    protected name:string ="홍길동"; //자기 자식만 사용 가능함
    // constructor(name:string){
    //     this.name = name;
    // }
    goForWork():void{
        console.log("출근 중");
    }
    doWorking():void{
        console.log("일 중");
    }
    goOut():void{
        console.log("퇴근 중");
    }
}

class Developer extends Worker2{
    doWorking():void{
        console.log(this.name + "개발 중");
    }
}

class Corder extends Worker2{
    doWorking():void{
        console.log(this.name + "코딩 중");
    }
}

function doTest(w:Work){
    w.goForWork();
    w.doWorking();
    w.goOut();
}

let dev:Work = new Developer();
doTest(dev);
let cod:Work = new Corder();
doTest(cod);


