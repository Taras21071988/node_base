import { Injectable } from '@nestjs/common';
import { images } from 'src/moks';

@Injectable()
export class ImagesService {
  getImages() {
    return images;
  }
}
