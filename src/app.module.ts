import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TugasController } from './modules/tugas/tugas.controller';
import { Bank } from './modules/bank/bank.entity';
import { Category } from './modules/category/category.entity';
import { City } from './modules/city/city.entity';
import { Clinic } from './modules/clinic/clinic.entity';
import { Country } from './modules/country/country.entity';
import { CountryService } from './modules/country/country.service';
import { CountryController } from './modules/country/country.controller';
import { District } from './modules/district/district.entity';
import { Doctor } from './modules/doctor/doctor.entity';
import { Document } from './modules/document/document.entity';
import { Drug } from './modules/drug/drug.entity';
import { MedicalRecordDrug } from './modules/medical_record_drug/medical_record_drug.entity';
import { Menu } from './modules/menu/menu.entity';
import { Payment } from './modules/payment/payment.entity';
import { Profile } from './modules/profile/profile.entity';
import { Record } from './modules/record/record.entity';
import { Region } from './modules/region/region.entity';
import { Reply } from './modules/reply/reply.entity';
import { Review } from './modules/review/review.entity';
import { Role } from './modules/role/role.entity';
import { Room } from './modules/room/room.entity';
import { Schedule } from './modules/schedule/schedule.entity';
import { Transaction } from './modules/transaction/transaction.entity';
import { User } from './modules/user/user.entity';
import { Village } from './modules/village/village.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'klinik_db',
      entities: [
        Bank,
        Category,
        City,
        Clinic,
        Country,
        District,
        Doctor,
        Document,
        Drug,
        MedicalRecordDrug,
        Menu,
        Payment,
        Profile,
        Record,
        Region,
        Reply,
        Review,
        Role,
        Room,
        Schedule,
        Transaction,
        User,
        Village,
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController, TugasController, CountryController],
  providers: [AppService, CountryService],
})
export class AppModule {}
