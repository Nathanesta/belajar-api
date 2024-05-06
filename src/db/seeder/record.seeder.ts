import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Record } from 'src/modules/record/record.entity';

export default class RecordSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const recordFactory = factoryManager.get(Record);

    const record = await recordFactory.saveMany(7);
  }
}
