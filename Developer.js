var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Worker2 = /** @class */ (function () {
    function Worker2() {
        // private name:string ="홍길동"; //여기서 밖에 사용안됨
        // name:string ="홍길동"; //기본 public
        this.name = "홍길동"; //자기 자식만 사용 가능함
    }
    // constructor(name:string){
    //     this.name = name;
    // }
    Worker2.prototype.goForWork = function () {
        console.log("출근 중");
    };
    Worker2.prototype.doWorking = function () {
        console.log("일 중");
    };
    Worker2.prototype.goOut = function () {
        console.log("퇴근 중");
    };
    return Worker2;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.doWorking = function () {
        console.log(this.name + "개발 중");
    };
    return Developer;
}(Worker2));
var Corder = /** @class */ (function (_super) {
    __extends(Corder, _super);
    function Corder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Corder.prototype.doWorking = function () {
        console.log(this.name + "코딩 중");
    };
    return Corder;
}(Worker2));
function doTest(w) {
    w.goForWork();
    w.doWorking();
    w.goOut();
}
var dev = new Developer();
doTest(dev);
var cod = new Corder();
doTest(cod);
//# sourceMappingURL=Developer.js.map