import { Controller, Get } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly ImagesService: ImagesService) {}
  @Get('all-images')
  getImages(): any {
    return this.ImagesService.getImages();
  }
}
