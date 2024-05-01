import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TugasController } from './tugas/tugas.controller';
import { Bank } from './bank/bank.entity';
import { Category } from './category/category.entity';
import { City } from './city/city.entity';
import { Clinic } from './clinic/clinic.entity';
import { Country } from './country/country.entity';
import { District } from './district/district.entity';
import { Doctor } from './doctor/doctor.entity';
import { Document } from './document/document.entity';
import { Drug } from './drug/drug.entity';
import { DrugR } from './drug_record/drug_record.entity';
import { Menu } from './menu/menu.entity';
import { Payment } from './payment/payment.entity';
import { Profile } from './profile/profile.entity';
import { Record } from './record/record.entity';
import { Region } from './region/region.entity';
import { Reply } from './reply/reply.entity';
import { Review } from './review/review.entity';
import { Role } from './role/role.entity';
import { Room } from './room/room.entity';
import { Schedule } from './schedule/schedule.entity';
import { Transaction } from './transaction/transaction.entity';
import { User } from './user/user.entity';
import { Village } from './village/village.entity';

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
        DrugR,
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
  controllers: [AppController, TugasController],
  providers: [AppService],
})
export class AppModule {}
