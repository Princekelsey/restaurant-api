import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm";
import { Restaurant } from "../entity/Restaurant";
import makeStoreData from "../utils/dataMock";

export default class RestaurantSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    _factoryManager: SeederFactoryManager
  ): Promise<void> {
    const data = makeStoreData();
    const repository = dataSource.getRepository(Restaurant);
    await repository.insert(data);
  }
}
