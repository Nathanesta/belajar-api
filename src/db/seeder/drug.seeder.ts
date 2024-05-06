import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Drug } from 'src/modules/drug/drug.entity';

export default class DrugSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const drugFactory = factoryManager.get(Drug);

    const drug = await drugFactory.saveMany(7);
  }
}
