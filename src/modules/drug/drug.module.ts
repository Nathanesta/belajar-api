import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DrugService } from './drug.service';
import { DrugController } from './drug.controller';
import { Drug } from './drug.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Drug])],
  controllers: [DrugController],
  providers: [DrugService],
})
export class DrugModule {}
