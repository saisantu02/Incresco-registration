"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegisterController = void 0;
const common_1 = require("@nestjs/common");
const userRegister_service_1 = require("./userRegister.service");
const userRegister_dto_1 = require("./userRegister.dto");
const platform_express_1 = require("@nestjs/platform-express");
let UserRegisterController = class UserRegisterController {
    constructor(userRegisterService) {
        this.userRegisterService = userRegisterService;
    }
    getInput2(param) {
        return this.userRegisterService.getInput2(param);
    }
    createUser(userRegisterDto) {
        console.log(userRegisterDto);
        return this.userRegisterService.createUser();
    }
    uploadFile(userResume) {
        console.log('Resume', userResume);
        return `File Name: ${userResume.filename}`;
    }
    getAllErrorStatusCode() {
        return [
            {
                'OK': common_1.HttpStatus.OK
            },
            {
                'Created': common_1.HttpStatus.CREATED
            },
            {
                'Bad Request': common_1.HttpStatus.BAD_REQUEST
            },
            {
                'Unauthorized': common_1.HttpStatus.UNAUTHORIZED
            },
            {
                'Payment Required': common_1.HttpStatus.PAYMENT_REQUIRED
            },
            {
                'Forbidden': common_1.HttpStatus.FORBIDDEN
            },
            {
                'Not Found': common_1.HttpStatus.NOT_FOUND
            },
            {
                'Internal Server Error': common_1.HttpStatus.INTERNAL_SERVER_ERROR
            },
        ];
    }
};
__decorate([
    (0, common_1.Get)('/jobprofile/:role'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], UserRegisterController.prototype, "getInput2", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userRegister_dto_1.UserRegisterDto]),
    __metadata("design:returntype", String)
], UserRegisterController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('uploadresume'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('resume', { dest: "./uploads", })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserRegisterController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)('help'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UserRegisterController.prototype, "getAllErrorStatusCode", null);
UserRegisterController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [userRegister_service_1.UserRegisterService])
], UserRegisterController);
exports.UserRegisterController = UserRegisterController;
//# sourceMappingURL=userRegister.controller.js.map