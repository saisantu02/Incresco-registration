"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.UserRegisterController = void 0;
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var UserRegisterController = /** @class */ (function () {
    function UserRegisterController(userRegisterService) {
        this.userRegisterService = userRegisterService;
    }
    //
    // GET for help regarding Http status codes
    //
    UserRegisterController.prototype.httpCodes = function () {
        return {};
    };
    //
    // GET for getting input and passing it back
    //
    UserRegisterController.prototype.getInput = function (query) {
        return this.userRegisterService.getInput(query.role);
    };
    //@Redirect('https://youtube.com')
    UserRegisterController.prototype.getInput2 = function (param) {
        return this.userRegisterService.getInput2(param);
    };
    //
    // POST for register
    //
    UserRegisterController.prototype.createUser = function (userRegisterDto) {
        console.log(userRegisterDto);
        return this.userRegisterService.createUser();
    };
    UserRegisterController.prototype.createUser2 = function (userRegisterDto) {
        console.log(userRegisterDto);
        return this.userRegisterService.createUser2();
    };
    //
    //POST resume upload
    //
    UserRegisterController.prototype.uploadFile = function (userResume) {
        console.log('Resume', userResume);
        return "File Name: ".concat(userResume.filename);
    };
    __decorate([
        (0, common_1.Get)('statushelp')
    ], UserRegisterController.prototype, "httpCodes");
    __decorate([
        (0, common_1.Version)('1'),
        (0, common_1.Get)('/jobprofile'),
        __param(0, (0, common_1.Query)())
    ], UserRegisterController.prototype, "getInput");
    __decorate([
        (0, common_1.Version)('2'),
        (0, common_1.Get)('/jobprofile/:role'),
        __param(0, (0, common_1.Param)())
    ], UserRegisterController.prototype, "getInput2");
    __decorate([
        (0, common_1.Version)('1'),
        (0, common_1.Post)('register'),
        __param(0, (0, common_1.Body)())
    ], UserRegisterController.prototype, "createUser");
    __decorate([
        (0, common_1.Version)('2'),
        (0, common_1.Post)('register'),
        __param(0, (0, common_1.Body)())
    ], UserRegisterController.prototype, "createUser2");
    __decorate([
        (0, common_1.Post)('uploadresume'),
        (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('resume', { dest: "./uploads" })),
        __param(0, (0, common_1.UploadedFile)())
    ], UserRegisterController.prototype, "uploadFile");
    UserRegisterController = __decorate([
        (0, common_1.Controller)()
    ], UserRegisterController);
    return UserRegisterController;
}());
exports.UserRegisterController = UserRegisterController;
