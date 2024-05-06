import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Schedule } from 'src/modules/schedule/schedule.entity';
import { Village } from 'src/modules/village/village.entity';

export default setSeederFactory(Village, (faker) => {
  const village = new Village();
  village.village_name = faker.location.county();
  village.district_id = faker.datatype.number();
  return village;
});
