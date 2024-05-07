import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConnectionConfig } from './env';
import { DataSourceModule } from './datasoruce.module';
import { BankModule } from './modules/bank/bank.module';
import { CategoryModule } from './modules/category/category.module';
import { CityModule } from './modules/city/city.module';
import { ClinicModule } from './modules/clinic/clinic.module';
import { CountryModule } from './modules/country/country.module';
import { DistrictModule } from './modules/district/district.module';
import { DoctorModule } from './modules/doctor/doctor.module';
import { DocumentModule } from './modules/document/document.module';
import { DrugModule } from './modules/drug/drug.module';
import { MedicalRecordDrugModule } from './modules/medical_record_drug/medical_record_drug.module';
import { MenuModule } from './modules/menu/menu.module';
import { PaymentModule } from './modules/payment/payment.module';
import { ProfileModule } from './modules/profile/profile.module';
import { RecordModule } from './modules/record/record.module';
import { RegionModule } from './modules/region/region.module';
import { ReplyModule } from './modules/reply/reply.module';
import { ReviewModule } from './modules/review/review.module';
import { RoleModule } from './modules/role/role.module';
import { RoomModule } from './modules/room/room.module';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { UserModule } from './modules/user/user.module';
import { VillageModule } from './modules/village/village.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConnectionConfig),
    DataSourceModule,
    BankModule,
    CategoryModule,
    CityModule,
    ClinicModule,
    CountryModule,
    DistrictModule,
    DoctorModule,
    DocumentModule,
    DrugModule,
    MedicalRecordDrugModule,
    MenuModule,
    PaymentModule,
    ProfileModule,
    RecordModule,
    RegionModule,
    ReplyModule,
    ReviewModule,
    RoleModule,
    RoomModule,
    ScheduleModule,
    TransactionModule,
    UserModule,
    VillageModule,
  ],
})
export class AppModule {}
