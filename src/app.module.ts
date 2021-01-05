import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { PodcastsController } from './podcasts/podcasts.controller';
import { PodcastsService } from './podcasts/podcasts.service';

@Module({
  imports: [MoviesModule],
  controllers: [AppController, PodcastsController],
  providers: [PodcastsService],
})
export class AppModule {}
