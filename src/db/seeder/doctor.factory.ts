import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Doctor } from 'src/modules/doctor/doctor.entity';

export default setSeederFactory(Doctor, (faker) => {
  const doctor = new Doctor();
  doctor.doctor_name = faker.location.country();
  doctor.place_of_birth = faker.location.city();
  doctor.date_of_birth = faker.date.birthdate();
  doctor.specialist = faker.commerce.department();
  doctor.graduate_of = faker.company.name();
  doctor.bio = faker.person.bio();
  doctor.document_id = 1;
  return doctor;
});
