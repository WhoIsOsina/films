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
exports.Genre = void 0;
var typeorm_1 = require("typeorm");
var Film_entity_1 = require("./Film.entity");
var Genre = /** @class */ (function () {
    function Genre() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Genre.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Genre.prototype, "genre", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Genre.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return Film_entity_1.Film; }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], Genre.prototype, "films", void 0);
    Genre = __decorate([
        (0, typeorm_1.Entity)({ name: 'genre' })
    ], Genre);
    return Genre;
}());
exports.Genre = Genre;
//# sourceMappingURL=Genre.entity.js.map