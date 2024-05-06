import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Payment } from 'src/modules/payment/payment.entity';

export default class paymentSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const paymentFactory = factoryManager.get(Payment);

    const payment = await paymentFactory.saveMany(7);
  }
}
