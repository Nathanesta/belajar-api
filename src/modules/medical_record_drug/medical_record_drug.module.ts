import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalRecordDrugService } from './medical_record_drug.service';
import { MedicalRecordDrugController } from './medical_reecord_drug.controller';
import { MedicalRecordDrug } from './medical_record_drug.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalRecordDrug])],
  controllers: [MedicalRecordDrugController],
  providers: [MedicalRecordDrugService],
})
export class MedicalRecordDrugModule {}
