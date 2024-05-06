import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { City } from 'src/modules/city/city.entity';

export default class CitySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const cityFactory = factoryManager.get(City);

    const city = await cityFactory.saveMany(7);
  }
}
