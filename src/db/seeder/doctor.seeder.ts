import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Doctor } from 'src/modules/doctor/doctor.entity';

export default class doctorSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const doctorFactory = factoryManager.get(Doctor);

    const doctor = await doctorFactory.saveMany(7);
  }
}
