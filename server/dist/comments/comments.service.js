"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
var Comment_entity_1 = require("./../entity/Comment.entity");
var UserLikeComment_entity_1 = require("./../entity/UserLikeComment.entity");
var data_source_1 = require("./../data-source");
var common_1 = require("@nestjs/common");
var users_service_1 = require("../users/users.service");
var films_service_1 = require("../films/films.service");
var CommentsService = /** @class */ (function () {
    function CommentsService(usersService, filmsService) {
        this.usersService = usersService;
        this.filmsService = filmsService;
        this.commentsRepository = data_source_1.AppDataSource.getRepository(Comment_entity_1.Comment);
        this.userLikeCommentsRepository = data_source_1.AppDataSource.getRepository(UserLikeComment_entity_1.UserLikeComment);
    }
    CommentsService.prototype.addComment = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var user, film, comment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.getUserById(dto.userId)];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.filmsService.getFilmById(dto.filmId)];
                    case 2:
                        film = _a.sent();
                        return [4 /*yield*/, this.commentsRepository.save(__assign(__assign({}, dto), { user: user, film: film }))];
                    case 3:
                        comment = _a.sent();
                        return [2 /*return*/, comment];
                }
            });
        });
    };
    CommentsService.prototype.getAllComments = function () {
        return __awaiter(this, void 0, void 0, function () {
            var comments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commentsRepository.find()];
                    case 1:
                        comments = _a.sent();
                        return [2 /*return*/, comments];
                }
            });
        });
    };
    CommentsService.prototype.getCommentById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var comment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commentsRepository.findOne({ where: { id: id } })];
                    case 1:
                        comment = _a.sent();
                        return [2 /*return*/, comment];
                }
            });
        });
    };
    CommentsService.prototype.getCommentsByFilmId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var comments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commentsRepository.find({ where: { filmId: id }, relations: { user: true } })];
                    case 1:
                        comments = _a.sent();
                        return [2 /*return*/, comments];
                }
            });
        });
    };
    CommentsService.prototype.getCommentsByUserId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var comments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commentsRepository.find({ where: { userId: id }, relations: { film: true } })];
                    case 1:
                        comments = _a.sent();
                        return [2 /*return*/, comments];
                }
            });
        });
    };
    CommentsService.prototype.addLikeToComment = function (id, dto) {
        return __awaiter(this, void 0, void 0, function () {
            var comment, userLike, user, likedComment, likes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commentsRepository.findOne({ where: { id: id } })];
                    case 1:
                        comment = _a.sent();
                        return [4 /*yield*/, this.userLikeCommentsRepository.findOne({ where: { commentId: id, userId: dto.userId } })];
                    case 2:
                        userLike = _a.sent();
                        console.log(userLike);
                        if (userLike) {
                            throw new common_1.HttpException('Вы уже оценили этот комментарий', common_1.HttpStatus.BAD_REQUEST);
                        }
                        return [4 /*yield*/, this.usersService.getUserById(dto.userId)];
                    case 3:
                        user = _a.sent();
                        return [4 /*yield*/, this.userLikeCommentsRepository.save({ userId: user.id, commentId: id })];
                    case 4:
                        likedComment = _a.sent();
                        likes = comment.likes + 1;
                        comment.likes = likes;
                        return [4 /*yield*/, this.commentsRepository.update({ id: id }, { likes: likes })];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, comment];
                }
            });
        });
    };
    CommentsService.prototype.addDislikeToComment = function (id, dto) {
        return __awaiter(this, void 0, void 0, function () {
            var comment, userLike, user, dislikedComment, dislikes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commentsRepository.findOne({ where: { id: id } })];
                    case 1:
                        comment = _a.sent();
                        return [4 /*yield*/, this.userLikeCommentsRepository.findOne({ where: { commentId: id, userId: dto.userId } })];
                    case 2:
                        userLike = _a.sent();
                        console.log(userLike);
                        if (userLike) {
                            throw new common_1.HttpException('Вы уже оценили этот комментарий', common_1.HttpStatus.BAD_REQUEST);
                        }
                        return [4 /*yield*/, this.usersService.getUserById(dto.userId)];
                    case 3:
                        user = _a.sent();
                        return [4 /*yield*/, this.userLikeCommentsRepository.save({ userId: user.id, commentId: id })];
                    case 4:
                        dislikedComment = _a.sent();
                        dislikes = comment.dislikes + 1;
                        comment.dislikes = dislikes;
                        return [4 /*yield*/, this.commentsRepository.update({ id: id }, { dislikes: dislikes })];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, comment];
                }
            });
        });
    };
    CommentsService.prototype.deleteComment = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var comment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commentsRepository.delete({ id: id })];
                    case 1:
                        comment = _a.sent();
                        return [2 /*return*/, 'deleted'];
                }
            });
        });
    };
    CommentsService = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [users_service_1.UsersService,
            films_service_1.FilmsService])
    ], CommentsService);
    return CommentsService;
}());
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map