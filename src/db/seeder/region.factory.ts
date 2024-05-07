import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Region } from 'src/modules/region/region.entity';

export default setSeederFactory(Region, (faker) => {
  const region = new Region();
  region.region_name = faker.address.county();
  region.country_id = 1;
  return region;
});
