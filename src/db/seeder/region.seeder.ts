import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Region } from 'src/modules/region/region.entity';

export default class RegionSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const regionFactory = factoryManager.get(Region);

    const region = await regionFactory.saveMany(7);
  }
}
