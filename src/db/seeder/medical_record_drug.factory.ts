import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Document } from 'src/modules/document/document.entity';
import { MedicalRecordDrug } from 'src/modules/medical_record_drug/medical_record_drug.entity';

export default setSeederFactory(MedicalRecordDrug, (faker) => {
  const medicalRecordDrug = new MedicalRecordDrug();
  medicalRecordDrug.medical_record_id = faker.datatype.number();
  medicalRecordDrug.drug_id = faker.datatype.number();
  return medicalRecordDrug;
});
