// datasource.ts
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_ENTITIES,
} from 'src/env';
import BankSeeder from './seeder/bank.seeder';
import CategorySeeder from './seeder/category.seeder';
import CitySeeder from './seeder/city.seeder';
import ClinicSeeder from './seeder/clinic.seeder';
import CountrySeeder from './seeder/country.seeder';
import DistrictSeeder from './seeder/district.seeder';
import DoctorSeeder from './seeder/doctor.seeder';
import DocumentSeeder from './seeder/document.seeder';
import DrugSeeder from './seeder/drug.seeder';
import MedicalRecordDrugSeeder from './seeder/medical_record_drug.seeder';
import MenuSeeder from './seeder/menu.seeder';
import PaymentSeeder from './seeder/payment.seeder';
import ProfileSeeder from './seeder/profile.seeder';
import RecordSeeder from './seeder/record.seeder';
import RegionSeeder from './seeder/region.seeder';
import ReplySeeder from './seeder/reply.seeder';
import ReviewSeeder from './seeder/review.seeder';
import RoleSeeder from './seeder/role.seeder';
import RoomSeeder from './seeder/room.seeder';
import ScheduleSeeder from './seeder/schedule.seeder';
import TransactionSeeder from './seeder/transaction.seeder';
import UserSeeder from './seeder/user.seeder';
import VillageSeeder from './seeder/village.seeder';
import bankFactory from './seeder/bank.factory';
import categoryFactory from './seeder/category.factory';
import cityFactory from './seeder/city.factory';
import clinicFactory from './seeder/clinic.factory';
import countryFactory from './seeder/country.factory';
import districtFactory from './seeder/district.factory';
import doctorFactory from './seeder/doctor.factory';
import documentFactory from './seeder/document.factory';
import drugFactory from './seeder/drug.factory';
import medical_record_drugFactory from './seeder/medical_record_drug.factory';
import menuFactory from './seeder/menu.factory';
import paymentFactory from './seeder/payment.factory';
import profileFactory from './seeder/profile.factory';
import recordFactory from './seeder/record.factory';
import regionFactory from './seeder/region.factory';
import replyFactory from './seeder/reply.factory';
import reviewFactory from './seeder/review.factory';
import roleFactory from './seeder/role.factory';
import roomFactory from './seeder/room.factory';
import scheduleFactory from './seeder/schedule.factory';
import transactionFactory from './seeder/transaction.factory';
import userFactory from './seeder/user.factory';
import villageFactory from './seeder/village.factory';

const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  entities: DATABASE_ENTITIES,
  synchronize: true,
  seeds: [
    BankSeeder,
    CategorySeeder,
    CitySeeder,
    ClinicSeeder,
    CountrySeeder,
    DistrictSeeder,
    DoctorSeeder,
    DocumentSeeder,
    DrugSeeder,
    MedicalRecordDrugSeeder,
    MenuSeeder,
    PaymentSeeder,
    ProfileSeeder,
    RecordSeeder,
    RegionSeeder,
    ReplySeeder,
    ReviewSeeder,
    RoleSeeder,
    RoomSeeder,
    ScheduleSeeder,
    TransactionSeeder,
    UserSeeder,
    VillageSeeder,
  ],
  factories: [
    bankFactory,
    categoryFactory,
    cityFactory,
    clinicFactory,
    countryFactory,
    districtFactory,
    doctorFactory,
    documentFactory,
    drugFactory,
    medical_record_drugFactory,
    menuFactory,
    paymentFactory,
    profileFactory,
    recordFactory,
    regionFactory,
    replyFactory,
    reviewFactory,
    roleFactory,
    roomFactory,
    scheduleFactory,
    transactionFactory,
    userFactory,
    villageFactory,
  ],
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
