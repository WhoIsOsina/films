import "reflect-metadata"
import { DataSource } from "typeorm";



export const AppDataSource = new DataSource({
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
})
