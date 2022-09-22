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
exports.Rate = void 0;
var Film_entity_1 = require("./Film.entity");
var typeorm_1 = require("typeorm");
var User_entity_1 = require("./User.entity");
var Rate = /** @class */ (function () {
    function Rate() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Rate.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Rate.prototype, "rate", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Rate.prototype, "filmId", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Rate.prototype, "userId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_entity_1.User; }, function (user) { return user.rates; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: 'userId' }),
        __metadata("design:type", User_entity_1.User)
    ], Rate.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Film_entity_1.Film; }, function (film) { return film.rates; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: 'filmId' }),
        __metadata("design:type", Film_entity_1.Film)
    ], Rate.prototype, "film", void 0);
    Rate = __decorate([
        (0, typeorm_1.Entity)({ name: 'rates' })
    ], Rate);
    return Rate;
}());
exports.Rate = Rate;
//# sourceMappingURL=Rates.entity.js.map