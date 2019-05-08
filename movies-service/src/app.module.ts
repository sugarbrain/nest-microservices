import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Movie } from './entities/movie.entity';

@Module({
  imports: [
    ClientsModule.register([{
      name: 'MOVIES_SERVICE'
    }]),
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Movie])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
