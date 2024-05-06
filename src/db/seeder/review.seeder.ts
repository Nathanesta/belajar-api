import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Review } from 'src/modules/review/review.entity';

export default class ReviewSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const reviewFactory = factoryManager.get(Review);

    const review = await reviewFactory.saveMany(7);
  }
}
