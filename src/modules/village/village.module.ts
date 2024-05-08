import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VillageService } from './village.service';
import { VillageController } from './village.controller';
import { Village } from './village.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Village])],
  controllers: [VillageController],
  providers: [VillageService],
})
export class VillageModule {}
