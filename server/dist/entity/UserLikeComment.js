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
exports.UserLikeComment = void 0;
var Comment_entity_1 = require("./Comment.entity");
var User_entity_1 = require("./User.entity");
var typeorm_1 = require("typeorm");
var UserLikeComment = /** @class */ (function () {
    function UserLikeComment() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], UserLikeComment.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], UserLikeComment.prototype, "userId", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], UserLikeComment.prototype, "commentId", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return User_entity_1.User; }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], UserLikeComment.prototype, "users", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return Comment_entity_1.Comment; }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], UserLikeComment.prototype, "comments", void 0);
    UserLikeComment = __decorate([
        (0, typeorm_1.Entity)({ name: 'userLikeComment' })
    ], UserLikeComment);
    return UserLikeComment;
}());
exports.UserLikeComment = UserLikeComment;
//# sourceMappingURL=UserLikeComment.js.map