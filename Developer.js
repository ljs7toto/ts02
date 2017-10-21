var Developer = /** @class */ (function () {
    function Developer() {
    }
    Developer.prototype.goForwork = function () {
        console.log("일하러 가자");
    };
    Developer.prototype.doWorking = function () {
        console.log("일하러");
    };
    Developer.prototype.goOut = function () {
        console.log("가자");
    };
    return Developer;
}());
var d = new Developer();
d.goForwork();
d.doWorking();
d.goOut();
//# sourceMappingURL=Developer.js.map