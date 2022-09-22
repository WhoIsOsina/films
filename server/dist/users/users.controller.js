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
exports.UsersController = void 0;
var addRole_dto_1 = require("./dto/addRole.dto");
var createUser_dto_1 = require("./dto/createUser.dto");
var users_service_1 = require("./users.service");
var common_1 = require("@nestjs/common");
var UsersController = /** @class */ (function () {
    function UsersController(userService) {
        this.userService = userService;
    }
    UsersController.prototype.createUser = function (dto) {
        return this.userService.createUser(dto);
    };
    UsersController.prototype.getAllUsers = function () {
        return this.userService.getAllUsers();
    };
    UsersController.prototype.addRole = function (dto) {
        return this.userService.addRole(dto);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [createUser_dto_1.CreateUserDto]),
        __metadata("design:returntype", void 0)
    ], UsersController.prototype, "createUser", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UsersController.prototype, "getAllUsers", null);
    __decorate([
        (0, common_1.Post)('role'),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [addRole_dto_1.AddRoleDto]),
        __metadata("design:returntype", void 0)
    ], UsersController.prototype, "addRole", null);
    UsersController = __decorate([
        (0, common_1.Controller)('users'),
        __metadata("design:paramtypes", [users_service_1.UsersService])
    ], UsersController);
    return UsersController;
}());
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map