import { Directive } from '@angular/core';
import { BaseServiceService } from './base-service.service';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private base:BaseServiceService) {

    console.log(base.url);
   }

}
