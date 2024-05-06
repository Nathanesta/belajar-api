import { setSeederFactory } from 'typeorm-extension';
import { City } from 'src/modules/city/city.entity';
import { faker } from '@faker-js/faker';

export default setSeederFactory(City, (faker) => {
  const city = new City();
  city.city_name = faker.location.city();
  city.region_id = faker.datatype.number();
  city.latitude = faker.location.latitude();
  city.longitude = faker.location.longitude();
  return city;
});
