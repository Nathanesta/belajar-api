import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Drug } from 'src/modules/drug/drug.entity';

export default setSeederFactory(Drug, (faker) => {
  const drug = new Drug();
  drug.drug_name = faker.commerce.productName();
  drug.stock = faker.datatype.number();
  drug.drug_summary = faker.lorem.sentence();
  // drug.buy_price = faker.commerce.price();
  // drug.sell_price = faker.commerce.price();
  drug.category_id = faker.datatype.number();
  return drug;
});
