import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your username",
  password: "your password",
  database: "your database name",
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts", "./entity/**/*.js"],
  migrations: ["src/migration/**/*.ts", "./migration/**/*.js"],
  subscribers: ["src/subscriber/**/*.ts", "./subscriber/**/*.js"],
});
