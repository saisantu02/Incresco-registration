"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserRegisterDto = void 0;
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var UserRegisterDto = /** @class */ (function () {
    function UserRegisterDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "First name of the user" }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsAlpha)()
    ], UserRegisterDto.prototype, "firstName");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ description: "Middle name of the user" }),
        (0, class_validator_1.IsAlpha)()
    ], UserRegisterDto.prototype, "middleName");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Last name of the user" }),
        (0, class_validator_1.IsNotEmpty)()
    ], UserRegisterDto.prototype, "lastName");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Email id of the user" }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsEmail)()
    ], UserRegisterDto.prototype, "emailID");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Contact number of the user" }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.Min)(1000000000),
        (0, class_validator_1.Max)(9999999999)
    ], UserRegisterDto.prototype, "contactNumber");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Date of birth of the user" }),
        (0, class_validator_1.IsNotEmpty)()
    ], UserRegisterDto.prototype, "dateOfBirth");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Gender of the user" }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsAlpha)()
    ], UserRegisterDto.prototype, "gender");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Education: Tenth percentage of the user" }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.Max)(100),
        (0, class_validator_1.Min)(1)
    ], UserRegisterDto.prototype, "tenthPercentage");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Education: Twelfth percentage of the user" }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.Max)(100),
        (0, class_validator_1.Min)(1)
    ], UserRegisterDto.prototype, "twelfthPercentage");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Education: Education type of the user" }),
        (0, class_validator_1.IsNotEmpty)()
    ], UserRegisterDto.prototype, "educationType");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Education: Degree of the user" }),
        (0, class_validator_1.IsNotEmpty)()
    ], UserRegisterDto.prototype, "degree");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Education: College of the user" }),
        (0, class_validator_1.IsNotEmpty)()
    ], UserRegisterDto.prototype, "college");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Education: Roll number of the user" }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsAlphanumeric)()
    ], UserRegisterDto.prototype, "registerNumber");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Education: Branch of the user" }),
        (0, class_validator_1.IsNotEmpty)()
    ], UserRegisterDto.prototype, "branch");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: "Education: If the user has any backlogs or not" }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsAlpha)()
    ], UserRegisterDto.prototype, "backlogs");
    return UserRegisterDto;
}());
exports.UserRegisterDto = UserRegisterDto;
