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
exports.RatingController = void 0;
var rateFilm_dto_1 = require("./dto/rateFilm.dto");
var rating_service_1 = require("./rating.service");
var common_1 = require("@nestjs/common");
var RatingController = /** @class */ (function () {
    function RatingController(ratingService) {
        this.ratingService = ratingService;
    }
    RatingController.prototype.userRate = function (dto) {
        return this.ratingService.userRate(dto);
    };
    RatingController.prototype.getRates = function () {
        return this.ratingService.getRates();
    };
    RatingController.prototype.getRatesByFilmId = function (id) {
        return this.ratingService.getRatesByFilmId(id);
    };
    RatingController.prototype.getRatesByUserId = function (id) {
        return this.ratingService.getRatesByUserId(id);
    };
    RatingController.prototype.deleteRate = function (dto) {
        return this.ratingService.deleteRate(dto);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [rateFilm_dto_1.RateFilmDto]),
        __metadata("design:returntype", void 0)
    ], RatingController.prototype, "userRate", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RatingController.prototype, "getRates", null);
    __decorate([
        (0, common_1.Get)('film/:id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], RatingController.prototype, "getRatesByFilmId", null);
    __decorate([
        (0, common_1.Get)('user/:id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], RatingController.prototype, "getRatesByUserId", null);
    __decorate([
        (0, common_1.Delete)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [rateFilm_dto_1.RateFilmDto]),
        __metadata("design:returntype", void 0)
    ], RatingController.prototype, "deleteRate", null);
    RatingController = __decorate([
        (0, common_1.Controller)('rating'),
        __metadata("design:paramtypes", [rating_service_1.RatingService])
    ], RatingController);
    return RatingController;
}());
exports.RatingController = RatingController;
//# sourceMappingURL=rating.controller.js.map