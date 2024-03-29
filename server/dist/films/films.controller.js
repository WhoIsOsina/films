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
exports.FilmsController = void 0;
var addFilm_dto_1 = require("./dto/addFilm.dto");
var films_service_1 = require("./films.service");
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var FilmsController = /** @class */ (function () {
    function FilmsController(filmService) {
        this.filmService = filmService;
    }
    FilmsController.prototype.addFilm = function (files, dto) {
        return this.filmService.addFilm(dto, files.picture, files.video);
    };
    FilmsController.prototype.getAllFilms = function () {
        return this.filmService.getAllFilms();
    };
    FilmsController.prototype.getFilmById = function (id) {
        return this.filmService.getFilmById(id);
    };
    __decorate([
        (0, common_1.Post)(),
        (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
            { name: 'picture', maxCount: 1 },
            { name: 'video', maxCount: 1 }
        ])),
        __param(0, (0, common_1.UploadedFiles)()),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, addFilm_dto_1.AddFilmDto]),
        __metadata("design:returntype", void 0)
    ], FilmsController.prototype, "addFilm", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FilmsController.prototype, "getAllFilms", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FilmsController.prototype, "getFilmById", null);
    FilmsController = __decorate([
        (0, common_1.Controller)('films'),
        __metadata("design:paramtypes", [films_service_1.FilmsService])
    ], FilmsController);
    return FilmsController;
}());
exports.FilmsController = FilmsController;
//# sourceMappingURL=films.controller.js.map