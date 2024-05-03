import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TugasController } from './modules/tugas/tugas.controller';
import { DataSourceModule } from './datasource.module';
import { CountryService } from './modules/country/country.service';
import { CountryController } from './modules/country/country.controller';

@Module({
  imports: [
    DataSourceModule
  ],
  controllers: [AppController, TugasController, CountryController],
  providers: [AppService, CountryService],
})
export class AppModule {}
