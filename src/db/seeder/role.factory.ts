import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Role } from 'src/modules/role/role.entity';

export default setSeederFactory(Role, (faker) => {
  const role = new Role();
  role.name = faker.lorem.word();
  role.description = faker.lorem.text();
  return role;
});
