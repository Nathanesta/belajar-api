// datasource.ts
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import CountrySeeder from './seeder/country.seeder';
import countryFactory from './seeder/country.factory';
import { DATABASE_HOST, DATABASE_PORT, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME, DATABASE_ENTITIES } from 'src/env';

const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  entities: DATABASE_ENTITIES,
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
