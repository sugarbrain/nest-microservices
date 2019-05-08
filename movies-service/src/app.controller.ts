import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { Movie } from './entities/movie.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'MOVIES_LIST'})
  async listMovies(): Promise<string> {
    return JSON.stringify(await this.appService.listMovies());
  }

  @MessagePattern( { cmd: 'CREATE_MOVIE'})
  async addMovie(data: string): Promise<string> {
    const newMovie = await this.appService.addMovie(JSON.parse(data));
    return JSON.stringify(newMovie);
  }
}
