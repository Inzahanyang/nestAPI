import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') justID: string) {
    return this.moviesService.getOne(justID);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') justID: string) {
    return this.moviesService.deleteOne(justID);
  }

  @Patch('/:id')
  patch(@Param('id') justID: string, @Body() updateData) {
    return { updatedMovie: justID, ...updateData };
  }
}
