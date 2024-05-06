import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Clinic } from 'src/modules/clinic/clinic.entity';

export default class ClinicSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const clinicFactory = factoryManager.get(Clinic);

    const clinic = await clinicFactory.saveMany(7);
  }
}
