import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Bank } from './modules/bank/bank.entity';
import { Category } from './modules/category/category.entity';
import { City } from './modules/city/city.entity';
import { Clinic } from './modules/clinic/clinic.entity';
import { Country } from './modules/country/country.entity';
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

const port: number = parseInt(<string>process.env.PORT) || 3306;
export const DATABASE_HOST = 'localhost';
export const DATABASE_PORT = 3306;
export const DATABASE_USERNAME = 'root';
export const DATABASE_PASSWORD = '';
export const DATABASE_NAME = 'klinik_db';
export const DATABASE_ENTITIES = [
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
];

export const typeormConnectionConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  entities: DATABASE_ENTITIES,
  synchronize: true,
  timezone: 'utc',
};
