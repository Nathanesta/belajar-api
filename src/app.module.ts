import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryModule } from './modules/country/country.module';
import { typeormConnectionConfig } from './env';
import { DataSourceModule } from './datasoruce.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConnectionConfig),
    DataSourceModule,
    CountryModule,
  ],
})
export class AppModule {}
