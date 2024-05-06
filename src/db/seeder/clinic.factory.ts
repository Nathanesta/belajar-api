import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Clinic } from 'src/modules/clinic/clinic.entity';

export default setSeederFactory(Clinic, (faker) => {
  const clinic = new Clinic();
  clinic.clinic_name = faker.company.name();
  clinic.address = faker.location.streetAddress();
  return clinic;
});
