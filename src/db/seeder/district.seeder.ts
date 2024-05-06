import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { District } from 'src/modules/district/district.entity';

export default class DistrictSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const districtFactory = factoryManager.get(District);

    const district = await districtFactory.saveMany(7);
  }
}
