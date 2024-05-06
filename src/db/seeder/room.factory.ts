import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Room } from 'src/modules/room/room.entity';

export default setSeederFactory(Room, (faker) => {
  const room = new Room();
  room.room_name = faker.lorem.word();
  room.description = faker.lorem.text();
  room.clinic_id = faker.datatype.number();
  return room;
});
