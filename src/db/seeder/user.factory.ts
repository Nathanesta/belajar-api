import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { User } from 'src/modules/user/user.entity';

export default setSeederFactory(User, (faker) => {
  const user = new User();
  user.name = faker.person.fullName();
  user.username = faker.internet.userName();
  user.phone_number = faker.phone.number();
  user.email = faker.internet.email();
  user.password = faker.internet.password();
  user.created_at = faker.date.recent();
  user.update_at = faker.date.recent();
  user.role_id = faker.datatype.number();
  return user;
});
