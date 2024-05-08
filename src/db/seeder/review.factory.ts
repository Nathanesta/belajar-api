import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Review } from 'src/modules/review/review.entity';

export default setSeederFactory(Review, (faker) => {
  const review = new Review();
  review.review_text = faker.lorem.text();
  review.review_date = faker.date.anytime();
  review.drug_rating = faker.datatype.number();
  review.num_of_like = faker.datatype.number();
  review.user_id = 1;
  review.drug_id = 1;
  return review;
});
