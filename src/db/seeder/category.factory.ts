import { setSeederFactory } from 'typeorm-extension';
import { Category } from 'src/modules/category/category.entity';
import { faker } from '@faker-js/faker';

export default setSeederFactory(Category, (faker) => {
  const category = new Category();
  category.category_name = faker.commerce.productName();
  category.description = faker.commerce.productDescription();
  return category;
});
