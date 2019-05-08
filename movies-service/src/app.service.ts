import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async listMovies(): Promise<Movie[]> {
    return await this.movieRepository.find();
  }

  async addMovie(data: object): Promise<Movie> {
    const movie = this.movieRepository.create(data);
    this.movieRepository.save(movie);
    return movie;
  }
}
