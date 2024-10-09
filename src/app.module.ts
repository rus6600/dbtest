import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poll } from './poll/poll.entity';
import { PollController } from './poll/poll.controller';
import { PollService } from './poll/ poll.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Poll],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Poll]),
  ],
  controllers: [AppController, PollController],
  providers: [AppService, PollService],
})
export class AppModule {}
