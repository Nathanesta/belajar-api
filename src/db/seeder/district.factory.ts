import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { District } from 'src/modules/district/district.entity';

export default setSeederFactory(District, (faker) => {
  const district = new District();
  district.district_name = faker.location.county();
  return district;
});
