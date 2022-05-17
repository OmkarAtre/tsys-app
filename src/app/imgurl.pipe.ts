import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgurl'
})
export class ImgurlPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
