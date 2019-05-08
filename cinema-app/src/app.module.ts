import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule } from '@nestjs/microservices';
import { Transport } from '@nestjs/common/enums/transport.enum';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'MOVIES_SERVICE', 
      transport: Transport.TCP, 
      options: {
        host: process.env.MOVIES_HOST
      }},
    ]),
  ],
  controllers: [AppController]
})
export class AppModule {}
