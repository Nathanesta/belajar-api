import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Transaction } from 'src/modules/transaction/transaction.entity';

export default class TransactionSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const transactionFactory = factoryManager.get(Transaction);

    const transaction = await transactionFactory.saveMany(7);
  }
}
