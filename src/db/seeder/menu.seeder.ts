import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Menu } from 'src/modules/menu/menu.entity';

export default class MenuSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const menuFactory = factoryManager.get(Menu);

    const menu = await menuFactory.saveMany(7);
  }
}
