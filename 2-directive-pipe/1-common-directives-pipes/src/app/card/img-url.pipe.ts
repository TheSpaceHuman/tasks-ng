import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgUrl',
})
export class ImgUrlPipe implements PipeTransform {
  transform(images: any): string {
    let promoImage = ''
   if(images.length > 0) {
     promoImage = images[0].url
   }
   return promoImage
  }
}
