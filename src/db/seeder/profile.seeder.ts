import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Profile } from 'src/modules/profile/profile.entity';

export default class ProfileSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const profileFactory = factoryManager.get(Profile);

    const profile = await profileFactory.saveMany(7);
  }
}
