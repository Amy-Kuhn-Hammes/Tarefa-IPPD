import { Module } from '@nestjs/common';
import { SoldiersService } from './soldiers.service';
import { SoldiersController } from './soldiers.controller';

@Module({
  controllers: [SoldiersController],
  providers: [SoldiersService],
})
export class SoldiersModule {}
