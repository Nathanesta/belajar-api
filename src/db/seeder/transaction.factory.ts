import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Schedule } from 'src/modules/schedule/schedule.entity';
import { Transaction } from 'src/modules/transaction/transaction.entity';

export default setSeederFactory(Transaction, (faker) => {
  const transaction = new Transaction();
  transaction.code = faker.datatype.number();
  transaction.consultation = faker.lorem.text();
  transaction.handling_fees = faker.commerce.price();
  transaction.room_cost = faker.commerce.price();
  transaction.payment_id = faker.datatype.number();
  return transaction;
});
