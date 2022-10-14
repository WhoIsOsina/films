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
exports.CommentsController = void 0;
var UpdateComment_dto_1 = require("./dto/UpdateComment.dto");
var userLike_dto_1 = require("./dto/userLike.dto");
var AddComment_dto_1 = require("./dto/AddComment.dto");
var comments_service_1 = require("./comments.service");
var common_1 = require("@nestjs/common");
var CommentsController = /** @class */ (function () {
    function CommentsController(commentsService) {
        this.commentsService = commentsService;
    }
    CommentsController.prototype.addComment = function (dto) {
        return this.commentsService.addComment(dto);
    };
    CommentsController.prototype.getALlComments = function () {
        return this.commentsService.getAllComments();
    };
    CommentsController.prototype.getCommentById = function (id) {
        return this.commentsService.getCommentById(id);
    };
    CommentsController.prototype.getCommentsByFilmId = function (id) {
        return this.commentsService.getCommentsByFilmId(id);
    };
    CommentsController.prototype.getCommentsByUserId = function (id) {
        return this.commentsService.getCommentsByUserId(id);
    };
    CommentsController.prototype.addLikeToComment = function (id, dto) {
        return this.commentsService.addLikeToComment(id, dto);
    };
    CommentsController.prototype.addDislikeToComment = function (id, dto) {
        return this.commentsService.addDislikeToComment(id, dto);
    };
    CommentsController.prototype.deleteComment = function (id) {
        return this.commentsService.deleteComment(id);
    };
    CommentsController.prototype.updateComment = function (dto) {
        return this.commentsService.updateComment(dto);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [AddComment_dto_1.AddCommentDto]),
        __metadata("design:returntype", void 0)
    ], CommentsController.prototype, "addComment", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CommentsController.prototype, "getALlComments", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], CommentsController.prototype, "getCommentById", null);
    __decorate([
        (0, common_1.Get)('films/:id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], CommentsController.prototype, "getCommentsByFilmId", null);
    __decorate([
        (0, common_1.Get)('users/:id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], CommentsController.prototype, "getCommentsByUserId", null);
    __decorate([
        (0, common_1.Put)('like/:id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, userLike_dto_1.UserLikeDto]),
        __metadata("design:returntype", void 0)
    ], CommentsController.prototype, "addLikeToComment", null);
    __decorate([
        (0, common_1.Put)('dislike/:id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, userLike_dto_1.UserLikeDto]),
        __metadata("design:returntype", void 0)
    ], CommentsController.prototype, "addDislikeToComment", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], CommentsController.prototype, "deleteComment", null);
    __decorate([
        (0, common_1.Put)('update'),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [UpdateComment_dto_1.UpdateCommentDto]),
        __metadata("design:returntype", void 0)
    ], CommentsController.prototype, "updateComment", null);
    CommentsController = __decorate([
        (0, common_1.Controller)('comments'),
        __metadata("design:paramtypes", [comments_service_1.CommentsService])
    ], CommentsController);
    return CommentsController;
}());
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map