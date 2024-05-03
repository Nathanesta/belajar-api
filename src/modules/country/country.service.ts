import { Injectable } from '@nestjs/common';
import { CountryInterface } from './country.interface';

@Injectable()
export class CountryService {
  private readonly countries: CountryInterface[] = [];

  create(country: CountryInterface) {
    this.countries.push(country);
  }

  findAll(): CountryInterface[] {
    return this.countries;
  }
}
