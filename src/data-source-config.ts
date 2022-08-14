import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";

const options: DataSourceOptions & SeederOptions = {
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
  seeds: ["src/seeds/**/*.ts", "./seeds/**/*.js"],
};

export const AppDataSource = new DataSource(options);
