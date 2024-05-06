import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Document } from 'src/modules/document/document.entity';

export default class DocumentSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const documentFactory = factoryManager.get(Document);

    const document = await documentFactory.saveMany(7);
  }
}
