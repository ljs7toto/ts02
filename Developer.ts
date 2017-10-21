interface Work{
    goForwork():void;
    doWorking():void;
    goOut():void;
}

class Developer implements Work{
    goForwork():void{
        console.log("일하러 가자");
    }

    doWorking():void{
        console.log("일하러");
    }
    
    goOut():void{
        console.log("가자");
    }
}

let d = new Developer();
d.goForwork();
d.doWorking();
d.goOut();

