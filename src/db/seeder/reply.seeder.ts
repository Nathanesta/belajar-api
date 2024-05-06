import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Reply } from 'src/modules/reply/reply.entity';

export default class ReplySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const replyFactory = factoryManager.get(Reply);

    const reply = await replyFactory.saveMany(7);
  }
}
