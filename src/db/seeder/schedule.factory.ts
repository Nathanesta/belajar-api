import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Schedule } from 'src/modules/schedule/schedule.entity';

export default setSeederFactory(Schedule, (faker) => {
  const schedule = new Schedule();
  schedule.date = faker.date.anytime();
  schedule.check_time = faker.date.anytime();
  schedule.complaint = faker.lorem.text();
  schedule.doctor_id = 1;
  schedule.user_id = 1;
  return schedule;
});
