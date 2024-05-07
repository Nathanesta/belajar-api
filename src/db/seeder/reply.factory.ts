import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Reply } from 'src/modules/reply/reply.entity';

export default setSeederFactory(Reply, (faker) => {
  const reply = new Reply();
  reply.reply_text = faker.lorem.text();
  reply.reply_date = faker.date.anytime();
  reply.review_id = 1;
  reply.user_id = 1;

  return reply;
});
