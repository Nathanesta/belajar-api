import { setSeederFactory } from 'typeorm-extension';
import { Bank } from 'src/modules/bank/bank.entity';
import { faker } from '@faker-js/faker';

export default setSeederFactory(Bank, (faker) => {
  const bank = new Bank();
  bank.bank_name = faker.company.name();
  // bank.account_number = faker.finance.accountNumber();
  bank.bank_images = faker.image.image();
  return bank;
});
