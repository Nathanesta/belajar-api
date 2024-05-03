// datasource.ts
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import CountrySeeder from './seeder/country.seeder';
import countryFactory from './seeder/country.factory';
import { Bank } from '../modules/bank/bank.entity';
import { Category } from '../modules/category/category.entity';
import { City } from '../modules/city/city.entity';
import { Clinic } from '../modules/clinic/clinic.entity';
import { Country } from '../modules/country/country.entity';
import { District } from '../modules/district/district.entity';
import { Doctor } from '../modules/doctor/doctor.entity';
import { Document } from '../modules/document/document.entity';
import { Drug } from '../modules/drug/drug.entity';
import { MedicalRecordDrug } from '../modules/medical_record_drug/medical_record_drug.entity';
import { Menu } from '../modules/menu/menu.entity';
import { Payment } from '../modules/payment/payment.entity';
import { Profile } from '../modules/profile/profile.entity';
import { Record } from '../modules/record/record.entity';
import { Region } from '../modules/region/region.entity';
import { Reply } from '../modules/reply/reply.entity';
import { Review } from '../modules/review/review.entity';
import { Role } from '../modules/role/role.entity';
import { Room } from '../modules/room/room.entity';
import { Schedule } from '../modules/schedule/schedule.entity';
import { Transaction } from '../modules/transaction/transaction.entity';
import { User } from '../modules/user/user.entity';
import { Village } from '../modules/village/village.entity';

const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'belajarnest',
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
  seeds: [CountrySeeder],
  factories: [countryFactory],
};

export const dataSource = {
  provide: DataSource,
  useFactory: async () => {
    const ds = new DataSource(options);
    await ds.initialize();
    await ds.synchronize(true);
    await runSeeders(ds);
    return ds;
  },
};