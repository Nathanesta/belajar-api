import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Document } from 'src/modules/document/document.entity';

export default setSeederFactory(Document, (faker) => {
  const document = new Document();
  document.document_name = faker.lorem.word();
  document.document_url = faker.internet.url();
  return document;
});
