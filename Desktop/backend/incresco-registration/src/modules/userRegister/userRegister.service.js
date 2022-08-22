"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserRegisterService = void 0;
var common_1 = require("@nestjs/common");
var UserRegisterService = /** @class */ (function () {
    function UserRegisterService() {
    }
    UserRegisterService.prototype.getInput = function (param) {
        return "Role: ".concat(param);
    };
    UserRegisterService.prototype.getInput2 = function (param) {
        return "You have entered the role: ".concat(param.jobProfile);
    };
    UserRegisterService.prototype.createUser = function () {
        return "Registered Successfully.";
    };
    UserRegisterService.prototype.createUser2 = function () {
        return "Your details have been submitted successfully.";
    };
    UserRegisterService = __decorate([
        (0, common_1.Injectable)()
    ], UserRegisterService);
    return UserRegisterService;
}());
exports.UserRegisterService = UserRegisterService;
