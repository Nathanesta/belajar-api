import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Review } from 'src/modules/review/review.entity';
import { Role } from 'src/modules/role/role.entity';

export default class RoleSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const roleFactory = factoryManager.get(Role);

    const role = await roleFactory.saveMany(7);
  }
}
