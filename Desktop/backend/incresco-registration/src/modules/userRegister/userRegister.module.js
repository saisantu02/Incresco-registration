"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserRegisterModule = void 0;
var common_1 = require("@nestjs/common");
var userRegister_controller_1 = require("./userRegister.controller");
var userRegister_service_1 = require("./userRegister.service");
var UserRegisterModule = /** @class */ (function () {
    function UserRegisterModule() {
    }
    UserRegisterModule = __decorate([
        (0, common_1.Module)({
            imports: [],
            controllers: [userRegister_controller_1.UserRegisterController],
            providers: [userRegister_service_1.UserRegisterService]
        })
    ], UserRegisterModule);
    return UserRegisterModule;
}());
exports.UserRegisterModule = UserRegisterModule;
