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
exports.AuthService = void 0;
var users_service_1 = require("./../users/users.service");
var common_1 = require("@nestjs/common");
var jwt_1 = require("@nestjs/jwt");
var bcrypt = require("bcryptjs");
var AuthService = /** @class */ (function () {
    function AuthService(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    AuthService.prototype.registration = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var candidate, hashPassword, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getUserByEmail(dto.email)];
                    case 1:
                        candidate = _a.sent();
                        if (candidate) {
                            throw new common_1.HttpException('Пользователь с таким email уже зарегистрирован', common_1.HttpStatus.BAD_REQUEST);
                        }
                        return [4 /*yield*/, bcrypt.hash(dto.password, 4)];
                    case 2:
                        hashPassword = _a.sent();
                        return [4 /*yield*/, this.userService.createUser(__assign(__assign({}, dto), { password: hashPassword }))];
                    case 3:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    AuthService.prototype.login = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var user, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validation(dto)];
                    case 1:
                        user = _a.sent();
                        token = this.generateToken(user);
                        return [2 /*return*/, token];
                }
            });
        });
    };
    AuthService.prototype.validation = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var user, comparePassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getUserByEmail(dto.email)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.HttpException('Неверное имя пользователя или пароль', common_1.HttpStatus.BAD_REQUEST);
                        }
                        return [4 /*yield*/, bcrypt.compare(dto.password, user.password)];
                    case 2:
                        comparePassword = _a.sent();
                        if (!comparePassword) {
                            throw new common_1.HttpException('Неверное имя пользователя или пароль', common_1.HttpStatus.BAD_REQUEST);
                        }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    AuthService.prototype.generateToken = function (user) {
        var payload = { id: user.id, email: user.email, rates: user.rates, roles: user.roles };
        var token = this.jwtService.sign(payload);
        return {
            token: token
        };
    };
    AuthService = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [users_service_1.UsersService,
            jwt_1.JwtService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map