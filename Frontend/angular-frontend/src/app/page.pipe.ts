import { Pipe, PipeTransform } from '@angular/core';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Pipe({
  name: 'page'
})
export class PagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
