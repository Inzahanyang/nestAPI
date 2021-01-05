import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Podcast } from './entities/podcast.entity';
import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastService: PodcastsService) {}

  @Get()
  getAll(): Podcast[] {
    return this.podcastService.getAll();
  }

  @Post()
  create(@Body() podcastData) {
    return this.podcastService.create(podcastData);
  }

  @Get('/:id')
  getOne(@Param('id') podcastId: string): Podcast {
    return this.podcastService.getOne(podcastId);
  }

  @Patch('/:id')
  patch(@Param('id') podcastId: string, @Body() updateData) {
    return this.podcastService.update(podcastId, updateData);
  }

  @Delete('/:id')
  remove(@Param('id') podcastId: string) {
    return this.podcastService.deleteOne(podcastId);
  }

  @Get('/:id/episodes')
  getEpisode(@Param('id') podcastId: string) {
    return this.podcastService.getEpisode(podcastId);
  }

  @Get('/:id/episodes/:episodeId')
  getEpisodeOne(
    @Param('id') podcastId: string,
    @Param('episodeId') episodeId: string,
  ) {
    return this.podcastService.getEpisodeOne(podcastId, episodeId);
  }

  @Post('/:id/episodes')
  createEpisode(@Param('id') podcastId: string, @Body() episodeData) {
    return this.podcastService.createEpisode(podcastId, episodeData);
  }

  @Delete('/:id/episodes/:episodeId')
  removeEpisode(
    @Param('id') podcastId: string,
    @Param('episodeId') episodeId: string,
  ) {
    return this.podcastService.deleteEpisode(podcastId, episodeId);
  }

  @Patch('/:id/episodes/:episodeId')
  patchEpisode(
    @Param('id') podcastId: string,
    @Param('episodeId') episodeId: string,
    @Body() updateData,
  ) {
    return this.podcastService.updateEpisode(podcastId, episodeId, updateData);
  }
}
