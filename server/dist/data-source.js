"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Pornstar2018",
    database: "films",
    synchronize: true,
    logging: false,
    entities: ["dist/**/*.entity.js"],
    migrations: ["dist/migration/*.js"],
    migrationsTableName: "custom_migration_table",
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map