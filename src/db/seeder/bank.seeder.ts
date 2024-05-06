import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Bank } from 'src/modules/bank/bank.entity';

export default class BankSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const bankFactory = factoryManager.get(Bank);

    const bank = await bankFactory.saveMany(7);
  }
}
