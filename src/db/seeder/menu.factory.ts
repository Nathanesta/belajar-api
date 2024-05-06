import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Menu } from 'src/modules/menu/menu.entity';

export default setSeederFactory(Menu, (faker) => {
  const menu = new Menu();
  menu.menu_name = faker.random.word();
  menu.role_id = 1;
  return menu;
});
