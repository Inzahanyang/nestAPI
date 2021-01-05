import { Injectable, NotFoundException } from '@nestjs/common';
import { Podcast } from './entities/podcast.entity';

@Injectable()
export class PodcastsService {
  private podcasts: Podcast[] = [
    {
      id: 1,
      title: 'day show',
      category: 'music',
      rating: 4.5,
      episodes: [
        { id: 1, title: 'morning' },
        { id: 2, title: 'afternoon' },
        { id: 3, title: 'evening' },
      ],
    },
    {
      id: 2,
      title: 'gag show',
      category: 'gag',
      rating: 4.5,
      episodes: [
        { id: 1, title: 'morning gag' },
        { id: 2, title: 'afternoon gag' },
        { id: 3, title: 'evening gag' },
      ],
    },
  ];

  getAll(): Podcast[] {
    return this.podcasts;
  }

  getOne(id: string): Podcast {
    const podcast = this.podcasts.find((podcast) => podcast.id === +id);
    if (!podcast) {
      throw new NotFoundException(`${id} Podcast is not found`);
    }
    return podcast;
  }

  create(podcastData) {
    this.podcasts.push({
      id: this.podcasts.length + 1,
      ...podcastData,
    });
  }

  update(id: string, updateData) {
    const podcast = this.getOne(id);
    this.deleteOne(id);
    this.podcasts.push({ ...podcast, ...updateData });
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.podcasts = this.podcasts.filter((podcast) => podcast.id !== +id);
  }

  getEpisode(id: string) {
    const podcast = this.podcasts.find((podcast) => podcast.id === +id);
    if (!podcast) {
      throw new NotFoundException(`${id} Podcast is not found`);
    }
    const episode = podcast.episodes;
    return episode;
  }

  getEpisodeOne(podcastId: string, episodeId: string) {
    const podcast = this.podcasts.find((podcast) => podcast.id === +podcastId);
    const episode = podcast.episodes.find(
      (episode) => episode.id === +episodeId,
    );
    return episode;
  }

  createEpisode(id: string, episodeData) {
    const podcast = this.podcasts.find((podcast) => podcast.id === +id);
    if (!podcast) {
      throw new NotFoundException(`${id} Podcast is not found`);
    }
    const episode = podcast.episodes;

    episode.push({
      id: episode.length + 1,
      ...episodeData,
    });
  }

  deleteEpisode(podcastId: string, episodeId: string) {
    this.podcasts[+podcastId - 1].episodes = this.podcasts[
      +podcastId - 1
    ].episodes.filter((episode) => episode.id !== +episodeId);
  }

  updateEpisode(podcastId: string, episodeId: string, updateData) {
    const episode = this.getEpisodeOne(podcastId, episodeId);
    this.deleteEpisode(podcastId, episodeId);
    this.podcasts[+podcastId - 1].episodes.push({
      ...episode,
      ...updateData,
    });
  }
}
