import { Controller, Get, Param } from '@nestjs/common';

@Controller('tugas')
export class TugasController {
  @Get('/satu')
  satu() {
    return 'okeh';
  }
  @Get('ape/:id')
  show(@Param() params) {
    return 'great no :' + params.id;
  }
}
