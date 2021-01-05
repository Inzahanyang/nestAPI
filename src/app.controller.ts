import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  home() {
    return 'Welcome to podcast Api /podcasts/:id/episodes/:id';
  }
}
