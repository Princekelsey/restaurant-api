import "reflect-metadata";
import { DataSource } from "typeorm";
import { Restaurant } from "./entity/Restaurant";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [Restaurant],
  migrations: [],
  subscribers: [],
});
