import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { SoldiersModule } from './soldiers/soldiers.module';

@Module({
  imports: [TasksModule, SoldiersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
