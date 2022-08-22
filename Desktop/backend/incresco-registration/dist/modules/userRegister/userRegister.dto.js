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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegisterDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UserRegisterDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: "First name of the user" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsAlpha)(),
    __metadata("design:type", String)
], UserRegisterDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Middle name of the user" }),
    (0, class_validator_1.IsAlpha)(),
    __metadata("design:type", String)
], UserRegisterDto.prototype, "middleName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Last name of the user" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserRegisterDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Email id of the user" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserRegisterDto.prototype, "emailID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Contact number of the user" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1000000000),
    (0, class_validator_1.Max)(9999999999),
    __metadata("design:type", Number)
], UserRegisterDto.prototype, "contactNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Date of birth of the user" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], UserRegisterDto.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Gender of the user" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsAlpha)(),
    __metadata("design:type", String)
], UserRegisterDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Education: Tenth percentage of the user" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UserRegisterDto.prototype, "tenthPercentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Education: Twelfth percentage of the user" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UserRegisterDto.prototype, "twelfthPercentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Education: Education type of the user" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserRegisterDto.prototype, "educationType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Education: Degree of the user" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserRegisterDto.prototype, "degree", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Education: College of the user" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserRegisterDto.prototype, "college", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Education: Roll number of the user" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsAlphanumeric)(),
    __metadata("design:type", String)
], UserRegisterDto.prototype, "registerNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Education: Branch of the user" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserRegisterDto.prototype, "branch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Education: If the user has any backlogs or not" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsAlpha)(),
    __metadata("design:type", String)
], UserRegisterDto.prototype, "backlogs", void 0);
exports.UserRegisterDto = UserRegisterDto;
//# sourceMappingURL=userRegister.dto.js.map