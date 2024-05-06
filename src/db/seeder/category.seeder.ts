import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Category } from 'src/modules/category/category.entity';

export default class CategorySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const categoryFactory = factoryManager.get(Category);

    const category = await categoryFactory.saveMany(7);
  }
}
