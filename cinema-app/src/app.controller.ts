import { Controller, Get, Inject, Post, HttpCode, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(@Inject('MOVIES_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  listMovies(): Observable<string[]> {
    const pattern = { cmd: 'MOVIES_LIST' };
    return this.client.send<string[]>(pattern, []);
  }

  @Post('/add')
  @HttpCode(201)
  addMovie(@Body() movie: object): Observable<string> {
    const pattern = { cmd: 'CREATE_MOVIE' };
    return this.client.send<string>(pattern, JSON.stringify(movie));
  }
}