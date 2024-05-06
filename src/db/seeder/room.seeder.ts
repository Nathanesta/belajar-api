import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Room } from 'src/modules/room/room.entity';

export default class RoomSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const roomFactory = factoryManager.get(Room);

    const room = await roomFactory.saveMany(7);
  }
}
