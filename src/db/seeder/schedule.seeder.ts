import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Schedule } from 'src/modules/schedule/schedule.entity';

export default class ScheduleSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const scheduleFactory = factoryManager.get(Schedule);

    const schedule = await scheduleFactory.saveMany(7);
  }
}
