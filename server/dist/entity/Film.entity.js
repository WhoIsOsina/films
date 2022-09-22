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
exports.Film = void 0;
var Rates_entity_1 = require("./Rates.entity");
var typeorm_1 = require("typeorm");
var Comment_entity_1 = require("./Comment.entity");
var Film = /** @class */ (function () {
    function Film() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Film.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Film.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Film.prototype, "director", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Film.prototype, "year", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Film.prototype, "genre", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Film.prototype, "picture", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Film.prototype, "video", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Rates_entity_1.Rate; }, function (rate) { return rate.film; }),
        __metadata("design:type", Array)
    ], Film.prototype, "rates", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Comment_entity_1.Comment; }, function (comment) { return comment.film; }),
        __metadata("design:type", Array)
    ], Film.prototype, "comments", void 0);
    Film = __decorate([
        (0, typeorm_1.Entity)({ name: 'films' })
    ], Film);
    return Film;
}());
exports.Film = Film;
//# sourceMappingURL=Film.entity.js.map