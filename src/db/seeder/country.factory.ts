import { setSeederFactory } from 'typeorm-extension';
import { Country } from 'src/modules/country/country.entity';
import { faker } from '@faker-js/faker';

export default setSeederFactory(Country, (faker) => {
  const country = new Country();
  country.country_name = faker.location.country();
  return country;
});