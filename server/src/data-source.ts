import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DATEBASE_USERNAME,
  password: process.env.DATEBASE_PASSWORD,
  database: process.env.DATEBASE_NAME,
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts", "./entity/**/*.js"],
  migrations: [],
  subscribers: [],
});
