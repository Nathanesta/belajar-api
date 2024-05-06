import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Payment } from 'src/modules/payment/payment.entity';
import { Record } from 'src/modules/record/record.entity';

export default setSeederFactory(Record, (faker) => {
  const record = new Record();
  record.way_to_come = faker.random.word();
  record.vistting_time = faker.datatype.datetime();
  record.transportation = faker.vehicle.vehicle();
  record.reference = faker.random.word();
  record.person_responsible = faker.random.word();
  record.traumatic = faker.random.word();
  record.non_traumatic = faker.random.word();
  record.conditions = faker.random.word();
  record.complaint = faker.random.word();
  record.history_of_illness = faker.random.word();
  record.solution = faker.random.word();
  record.user_id = faker.datatype.number();
  record.clinic_id = faker.datatype.number();
  return record;
});
