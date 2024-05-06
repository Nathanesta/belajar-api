import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Village } from 'src/modules/village/village.entity';

export default class VillageSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const villageFactory = factoryManager.get(Village);

    const village = await villageFactory.saveMany(7);
  }
}
