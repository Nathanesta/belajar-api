import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { MedicalRecordDrug } from 'src/modules/medical_record_drug/medical_record_drug.entity';

export default class MedicalRecordDrugSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const medicalRecordDrugFactory = factoryManager.get(MedicalRecordDrug);

    const medicalRecordDrug = await medicalRecordDrugFactory.saveMany(7);
  }
}
