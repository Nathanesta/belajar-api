import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Profile } from 'src/modules/profile/profile.entity';

export default setSeederFactory(Profile, (faker) => {
  const profile = new Profile();
  profile.fullname = faker.person.fullName();
  profile.profil_image = faker.image.image();
  profile.no_identity = faker.datatype.number();
  profile.birth_date = faker.date.birthdate();
  profile.birth_place = faker.location.city();
  profile.address = faker.location.streetAddress();
  profile.gender = faker.person.gender();
  profile.work_in = faker.company.name();
  profile.blood_type = faker.lorem.word();
  profile.marital_status = faker.lorem.word();
  profile.nationality = faker.location.country();
  profile.religion = faker.lorem.word();
  profile.user_id = faker.datatype.number();
  profile.country_id = faker.datatype.number();
  profile.region_id = faker.datatype.number();
  profile.city_id = faker.datatype.number();
  profile.district_id = faker.datatype.number();
  profile.village_id = faker.datatype.number();
  profile.neighborhood_no = faker.datatype.number();
  profile.citizen_no = faker.datatype.number();
  profile.area_code = faker.datatype.number();
  return profile;
});
