import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Payment } from 'src/modules/payment/payment.entity';

export default setSeederFactory(Payment, (faker) => {
  const payment = new Payment();
  payment.payment_name = faker.finance.transactionType();
  payment.bank_id = faker.datatype.number();
  return payment;
});
