import { Country } from "src/modules/country/country.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

export default class CountrySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const countryFactory = factoryManager.get(Country);

    const country = await countryFactory.saveMany(7);
  }
}