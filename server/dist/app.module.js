"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var config_module_1 = require("./config.module");
var common_1 = require("@nestjs/common");
var users_module_1 = require("./users/users.module");
var auth_module_1 = require("./auth/auth.module");
var films_module_1 = require("./films/films.module");
var files_module_1 = require("./files/files.module");
var serve_static_1 = require("@nestjs/serve-static");
var rating_module_1 = require("./rating/rating.module");
var comments_module_1 = require("./comments/comments.module");
var roles_module_1 = require("./roles/roles.module");
var path = require("path");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                users_module_1.UsersModule,
                auth_module_1.AuthModule,
                config_module_1.CfgModule,
                films_module_1.FilmsModule,
                files_module_1.FilesModule,
                serve_static_1.ServeStaticModule.forRoot({
                    rootPath: path.resolve(__dirname, 'static')
                }),
                rating_module_1.RatingModule,
                comments_module_1.CommentsModule,
                roles_module_1.RolesModule
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map