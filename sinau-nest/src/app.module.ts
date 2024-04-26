import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TugasController } from './tugas/tugas.controller';

@Module({
  imports: [],
  controllers: [AppController, TugasController],
  providers: [AppService],
})
export class AppModule {}
