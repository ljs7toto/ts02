var UserDTO = /** @class */ (function () {
    function UserDTO() {
    }
    UserDTO.prototype.setName = function (name) {
        this.name = name;
    };
    UserDTO.prototype.getName = function () {
        return this.name;
    };
    return UserDTO;
}());
var hong = new UserDTO();
// hong.name ="홍길동" //이건 안됨
hong.setName("홍길동");
console.log(hong.getName());
hong.address = "서울시 강동구";
//# sourceMappingURL=privtate.js.map