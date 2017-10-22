class Worker2 {
    constructor() {
        // private name:string ="홍길동"; //여기서 밖에 사용안됨
        // name:string ="홍길동"; //기본 public
        this.name = "홍길동"; //자기 자식만 사용 가능함
    }
    // constructor(name:string){
    //     this.name = name;
    // }
    goForWork() {
        console.log("출근 중");
    }
    doWorking() {
        console.log("일 중");
    }
    goOut() {
        console.log("퇴근 중");
    }
}
class Developer extends Worker2 {
    doWorking() {
        console.log(this.name + "개발 중");
    }
}
class Corder extends Worker2 {
    doWorking() {
        console.log(this.name + "코딩 중");
    }
}
function doTest(w) {
    w.goForWork();
    w.doWorking();
    w.goOut();
}
let dev = new Developer();
doTest(dev);
let cod = new Corder();
doTest(cod);
//# sourceMappingURL=Developer.js.map