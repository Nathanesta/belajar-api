import { Controller, Get, Post, Body } from '@nestjs/common';
import { CountryDto } from './country.dto';
import { CountryService } from './country.service';
import { CountryInterface } from './country.interface';

@Controller('countries')
export class CountryController {
  constructor(private countriesService: CountryService) {}

  @Post()
  async create(@Body() countryDto: CountryDto) {
    this.countriesService.create(countryDto);
  }

  @Get()
  async findAll(): Promise<CountryInterface[]> {
    return this.countriesService.findAll();
  }
}
